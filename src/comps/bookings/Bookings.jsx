import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAPI } from "../../coursera/api";
import BookingForm from "./bookingForm";

function Bookings() {

    const navigate = useNavigate();

    const updateTimes = (availableTimes, date) => {
        const response = fetchAPI(new Date(date));
        return (response.length !== 0) ? response : availableTimes;
    };

    const initializeTimes = initialAvailableTimes =>
        [...initialAvailableTimes, ...fetchAPI(new Date())];

    const [
        availableTimes,
        onDateChange
    ] = useReducer(updateTimes, [], initializeTimes);

    return (
        <>
            <h1>Book a table</h1>
            <BookingForm availableTimes={availableTimes} onDateChange={onDateChange} onSubmit={(formData) => {
                // store in localstorage for confirmation page
                localStorage.setItem("bookingConfirmed", JSON.stringify({...formData }));
                navigate("/confirmed");
            }}></BookingForm>
        </>
    )
}

export default Bookings;