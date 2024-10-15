import ImageText from "@/components/LandingPage/ImageText";
import { imageText } from "@/data";
import { render, screen } from "@testing-library/react";

describe("ImageText", () => {
    it("should render image and text", () => {
        render(<ImageText {...imageText} />);

        expect(screen.getByRole("img")).toBeInTheDocument();
        expect(screen.getByRole("img")).toHaveAttribute("src", imageText.imageURI);
        expect(screen.getByRole("heading")).toBeInTheDocument();
        expect(screen.getByRole("paragraph")).toBeInTheDocument();
    });

    it("should not render title if no title is provided", () => {
        render(<ImageText {...imageText} title="" />);

        expect(screen.queryByRole("heading")).not.toBeInTheDocument();
    });

    it("should render message if no imageURI is provided", () => {
        render(<ImageText {...imageText} imageURI="" />);

        expect(screen.getByText(/no image/i)).toBeInTheDocument();
    });
});
