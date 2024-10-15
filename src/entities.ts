export type SectionType = "hero" | "image-text" | "data";

export type Section = {
    type: SectionType;
};
export type Hero = Section & {
    type: "hero";
    imageURI: string;
};

export type ImageText = Section & {
    type: "image-text";
    imageURI: string;
    text: string;
    title?: string;
    leftToRight?: boolean;
};

export type Data = Section & {
    type: "data";
    url: string;
};
