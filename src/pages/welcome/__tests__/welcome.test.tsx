import { screen, renderWithBaseProviders } from "test-utils";
import { Welcome } from "../welcome";

describe("Welcome", () => {
  it("renders sucessfully", () => {
    renderWithBaseProviders(<Welcome />);

    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
  });
});
