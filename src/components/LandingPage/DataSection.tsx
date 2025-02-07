import { DataSection as TDataSection } from "@/entities";
import { useEffect, useState } from "react";

type Props = Omit<TDataSection, "type">;
export default function DataSection({ url }: Props) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const text = data ? JSON.stringify(data, null, 2) : "";

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (!url) {
        return <div>no url provided</div>;
    }

    if (isLoading) {
        return <div>loading...</div>;
    }

    if (!data) {
        return <button onClick={fetchData}>refresh</button>;
    }

    return (
        <div className="prose py-4">
            <pre>
                <code>{text.length < 255 ? text : `${text.slice(0, 255)}...`}</code>
            </pre>
            <button className="btn" onClick={fetchData}>
                refresh
            </button>
        </div>
    );
}
