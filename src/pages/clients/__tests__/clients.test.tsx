import { screen, renderWithBaseProviders, waitFor } from "test-utils";
import { Clients } from "../clients";
import { server } from "api-mocks/msw-server";
import { http, HttpResponse } from "msw";
import { api } from "config";

describe("Clients", () => {
  it("render clients", async () => {
    server.use(
      http.get(`${api.accessControlApi.host}/clients`, () => {
        return HttpResponse.json({
          totalCount: 2,
          limit: 10,
          offset: 0,
          content: [
            {
              id: "1",
              name: "First",
            },
            {
              id: "2",
              name: "Second",
            },
          ],
        });
      })
    );

    renderWithBaseProviders(<Clients />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getAllByRole("group")[0]).toHaveTextContent(
        "Name: First - ID: 1"
      );
    });

    await waitFor(() => {
      expect(screen.getAllByRole("group")[1]).toHaveTextContent(
        "Name: Second - ID: 2"
      );
    });

    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
  });
});
