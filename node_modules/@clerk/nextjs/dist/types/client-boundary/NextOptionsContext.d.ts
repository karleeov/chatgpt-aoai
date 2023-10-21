import React from 'react';
import type { NextClerkProviderProps } from '../types';
type ClerkNextContextValue = Partial<Omit<NextClerkProviderProps, 'children'>>;
declare const useClerkNextOptions: () => Partial<Omit<NextClerkProviderProps, "children">>;
declare const ClerkNextOptionsProvider: (props: React.PropsWithChildren<{
    options: ClerkNextContextValue;
}>) => React.JSX.Element;
export { ClerkNextOptionsProvider, useClerkNextOptions };
//# sourceMappingURL=NextOptionsContext.d.ts.map