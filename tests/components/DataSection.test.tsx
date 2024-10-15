import DataSection from "@/components/LandingPage/DataSection";
import { dataSection } from "@/data";
import { render, screen } from "@testing-library/react";

const message = "https://images.dog.ceo/breeds/boxer/n02108089_1757.jpg";

beforeEach(() => {
    global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: () =>
            Promise.resolve({
                message,
                status: "success",
            }),
    });
});

describe("DataSection", () => {
    it("should render data section", async () => {
        render(<DataSection {...dataSection} />);

        expect(await screen.findByText(/https/i)).toBeInTheDocument();
    });

    it("should truncated message if message is too long", async () => {
        const message = "a".repeat(256);

        global.fetch = vi.fn().mockResolvedValue({
            ok: true,
            json: () =>
                Promise.resolve({
                    message,
                    status: "success",
                }),
        });

        render(<DataSection {...dataSection} />);
        const text = (await screen.findByRole("code")).textContent;

        expect(text).toHaveLength(258);
    });

    it("should render button", async () => {
        render(<DataSection {...dataSection} />);

        expect(await screen.findByRole("button")).toBeInTheDocument();
    });
});
