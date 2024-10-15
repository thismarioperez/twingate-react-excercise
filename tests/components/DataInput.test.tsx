import userEvent from "@testing-library/user-event";
import DataInput from "@/components/DataInput";
import { ContentProvider } from "@/providers/ContentProvider";
import { render, screen } from "@testing-library/react";

describe("DataInput", () => {
    it("should render data input", () => {
        render(
            <ContentProvider>
                <DataInput />
            </ContentProvider>,
        );

        expect(screen.getByRole("textbox")).toBeInTheDocument();
    });

    it("should render error if data is invalid", async () => {
        const user = userEvent.setup();
        render(
            <ContentProvider>
                <DataInput />
            </ContentProvider>,
        );

        const input = screen.getByRole("textbox");
        await user.clear(input);
        await user.type(input, "invalid data");
        const button = screen.getByRole("button");
        await user.click(button);

        const error = await screen.findByText(/invalid json/i);
        expect(error).toBeInTheDocument();
    });
});
