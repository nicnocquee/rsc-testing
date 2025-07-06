import { describe, it, expect } from "vitest";
import { renderServerComponent } from "@/utils/test-render-server-components";
import { withTimeContext } from "./time-context";
// Import the name export instead of the default export so that the test can simulate the time context
import { Greeting } from "./greeting";

describe("<Greeting />", () => {
  it("should render good morning", async () => {
    const GreetingToTest = withTimeContext(Greeting, {
      // Simulate the time being 10am
      currentTime: new Date(2025, 0, 1, 10, 0, 0),
    });

    // Render the server component
    const { getByText } = await renderServerComponent(<GreetingToTest />);

    // Assert that the text "Good morning" is rendered
    expect(getByText("Good morning")).toBeDefined();
  });

  it("should render good afternoon", async () => {
    const GreetingToTest = withTimeContext(Greeting, {
      // Simulate the time being 3pm
      currentTime: new Date(2025, 0, 1, 15, 0, 0),
    });

    // Render the server component
    const { getByText } = await renderServerComponent(<GreetingToTest />);

    // Assert that the text "Good afternoon" is rendered
    expect(getByText("Good afternoon")).toBeDefined();
  });
});
