import type { IsomorphicClerkOptions } from '@clerk/clerk-react';
import type { PublishableKeyOrFrontendApi } from '@clerk/types';
import React from 'react';
type NextAppClerkProviderProps = React.PropsWithChildren<Omit<IsomorphicClerkOptions, keyof PublishableKeyOrFrontendApi> & Partial<PublishableKeyOrFrontendApi>>;
export declare function ClerkProvider(props: NextAppClerkProviderProps): React.JSX.Element;
export {};
//# sourceMappingURL=ClerkProvider.d.ts.map