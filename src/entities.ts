export type SectionType = "hero" | "image-text" | "data";

export type Section = {
    type: SectionType;
};
export type HeroSection = Section & {
    type: "hero";
    imageURI: string;
};

export type ImageTextSection = Section & {
    type: "image-text";
    imageURI: string;
    text: string;
    title?: string;
    leftToRight?: boolean;
};

export type DataSection = Section & {
    type: "data";
    url: string;
};
