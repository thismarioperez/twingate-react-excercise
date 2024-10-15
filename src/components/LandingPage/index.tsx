import DataSection from "./DataSection";
import Hero from "./Hero";
import ImageText from "./ImageText";
import { SectionType, Section as TSection } from "@/entities";
import { useContent } from "@/hooks/useContent";

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
    const { content } = useContent();
    return (
        <div className="prose w-full">
            {content.map((section, idx) => (
                <Section key={idx} {...section} />
            ))}
        </div>
    );
}
