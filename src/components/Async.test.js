import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
    test('renders posts if request succeeds', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{ id: 'p1', title: 'First Post' }]
        });


        render(<Async />)

        const listItemElements = await screen.findAllByRole('listitem'); //('listitem', { exact: true }, { timeout: 10s }) default timeout 1s
        expect(listItemElements).not.toHaveLength(0);
    });
});