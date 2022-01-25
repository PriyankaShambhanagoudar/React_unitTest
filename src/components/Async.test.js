
import { render, screen } from "@testing-library/react";
import Async from './Async';


describe('Async component', () => {
    test('renders posts if the request succeeds', async () => {
        render(<Async />)

        const listItemElement = await screen.findAllByRole('listitem');// ('listitem'{expect:true},{time in sec})

        expect(listItemElement).not.toHaveLength(0);
    })
})