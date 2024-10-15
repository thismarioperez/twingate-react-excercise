import { useContext } from "react";
import { ContentContext } from "@/providers/ContentProvider";

export const useContent = () => {
    return useContext(ContentContext);
};
