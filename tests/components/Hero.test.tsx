import { render, screen } from "@testing-library/react";

import Hero from "@/components/LandingPage/Hero";
import { hero } from "@/data";

describe("Hero", () => {
    it("should render hero image", () => {
        render(<Hero imageURI={hero.imageURI} />);

        expect(screen.getByRole("img")).toBeInTheDocument();
        expect(screen.getByRole("img")).toHaveAttribute("src", hero.imageURI);
    });

    it("should render message if no hero image is provided", () => {
        render(<Hero imageURI="" />);

        expect(screen.getByText(/no hero image/i)).toBeInTheDocument();
    });
});
