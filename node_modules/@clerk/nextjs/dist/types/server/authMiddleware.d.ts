import type { AuthObject } from '@clerk/backend';
import type Link from 'next/link';
import type { NextFetchEvent, NextMiddleware, NextRequest } from 'next/server';
import type { NextMiddlewareResult, WithAuthOptions } from './types';
type WithPathPatternWildcard<T> = `${T & string}(.*)`;
type NextTypedRoute<T = Parameters<typeof Link>['0']['href']> = T extends string ? T : never;
type ExcludeRootPath<T> = T extends '/' ? never : T;
type RouteMatcherWithNextTypedRoutes = WithPathPatternWildcard<ExcludeRootPath<NextTypedRoute>> | NextTypedRoute | (string & {});
/**
 * The default ideal matcher that excludes the _next directory (internals) and all static files,
 * but it will match the root route (/) and any routes that start with /api or /trpc.
 */
export declare const DEFAULT_CONFIG_MATCHER: string[];
/**
 * Any routes matching this path will be ignored by the middleware.
 * This is the inverted version of DEFAULT_CONFIG_MATCHER.
 */
export declare const DEFAULT_IGNORED_ROUTES: string[];
/**
 * Any routes matching this path will be treated as API endpoints by the middleware.
 */
export declare const DEFAULT_API_ROUTES: string[];
type RouteMatcherParam = Array<RegExp | RouteMatcherWithNextTypedRoutes> | RegExp | RouteMatcherWithNextTypedRoutes | ((req: NextRequest) => boolean);
type IgnoredRoutesParam = Array<RegExp | string> | RegExp | string | ((req: NextRequest) => boolean);
type ApiRoutesParam = IgnoredRoutesParam;
type WithClerkUrl<T> = T & {
    /**
     * When a NextJs app is hosted on a platform different from Vercel
     * or inside a container (Netlify, Fly.io, AWS Amplify, docker etc),
     * req.url is always set to `localhost:3000` instead of the actual host of the app.
     *
     * The `authMiddleware` uses the value of the available req.headers in order to construct
     * and use the correct url internally. This url is then exposed as `experimental_clerkUrl`,
     * intended to be used within `beforeAuth` and `afterAuth` if needed.
     */
    experimental_clerkUrl: NextRequest['nextUrl'];
};
type BeforeAuthHandler = (req: WithClerkUrl<NextRequest>, evt: NextFetchEvent) => NextMiddlewareResult | Promise<NextMiddlewareResult> | false | Promise<false>;
type AfterAuthHandler = (auth: AuthObject & {
    isPublicRoute: boolean;
    isApiRoute: boolean;
}, req: WithClerkUrl<NextRequest>, evt: NextFetchEvent) => NextMiddlewareResult | Promise<NextMiddlewareResult>;
type AuthMiddlewareParams = WithAuthOptions & {
    /**
     * A function that is called before the authentication middleware is executed.
     * If a redirect response is returned, the middleware will respect it and redirect the user.
     * If false is returned, the auth middleware will not execute and the request will be handled as if the auth middleware was not present.
     */
    beforeAuth?: BeforeAuthHandler;
    /**
     * A function that is called after the authentication middleware is executed.
     * This function has access to the auth object and can be used to execute logic based on the auth state.
     */
    afterAuth?: AfterAuthHandler;
    /**
     * A list of routes that should be accessible without authentication.
     * You can use glob patterns to match multiple routes or a function to match against the request object.
     * Path patterns and regular expressions are supported, for example: `['/foo', '/bar(.*)'] or `[/^\/foo\/.*$/]`
     * The sign in and sign up URLs are included by default, unless a function is provided.
     * For more information, see: https://clerk.com/docs
     */
    publicRoutes?: RouteMatcherParam;
    /**
     * A list of routes that should be ignored by the middleware.
     * This list typically includes routes for static files or Next.js internals.
     * For improved performance, these routes should be skipped using the default config.matcher instead.
     */
    ignoredRoutes?: IgnoredRoutesParam;
    /**
     * A list of routes that should be treated as API endpoints.
     * When user is signed out, the middleware will return a 401 response for these routes, instead of redirecting the user.
     *
     * If omitted, the following heuristics will be used to determine an API endpoint:
     * - The route path is ['/api/(.*)', '/trpc/(.*)'],
     * - or the request has `Content-Type` set to `application/json`,
     * - or the request method is not one of: `GET`, `OPTIONS` ,` HEAD`
     *
     * @default undefined
     */
    apiRoutes?: ApiRoutesParam;
    /**
     * Enables extra debug logging.
     */
    debug?: boolean;
};
export interface AuthMiddleware {
    (params?: AuthMiddlewareParams): NextMiddleware;
}
declare const authMiddleware: AuthMiddleware;
export { authMiddleware };
/**
 * Create a function that matches a request against the specified routes.
 * Precomputes the glob matchers for the public routes, so we don't have to
 * recompile the regular expressions on every request.
 */
export declare const createRouteMatcher: (routes: RouteMatcherParam) => (req: NextRequest) => boolean;
//# sourceMappingURL=authMiddleware.d.ts.map