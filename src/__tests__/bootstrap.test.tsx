/* eslint-disable testing-library/prefer-screen-queries */
import { act, getByText, queryByText, waitFor } from "test-utils";
import { mount, unmount } from "bootstrap";
import { appLoader } from "kubra-ui-lib-mfe";

describe("bootstrap", () => {
  test("mount and unmount app successfully", async () => {
    const appId = "khq-app-with-react-compiler";
    let root: HTMLElement;

    act(() => {
      root = appLoader({ mount, appId });
    });

    await waitFor(() => {
      expect(getByText(root, /Welcome/i)).toBeInTheDocument();
    });

    act(() => unmount());

    await waitFor(() => {
      expect(queryByText(root, /Welcome/i)).not.toBeInTheDocument();
    });
  });
});
