import { useState } from "react";
import "./bookingForm.css";

const BookingForm = ({ availableTimes, onDateChange, onSubmit}) => {

   const [reservation, setReservation] = useState({
      date: "",
      time: "",
      guests: 1,
      occasion: ""
   })



   return (
      <form className="BookingForm" aria-label="Booking form" onSubmit={(e) => {
         e.preventDefault();
         onSubmit(reservation);
      }}>
         <label htmlFor="res-date">Choose date</label>
         <input
            type="date"
            id="res-date"
            aria-required="true"
            aria-label="Choose date"
            onChange={(e) => {
               const date = e.target.value;
               setReservation({ ...reservation, date })
            }}
         />
         <label htmlFor="res-time">Choose time</label>
         <select
            id="res-time"
            aria-required="true"
            aria-label="Choose time"
            onChange={(e) => {
               const time = e.target.value;
               setReservation({ ...reservation, time })
            }}
         >
            {availableTimes.map((time, i) => {
               return <option key={i} value={time}>{time}</option>
            })}
         </select>
         <label htmlFor="guests">Number of guests</label>
         <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            aria-required="true"
            aria-label="Number of guests"
            onChange={(e) => {
               const guests = parseInt(e.target.value);
               setReservation({ ...reservation, guests })
            }}
         />
         <label htmlFor="occasion">Occasion</label>
         <select
            id="occasion"
            aria-label="Choose occasion"
            onChange={(e) => {
               const occasion = e.target.value;
               setReservation({ ...reservation, occasion })
            }}
         >
            <option>Birthday</option>
            <option>Anniversary</option>
         </select>
         <input
            type="submit"
            value="Make Your reservation"
            aria-label="Submit reservation"
         />
      </form>
   )

};

export default BookingForm;