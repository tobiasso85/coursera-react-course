import { useReducer } from "react";
import BookingForm from "../comps/bookingForm";

function Reservations() {
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
    <div className="Reservations">
    <h1>Book a table</h1>
    <BookingForm availableTimes={availableTimes} onDateChange={onDateChange}></BookingForm>
    </div>
    
    </>
  )}

export default Reservations;