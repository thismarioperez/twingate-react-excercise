import { PropsWithChildren, createContext, useState } from "react";
import { HeroSection, ImageTextSection, DataSection } from "@/entities";

type Section = HeroSection | ImageTextSection | DataSection;

const defaultContent: Section[] = [
    {
        type: "hero",
        imageURI: "https://placecats.com/300/200",
    },
    {
        type: "image-text",
        imageURI: "https://placecats.com/300/200",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        title: "Lorem ipsum",
        leftToRight: true,
    },
    {
        type: "data",
        url: "https://dog.ceo/api/breeds/image/random",
    },
    {
        type: "data",
        url: "https://api.openbrewerydb.org/v1/breweries",
    },
];

type ContentContextType = {
    content: Section[];
    setContent: (content: Section[]) => void;
};

export const ContentContext = createContext<ContentContextType>({} as ContentContextType);

export function ContentProvider({ children }: PropsWithChildren) {
    const [content, setContent] = useState<Section[]>(defaultContent);

    return <ContentContext.Provider value={{ content, setContent }}>{children}</ContentContext.Provider>;
}
