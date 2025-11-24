import { useState } from "react";
import "./bookingForm.css";

const BookingForm = ({ availableTimes, onDateChange, onSubmit }) => {

   const date = new Date();
   const minDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
   const yesterday = new Date();
   yesterday.setDate(date.getDate() - 1);

   const defaultTime = availableTimes[0];

   const occasionOptions = ["Birthday", "Anniversary"];

   const [reservation, setReservation] = useState({
      date: minDate,
      time: defaultTime,
      guests: 1,
      occasion: occasionOptions[0]
   })

   const areAllFieldsValid = () =>
      reservation.date !== "" &&
      reservation.time !== "" &&
      reservation.guests >= 1 &&
      reservation.guests <= 10 &&
      reservation.occasion !== "";



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
            required={true}
            min={minDate}
            value={reservation.date}
            onChange={(e) => {
               const date = e.target.value;
               onDateChange(date);
               setReservation({ ...reservation, date })
            }}
         />
         {!reservation.date || new Date(reservation.date).getTime() < yesterday.getTime() ?
            <p className="errorMessage">Please enter a valid date in the future</p> : null}

         <label htmlFor="res-time">Choose time</label>
         <select
            id="res-time"
            aria-required="true"
            aria-label="Choose time"
            required={true}
            value={reservation.time}
            onChange={(e) => {
               const time = e.target.value;
               setReservation({ ...reservation, time })
            }}
         >
            {availableTimes.map((time, i) => {
               return <option key={i} value={time}>{time}</option>
            })}
         </select>
         {!reservation.time ?
            <p className="errorMessage">Please enter a valid time</p> : null}
         <label htmlFor="guests">Number of guests</label>
         <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            value={reservation.guests}
            id="guests"
            aria-required="true"
            aria-label="Number of guests"
            required={true}
            onChange={(e) => {
               const guests = parseInt(e.target.value);
               setReservation({ ...reservation, guests })
            }}
         />
         {isNaN(reservation.guests) ?
            <p className="errorMessage">Please enter a valid date in the future</p> : null}
         <label htmlFor="occasion">Occasion</label>
         <select
            id="occasion"
            aria-label="Choose occasion"
            required={true}
            value={reservation.occasion}
            onChange={(e) => {
               const occasion = e.target.value;
               setReservation({ ...reservation, occasion })
            }}
         >
            {occasionOptions.map((option, i) => {
               return <option key={i} value={option}>{option}</option>
            })}
         </select>
         {!occasionOptions.includes(reservation.occasion) ?
            <p className="errorMessage">Please enter a valid time</p> : null}
         <input
            disabled={!areAllFieldsValid()}
            className="submitBtn"
            type="submit"
            value="Make Your reservation"
            aria-label="Submit reservation"
         />
      </form>
   )

};

export default BookingForm;