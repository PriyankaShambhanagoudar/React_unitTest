import Greetings from "./Greetings";
import { render, screen } from "@testing-library/react";

test("renders Hello World as a test", () => {
    //Arrange
    render(<Greetings />);

    //Act
    //....nothing

    //Assets

    const helloWordElement = screen.getByText("Hello World", { exact: false });
    expect(helloWordElement).toBeInTheDocument();
});
