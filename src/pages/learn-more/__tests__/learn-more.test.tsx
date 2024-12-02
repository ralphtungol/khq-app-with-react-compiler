import { screen, renderWithBaseProviders } from "test-utils";
import userEvent from "@testing-library/user-event";
import { LearnMore } from "../learn-more";

describe("LearnMore", () => {
  it("shows learn more links", () => {
    renderWithBaseProviders(<LearnMore />);

    expect(
      screen.getByRole("button", { name: /kubra ux forge/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Front End Coding Standards/i })
    ).toBeInTheDocument();
  });

  it("shows details when selecting a learn more item", async () => {
    const user = userEvent.setup();

    renderWithBaseProviders(<LearnMore />);

    expect(await screen.queryByText(/details/i)).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /kubra ux forge/i }));

    expect(await screen.findByText(/details/i)).toBeInTheDocument();

    expect(
      screen.getByText(/A library of KUBRA's reusable React components/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /click here/i })
    ).toBeInTheDocument();
  });
});
