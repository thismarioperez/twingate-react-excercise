import { render, screen } from "@testing-library/react";

import Greeting from "@/components/Greeting";

describe("Greeting", () => {
    it("should render greeting", () => {
        render(<Greeting />);

        expect(screen.getByRole("heading")).toHaveTextContent(/hello world/i);
    });
});
