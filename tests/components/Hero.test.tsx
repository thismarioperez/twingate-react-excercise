import { render, screen } from "@testing-library/react";

import Hero from "@/components/LandingPage/Hero";
import { HeroSection } from "@/entities";

describe("Hero", () => {
    const data: HeroSection = {
        type: "hero",
        imageURI: "https://placecats.com/300/200",
    };
    it("should render hero image", () => {
        render(<Hero imageURI={data.imageURI} />);

        expect(screen.getByRole("img")).toBeInTheDocument();
        expect(screen.getByRole("img")).toHaveAttribute("src", data.imageURI);
    });

    it("should render message if no hero image is provided", () => {
        render(<Hero imageURI="" />);

        expect(screen.getByText(/no hero image/i)).toBeInTheDocument();
    });
});
