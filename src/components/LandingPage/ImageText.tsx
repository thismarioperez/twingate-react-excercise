import { ImageTextSection } from "@/entities";
import cn from "classnames";

type Props = Omit<ImageTextSection, "type">;

export default function ImageText({ imageURI, text, title, leftToRight = true }: Props) {
    return (
        <div className="prose flex w-full flex-row py-4">
            <div className={cn("w-1/4", leftToRight ? "order-1" : "order-3")}>
                {!imageURI && <p>No image provided</p>}
                {imageURI && <img className="m-0 size-full object-cover" src={imageURI} />}
            </div>
            <div className="order-2 w-full">
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </div>
    );
}
