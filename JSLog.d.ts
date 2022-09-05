declare module JSLog {
    const enum LogLevel {
        Debug = 0,
        Info = 1,
        Log = 2,
        Warn = 3,
        Error = 4
    }
    const enum LogLevelName {
        Debug = "debug",
        Info = "info",
        Log = "log",
        Warn = "warn",
        Error = "error"
    }
    function setLogLevel(newLevel: LogLevel | LogLevelName): void;
    function setContext(context: string): void;
    function log(message: any, level?: LogLevel | LogLevelName, context?: string): void;
    function debug(message: any, context?: string): void;
    function info(message: any, context?: string): void;
    function warn(message: any, context?: string): void;
    function error(message: any, context?: string): void;
}
