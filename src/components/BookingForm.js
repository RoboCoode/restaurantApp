import { isValidDateValue } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import AvailableTimes from "./AvailableTimes";

function BookingForm() {
  const [date, setDate] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [time, setTime] = useState("");
  const [guest, setGuest] = useState("1");
  const [occasion, setOccasion] = useState("");

  const getIsFormValid = () => {
    return date && firstName && lastName && time && guest && occasion;
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setDate("");
    setTime("");
    setGuest("1");
    setOccasion("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Reservation created!");
    console.log(date, time, firstName, lastName, occasion, guest);
    clearForm();
  };

  return (
    <div className="bookingform">
      <form onSubmit={handleSubmit}>
  
        <label htmlFor="res-date">Choose date</label>
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="date"
          id="res-date"
        />
        <label htmlFor="res-firstname">First name</label>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          id="res-firstname"
        />
        <label htmlFor="res-lastName">Last name</label>
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          id="res-lastName"
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          value={time}
          onChange={(e) => setTime(e.target.value)}
          id="res-time "
        >
          <option value={""}></option>
          <AvailableTimes />
       </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          value={guest}
          onChange={(e) => setGuest(e.target.value)}
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          id="occasion"
        >
          <option value={""}></option>
          <option value={"Birthday"}>Birthday</option>
          <option value={"Anniversary"}>Anniversary</option>
        </select>
        <input
          type="submit"
          value="Make Your reservation"
          disabled={!getIsFormValid()}
        />
   
      </form>
    </div>
  );
}
export default BookingForm;
