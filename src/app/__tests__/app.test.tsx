import { screen, renderWithBaseProviders } from "test-utils";
import { App } from "app";

describe("App", (): void => {
  it("renders successfully", async () => {
    renderWithBaseProviders(<App basePath="/" />);

    expect(await screen.findByText(/Welcome/i)).toBeInTheDocument();
  });
});
