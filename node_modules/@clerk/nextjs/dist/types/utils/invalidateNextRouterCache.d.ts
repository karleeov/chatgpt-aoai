/**
 * Only for /pages router
 *
 * Next currently prefetches the page of every visible Link on the page.
 * For every prefetch request, the middleware runs and the response is cached in
 * window.next.router.sdc or window.next.router.sdc
 *
 * Imagine a scenario with a /protected page requiring the user to be signed in using middleware.
 * If we don't invalidate the cache, we end up in the following redirect flow:
 * home -> /protected -> middleware redirects to /sign-in -> perform sign-in
 *            -> try to navigate to /protected but the cached 307 response is used
 *                   -> redirect to /sign-in instead -> withRedirectToHome -> home
 * When the auth state changes and the middleware runs again, the client-side router
 * does not automatically invalidate the cache so the browser follows the cached response
 *
 * This helper invalidates both known caches help prevent the scenario described above.
 */
export declare const invalidateNextRouterCache: () => void;
//# sourceMappingURL=invalidateNextRouterCache.d.ts.map