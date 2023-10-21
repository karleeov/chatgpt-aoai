export type Log = string | Record<string, unknown>;
export type LogEntry = Log | Log[];
export type Logger<L = Log> = {
    commit: () => void;
    debug: (...args: Array<L | (() => L)>) => void;
    enable: () => void;
};
export declare const createDebugLogger: (name: string, formatter: (val: LogEntry) => string) => () => Logger;
type WithLogger = <L extends Logger, H extends (...args: any[]) => any>(loggerFactoryOrName: string | (() => L), handlerCtor: (logger: Omit<L, 'commit'>) => H) => H;
export declare const withLogger: WithLogger;
export {};
//# sourceMappingURL=debugLogger.d.ts.map