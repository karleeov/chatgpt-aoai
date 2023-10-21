import { NextResponse } from 'next/server';
/**
 * A function that merges two Response objects into a single response.
 * The final response respects the body and the status of the last response,
 * but the cookies and headers of all responses are merged.
 */
export declare const mergeResponses: (...responses: (NextResponse | Response | null | undefined | void)[]) => NextResponse<unknown> | undefined;
export declare const isRedirect: (res: Response) => string | null;
export declare const setHeader: (res: Response, name: string, val: string) => Response;
export declare const stringifyHeaders: (headers: {
    forEach: Headers['forEach'];
}) => string;
//# sourceMappingURL=response.d.ts.map