

local monitoringEvent = require "common.events"
local monitoringRule = require "common.rules"

local set = require "common.set"
local Set = set.Set

local utils = require "lava.utils"
local Map = utils.Map


HoneypotModificationInfo = class {
    __name = "HoneypotModificationInfo",
}

function HoneypotModificationInfo.new()
    local info = HoneypotModificationInfo()
    info.fileRenameCount = 0
    info.fileModifiedCount = 0
    info.highEntropyWriteCount = 0
    info.highEntropyWriteNumLimit = 0
    
    info.procFileIdsMap = {}
    
    info.procEventIdsMap = {}
    info.processIdPathIdMap = {}
    return info
end

function HoneypotModificationInfo:increaseFileCount(eType)
    local cases = {
        [monitoringEvent.FILE_WRITE] = function() self.fileModifiedCount = self.fileModifiedCount + 1 end,
        [monitoringEvent.FILE_HIGH_ENTROPY_WRITE] = function() self.highEntropyWriteCount = self.highEntropyWriteCount + 1 end,
        [monitoringEvent.FILE_HARDLINK_FILE] = function() self.fileRenameCount = self.fileRenameCount + 1 end,
        [monitoringEvent.FILE_RENAME] = function() self.fileRenameCount = self.fileRenameCount + 1 end,
        [monitoringEvent.FILE_PE_RENAME] = function(x) self.fileRenameCount = self.fileRenameCount + 1 end,
    }
    local default = function() LOG(ERROR, "Invalid event '%s'.", eType)  end,
    utils.switch(eType, cases, default)
end

function HoneypotModificationInfo:updateSuspiciousPidPathIdMap(processId, pathId)
    self.processIdPathIdMap[processId]= pathId
end

function HoneypotModificationInfo:setHighEntropyWriteNumLimit(limit)
    self.highEntropyWriteNumLimit = limit
end

function HoneypotModificationInfo:setProcData(processPathId, fileId, eventId)
    Map.insert(self.procFileIdsMap, processPathId, fileId)
    Map.insert(self.procEventIdsMap, processPathId, eventId)
end

function HoneypotModificationInfo:shouldUpdateSeverity(processPathId, eventType, ruleId)
    
    local totalWrites = Map.getValuesCount(self.procFileIdsMap, processPathId)
    if totalWrites >= self.highEntropyWriteNumLimit then
        if self.procEventIdsMap[processPathId] then
            local severity = 4
            for eventId in pairs(self.procEventIdsMap[processPathId]) do
                engine:UpdateEventByID(eventId, eventType, ruleId, severity, 0)
            end
        end
    end
end

function HoneypotModificationInfo:doRansomwareAnalysis(vmid, engine)
    if self.fileModifiedCount > 0 or self.fileRenameCount > 0 then
        
        local ransomwareStr = "Win32.Ransomware.Generic"
        if self.highEntropyWriteNumLimit > 0 and
           self.highEntropyWriteCount >= self.highEntropyWriteNumLimit then
            ransomwareStr = "Win32.Ransomware.Crypt"
        end

        local matchedStr = engine:GetRansomwareWithHighestFreq()
        if matchedStr == nil or matchedStr == '' then
            LOG(INFO, "Failed to get unique matched ransomware string.")
        else
            ransomwareStr = matchedStr
        end
        LOG(INFO, "Guest VMID[%d] is infected with ransomware %s", vmid, ransomwareStr)
        LOG(VERBOSE, "Ransomware '%s' has modified '%d' files and renamed '%d' files.",
            ransomwareStr, self.fileModifiedCount, self.fileRenameCount)
        for pid, pathId in pairs(self.processIdPathIdMap) do
            
            procDataInfo:addHighSeverityPid(pid)

            LOG(INFO, "Generate MalwareBehaviorFamily event for ransomware process '%d'", pid)
            engine:GenerateMalwareFamilyEvent(ransomwareStr,
                                              pid,
                                              pathId,
                                              monitoringRule.MALWARE_BEHAVIOR_FAMILY,
                                              BRO_SEVERITY_HIGH)
        end
    end
end

