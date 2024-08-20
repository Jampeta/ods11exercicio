








executableRules = {
    packed = {
        signed = {
            ["honeypot modification"]                  = {  ruleID = 39, result = "MALICIOUS"  },
            ["root kit"]                               = {  ruleID =  9, result = "MALICIOUS"  },
        },
        unsigned = {
            ["code-injection"]                         = {  ruleID = 21, result = "MALICIOUS"  },
            ["crypto malware"]                         = {  ruleID = 24, result = "MALICIOUS"  },
            ["honeypot modification"]                  = {  ruleID = 40, result = "MALICIOUS"  },
            ["persistence"]                            = {  ruleID =  3, result = "MALICIOUS"  },
            ["persistence 2"]                          = {  ruleID = 19, result = "SUSPICIOUS" },
            ["root kit"]                               = {  ruleID =  8, result = "MALICIOUS"  },
            ["updating os boot setting"]               = {  ruleID =  6, result = "MALICIOUS"  },
            ["updating os boot setting 2"]             = {  ruleID = 18, result = "SUSPICIOUS" },
            ["updating os setting"]                    = {  ruleID =  4, result = "MALICIOUS"  },
            ["updating setting of application"]        = {  ruleID =  2, result = "MALICIOUS"  },
        },
    },
    unpacked = {
        signed = {
            ["honeypot modification"]                  = {  ruleID = 41, result = "MALICIOUS"  },
            ["root kit"]                               = {  ruleID = 10, result = "MALICIOUS"  },
        },
        unsigned = {
            ["code-injection"]                         = {  ruleID = 20, result = "MALICIOUS"  },
            ["crypto malware"]                         = {  ruleID = 23, result = "SUSPICIOUS" },
            ["honeypot modification"]                  = {  ruleID = 42, result = "MALICIOUS"  },
            ["persistence"]                            = {  ruleID =  1, result = "MALICIOUS"  },
            ["root kit"]                               = {  ruleID =  7, result = "MALICIOUS"  },
            ["updating os boot setting"]               = {  ruleID =  5, result = "MALICIOUS"  },
            ["updating os setting"]                    = {  ruleID = 15, result = "SUSPICIOUS" },
            ["updating setting of application"]        = {  ruleID = 13, result = "SUSPICIOUS" },
        },
    },
}
