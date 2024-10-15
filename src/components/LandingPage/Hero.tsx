import { HeroSection } from "@/entities";

type Props = {
    imageURI: HeroSection["imageURI"];
};
export default function Hero({ imageURI }: Props) {
    if (!imageURI) {
        return (
            <div className="prose">
                <p>No hero image provided</p>
            </div>
        );
    }

    return (
        <div className="size-full">
            <img className="size-full object-cover" src={imageURI} alt={`Hero image pointing to ${imageURI}`} />;
        </div>
    );
}
