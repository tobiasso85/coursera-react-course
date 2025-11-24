import { useReducer } from "react";
import BookingForm from "./bookingForm";

function Bookings() {
    const initializeTimes = () => ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];


    const updateTimes = (availableTimes, date) => {
        return availableTimes;
    };

    const [
        availableTimes,
        onDateChange
    ] = useReducer(updateTimes, [], initializeTimes);

    return (
        <>
            <h1>Book a table</h1>
            <BookingForm availableTimes={availableTimes} onDateChange={onDateChange}></BookingForm>
        </>
    )
}

export default Bookings;