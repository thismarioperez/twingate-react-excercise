import { hero, imageText, dataSection } from "@/data";
import DataSection from "./DataSection";
import Hero from "./Hero";
import ImageText from "./ImageText";
import { SectionType, Section as TSection } from "@/entities";

const data = [hero, imageText, dataSection, dataSection, dataSection];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SECTION: Record<SectionType, any> = {
    hero: Hero,
    "image-text": ImageText,
    data: DataSection,
};

type SectionProps = TSection;
const Section = ({ type, ...props }: SectionProps) => {
    if (!type) {
        return null;
    }

    const Component = SECTION[type];

    return <Component {...props} />;
};

export default function LandingPage() {
    return (
        <div className="prose size-full">
            {data.map((section, idx) => (
                <Section key={idx} {...section} />
            ))}
        </div>
    );
}
