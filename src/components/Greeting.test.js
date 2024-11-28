import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

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
});
