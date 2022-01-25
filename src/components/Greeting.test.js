import Greetings from "./Greetings";
import { render, screen } from "@testing-library/react";

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

})
