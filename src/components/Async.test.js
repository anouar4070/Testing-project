import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if request succeeds", async() => {
    render(<Async />);
//getAllByRole() returns Promise
    const listItemElements = await screen.findAllByRole("listitem");
    //we don't use getAllByRole() because it returns the first render where [] is empty
    //const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
