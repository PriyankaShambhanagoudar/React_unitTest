import Greetings from "./Greetings";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"

describe('Greetings components', () => {
    //First test
    test("renders Hello World as a test", () => {
        //Arrange
        render(<Greetings />);

        //Act
        //....nothing

        //Assets

        const helloWordElement = screen.getByText("Hello World", { exact: false });
        expect(helloWordElement).toBeInTheDocument();
    });

    //second test

    test('render Its good to see you', () => {
        //Arrange
        render(<Greetings />);

        //Act
        //....nothing

        //Assets

        const paragrapElement = screen.getByText("Its good to see you", { exact: false });
        expect(paragrapElement).toBeInTheDocument();
    })

    //third test (function)
    test('render Its good to see you if the button is not clicked', () => {
        //Arrange
        render(<Greetings />);

        //Act
        //....nothing

        //Assets

        const outputElement = screen.getByText("Its good to see you", { exact: false });
        expect(outputElement).toBeInTheDocument();
    })

    //after button clicked
    test('render "Changed! " if the button was  clicked', () => {
        //Arrange
        render(<Greetings />);

        //Act
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)

        //Assets
        const outputElement = screen.getByText("Changed", { exact: false });
        expect(outputElement).toBeInTheDocument();
    })

    //fivth test
    test('doest not render "good to see you" if the buuton was clicked', () => {
        //Arrange
        render(<Greetings />);

        //Act
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)

        //Assets
        const outputElement = screen.queryByText("good to see you", { exact: false });
        expect(outputElement).toBeNull();
    })
})
