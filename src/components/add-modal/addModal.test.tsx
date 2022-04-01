import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import AddModal from '.'

describe('Add Modal', () => {
 it('should be able to open the modal', () => {
    render(<AddModal show />)

    expect(screen.getByText(/modal/i)).toBeInTheDocument();
 });

 it('should not be able to open the modal', async () => {
    render(<AddModal show={false} />)

    await waitFor(() => expect(screen.queryByText(/modal/i)).not.toBeInTheDocument());
 });
})