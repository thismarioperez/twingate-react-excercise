export type SectionType = "hero" | "image-text" | "data";

export type Section = {
    type: SectionType;
};
export type HeroSection = {
    type: "hero";
    imageURI: string;
};

export type ImageTextSection = {
    type: "image-text";
    imageURI: string;
    text: string;
    title?: string;
    leftToRight?: boolean;
};

export type DataSection = {
    type: "data";
    url: string;
};
