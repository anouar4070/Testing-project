import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test("renders Hello World as a test", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //..nothing

    //Assert
    const helloElement = screen.getByText("Hello World!");
    //const helloElement = screen.getByText('Hello World', {exact: true});
    //   const helloElement = screen.getByText(/hello world/i);
    expect(helloElement).toBeInTheDocument();
  });

  test("renders good to see you if yhe button was NOT clicked", () => {
    render(<Greeting />);
    const outputElement = screen.getByText("good to see you", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders 'Changed!' if yhe button was clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render 'good to see you' if the button was clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});


/**
 * If the screen.getByText("Changed!") query does not find the text "Changed!", it will throw an error. This is because getByText is a query from the React Testing Library that asserts the element must exist in the DOM. If the element isn't found, the test will fail, and an error will be thrown.

* To handle scenarios where the text might not exist and you don't want the query to throw an error, you can use queryByText instead. Unlike getByText, queryByText returns null if the element is not found.
 */
