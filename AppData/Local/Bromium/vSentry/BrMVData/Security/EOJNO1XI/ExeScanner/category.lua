











categories = {
    {
        name = "persistence",
        id = 1,
        expressions = {
            {
                { behaviourID = 6, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1026, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1025, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1027, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1033, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1034, key = "ProcessID" }, 
            },
        },
    },
    {
        name = "privilege escalations",
        id = 2,
        expressions = {
            {
                { behaviourID = 19, key = "ProcessID" }, 
            },
            {
                { behaviourID = 17, key = "ProcessID" }, 
                { behaviourID = 1, key = "ProcessID" }, 
            },
        },
    },
    {
        name = "command and control",
        id = 3,
        expressions = {
            {
                { behaviourID = 2, key = "TargetProcessID" }, 
                { behaviourID = 12, key = "ProcessID" }, 
            },
            {
                { behaviourID = 3, key = "ProcessID" }, 
                { behaviourID = 12, key = "ProcessID" }, 
            },
            {
                { behaviourID = 39, key = "ProcessID" }, 
                { behaviourID = 12, key = "ProcessID" }, 
            },
            {
                { behaviourID = 32, key = "TargetProcessID" }, 
                { behaviourID = 34, key = "TargetProcessID" }, 
                { behaviourID = 12, key = "ProcessID" }, 
            },
            {
                { behaviourID = 35, key = "TargetProcessID" }, 
                { behaviourID = 34, key = "TargetProcessID" }, 
                { behaviourID = 12, key = "ProcessID" }, 
            },
            {
                { behaviourID = 32, key = "TargetProcessID" }, 
                { behaviourID = 36, key = "TargetProcessID" }, 
                { behaviourID = 12, key = "ProcessID" }, 
            },
            {
                { behaviourID = 35, key = "TargetProcessID" }, 
                { behaviourID = 36, key = "TargetProcessID" }, 
                { behaviourID = 12, key = "ProcessID" }, 
            },
        },
    },
    {
        name = "updating setting of application",
        id = 4,
        expressions = {
            {
                { behaviourID = 1071, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1048, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1049, key = "ProcessID" }, 
            },
        },
    },
    {
        name = "updating os setting",
        id = 5,
        expressions = {
            {
                { behaviourID = 1035, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1036, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1038, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1039, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1040, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1041, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1042, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1043, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1044, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1045, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1046, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1047, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1050, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1051, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1052, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1053, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1086, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1072, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1073, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1083, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1081, key = "ProcessID" }, 
            },
        },
    },
    {
        name = "updating os boot setting",
        id = 6,
        expressions = {
            {
                { behaviourID = 1074, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1075, key = "ProcessID" }, 
            },
        },
    },
    {
        name = "anti-forensic",
        id = 7,
        expressions = {
            {
                { behaviourID = 9, key = "ProcessID" }, 
            },
            {
                { behaviourID = 10, key = "ProcessID" }, 
            },
            {
                { behaviourID = 11, key = "ProcessID" }, 
            },
            {
                { behaviourID = 25, key = "ProcessID" }, 
            },
        },
    },
    {
        name = "root kit",
        id = 8,
        expressions = {
            {
                { behaviourID = 6, key = "ProcessID" }, 
            },
            {
                { behaviourID = 7, key = "ProcessID" }, 
            },
            {
                { behaviourID = 8, key = "ProcessID" }, 
            },
            {
                { behaviourID = 13, key = "ProcessID" }, 
            },
            {
                { behaviourID = 14, key = "ProcessID" }, 
            },
            {
                { behaviourID = 29, key = "ProcessID" }, 
            },
            {
                { behaviourID = 30, key = "ProcessID" }, 
            },
            {
                { behaviourID = 26, key = "ProcessID" }, 
            },
        },
    },
    {
        name = "stealer",
        id = 9,
        expressions = {
            {
                { behaviourID = 16, key = "ProcessID" }, 
            },
            {
                { behaviourID = 32, key = "TargetProcessID" }, 
                { behaviourID = 34, key = "TargetProcessID" }, 
                { behaviourID = 40, key = "ProcessID" }, 
            },
            {
                { behaviourID = 35, key = "TargetProcessID" }, 
                { behaviourID = 34, key = "TargetProcessID" }, 
                { behaviourID = 40, key = "ProcessID" }, 
            },
            {
                { behaviourID = 32, key = "TargetProcessID" }, 
                { behaviourID = 36, key = "TargetProcessID" }, 
                { behaviourID = 40, key = "ProcessID" }, 
            },
            {
                { behaviourID = 35, key = "TargetProcessID" }, 
                { behaviourID = 36, key = "TargetProcessID" }, 
                { behaviourID = 40, key = "ProcessID" }, 
            },
        },
    },
    {
        name = "anti-analysis",
        id = 10,
        expressions = {
            {
                { behaviourID = 31, key = "ProcessID" }, 
            },
        },
    },
    {
        name = "self-protection",
        id = 11,
        expressions = {
            {
                { behaviourID = 27, key = "ProcessID" }, 
            },
        },
    },
    {
        name = "in-memory attack",
        id = 12,
        expressions = {
            {
                { behaviourID = 39, key = "ProcessID" }, 
            },
        },
    },
    {
        name = "code-injection",
        id = 13,
        expressions = {
            {
                { behaviourID = 32, key = "TargetProcessID" }, 
                { behaviourID = 34, key = "TargetProcessID" }, 
            },
            {
                { behaviourID = 32, key = "TargetProcessID" }, 
                { behaviourID = 44, key = "TargetProcessID" }, 
            },
            {
                { behaviourID = 35, key = "TargetProcessID" }, 
                { behaviourID = 34, key = "TargetProcessID" }, 
            },
            {
                { behaviourID = 32, key = "TargetProcessID" }, 
                { behaviourID = 36, key = "TargetProcessID" }, 
            },
            {
                { behaviourID = 35, key = "TargetProcessID" }, 
                { behaviourID = 36, key = "TargetProcessID" }, 
            },
            {
                { behaviourID = 37, key = "TargetProcessID" }, 
            },
        },
    },
    {
        name = "updating os boot setting 2",
        id = 14,
        expressions = {
            {
                { behaviourID = 1029, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1030, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1032, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1054, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1055, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1089, key = "ProcessID" }, 
            },
        },
    },
    {
        name = "persistence 2",
        id = 15,
        expressions = {
            {
                { behaviourID = 1090, key = "ProcessID" }, 
            },
        },
    },
    {
        name = "crypto malware",
        id = 16,
        expressions = {
            {
                { behaviourID = 1090, key = "ProcessID" }, 
                { behaviourID = 45, key = "ProcessID" }, 
                { behaviourID = 46, key = "ProcessID" }, 
                { behaviourID = 47, key = "ProcessID" }, 
            },
        },
    },
    {
        name = "triggers for scripts",
        id = 17,
        expressions = {
            {
                { behaviourID = 2, key = "ProcessID" }, 
            },
            {
                { behaviourID = 3, key = "ProcessID" }, 
            },
            {
                { behaviourID = 4, key = "ProcessID" }, 
            },
            {
                { behaviourID = 6, key = "ProcessID" }, 
            },
            {
                { behaviourID = 7, key = "ProcessID" }, 
            },
            {
                { behaviourID = 8, key = "ProcessID" }, 
            },
            {
                { behaviourID = 9, key = "ProcessID" }, 
            },
            {
                { behaviourID = 10, key = "ProcessID" }, 
            },
            {
                { behaviourID = 11, key = "ProcessID" }, 
            },
            {
                { behaviourID = 14, key = "ProcessID" }, 
            },
            {
                { behaviourID = 26, key = "ProcessID" }, 
            },
            {
                { behaviourID = 29, key = "ProcessID" }, 
            },
            {
                { behaviourID = 30, key = "ProcessID" }, 
            },
            {
                { behaviourID = 48, key = "ProcessID" }, 
            },
            {
                { behaviourID = 54, key = "ProcessID" }, 
            },
            {
                { behaviourID = 57, key = "ProcessID" }, 
            },
            {
                { behaviourID = 58, key = "ProcessID" }, 
            },
            {
                { behaviourID = 64, key = "ProcessID" }, 
            },
            {
                { behaviourID = 65, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1024, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1025, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1026, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1027, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1029, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1031, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1032, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1033, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1034, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1035, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1036, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1037, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1038, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1039, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1040, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1041, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1042, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1043, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1044, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1045, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1046, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1047, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1048, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1049, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1050, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1051, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1052, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1053, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1054, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1055, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1086, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1087, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1068, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1070, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1066, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1069, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1071, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1072, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1073, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1074, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1075, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1082, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1083, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1081, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1030, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1085, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1088, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1089, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1090, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1097, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1102, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1109, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1110, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1113, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1114, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1115, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1116, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1117, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1118, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1119, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1120, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1121, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1122, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1124, key = "ProcessID" }, 
            },
        },
    },
    {
        name = "powershell-safe: privilege escalations",
        id = 18,
        expressions = {
            {
                { behaviourID = 17, key = "ProcessID" }, 
                { behaviourID = 1, key = "ProcessID" }, 
            },
        },
    },
    {
        name = "powershell invocation",
        id = 19,
        expressions = {
            {
                { behaviourID = 1110, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1111, key = "ProcessID" }, 
            },
        },
    },
    {
        name = "suspicious network failure",
        id = 20,
        expressions = {
            {
                { behaviourID = 60, key = "ProcessID" }, 
            },
            {
                { behaviourID = 62, key = "ProcessID" }, 
            },
            {
                { behaviourID = 64, key = "ProcessID" }, 
            },
        },
    },
    {
        name = "honeypot modification",
        id = 21,
        expressions = {
            {
                { behaviourID = 1102, key = "ProcessID" }, 
            },
            {
                { behaviourID = 1350, key = "ProcessID" }, 
            },
        },
    },
}
