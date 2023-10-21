/**
 * These functions originate from @clerk/shared
 * Maintain these until @clerk/shared does not depend on react
 */
export declare function isValidProxyUrl(key: string | undefined): boolean;
export declare function isHttpOrHttps(key: string | undefined): boolean;
export declare function isProxyUrlRelative(key: string): boolean;
export declare function proxyUrlToAbsoluteURL(url: string | undefined): string;
type VOrFnReturnsV<T> = T | undefined | ((v: URL) => T);
export declare function handleValueOrFn<T>(value: VOrFnReturnsV<T>, url: URL): T | undefined;
export declare function handleValueOrFn<T>(value: VOrFnReturnsV<T>, url: URL, defaultValue: T): T;
export {};
//# sourceMappingURL=shared.d.ts.map