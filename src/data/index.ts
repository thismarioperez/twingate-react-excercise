import { HeroSection, ImageTextSection } from "@/entities";

export const hero: HeroSection = {
    type: "hero",
    imageURI: "https://placecats.com/300/200",
};

export const imageText: ImageTextSection = {
    type: "image-text",
    imageURI: "https://placecats.com/300/200",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    title: "Lorem ipsum",
    leftToRight: true,
};
