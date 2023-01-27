import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';




test('Renders the BookingForm heading', () => {

    render( <BookingForm
        date=""
        firstName=""
        lastName=""
        time=""
        guest=""
        occasion=""
        avaTimes={["10:00", "12:00", "14:00"]}
        handleSubmit={jest.fn()}
        setDate={jest.fn()}
        setFirstName={jest.fn()}
        setLastName={jest.fn()}
        setTime={jest.fn()}
        setGuest={jest.fn()}
        setOccasion={jest.fn()}
        getIsFormValid={jest.fn()}
      />);
    const headingElement = screen.getByText("First name");
    expect(headingElement).toBeInTheDocument();
})