import { render } from "test-utils";
import { FullPageLoader, PageLoader } from "../page-loader";

describe("PageLoader", () => {
  it("renders PageLoader without crashing", () => {
    expect(() => render(<PageLoader />)).not.toThrow();
  });

  it("renders FullPageLoader without crashing", () => {
    expect(() => render(<FullPageLoader />)).not.toThrow();
  });
});
