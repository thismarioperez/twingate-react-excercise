import { useContent } from "@/hooks/useContent";
import { useState } from "react";

export default function DataInput() {
    const { content, setContent } = useContent();

    const [value, setValue] = useState(JSON.stringify(content, null, 2));

    return (
        <div className="prose w-full p-4">
            <div className="mb-4">
                <textarea
                    name="data"
                    id="data"
                    rows={10}
                    className="solid min-h-[50vh] w-full border font-mono"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>

            <button
                className="btn"
                onClick={() => {
                    try {
                        const json = JSON.parse(value);
                        setContent(json);
                    } catch (error) {
                        console.error(error);
                    }
                }}
            >
                Save Content
            </button>
        </div>
    );
}
