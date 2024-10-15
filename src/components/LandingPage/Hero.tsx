import { HeroSection } from "@/entities";

type Props = Omit<HeroSection, "type">;
export default function Hero({ imageURI }: Props) {
    if (!imageURI) {
        return (
            <div className="prose">
                <p>No hero image provided</p>
            </div>
        );
    }

    return (
        <div className="h-60 w-full py-4">
            <img className="m-0 size-full object-cover" src={imageURI} />
        </div>
    );
}
