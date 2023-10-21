import React from 'react';
import type { NextClerkProviderProps } from '../../types';
declare global {
    export interface Window {
        __clerk_nav_await: Array<(value: void) => void>;
        __clerk_nav: (to: string) => Promise<void>;
    }
}
export declare const ClientClerkProvider: (props: NextClerkProviderProps) => React.JSX.Element;
//# sourceMappingURL=ClerkProvider.d.ts.map