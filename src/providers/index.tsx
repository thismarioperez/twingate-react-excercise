import { PropsWithChildren } from "react";
import { ContentProvider } from "./ContentProvider";

const Providers = ({ children }: PropsWithChildren) => {
    return <ContentProvider>{children}</ContentProvider>;
};

export default Providers;
