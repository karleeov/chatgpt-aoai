import type { GetServerSidePropsResult } from 'next';
import type { AuthData } from '../types';
/**
 * @param callbackResult The results from the wrapped (user-provided) getServerSideProps callback.
 * @param authData
 */
export declare function injectSSRStateIntoProps(callbackResult: any, authData: AuthData): GetServerSidePropsResult<any>;
export declare const injectSSRStateIntoObject: (obj: any, authData: AuthData) => any;
//# sourceMappingURL=serializeProps.d.ts.map