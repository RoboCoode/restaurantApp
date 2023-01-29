import AvailableTimes from "./AvailableTimes";
import "./BookingForm.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
function BookingForm(props) {
  function handleNewDateChange(e) {
    props.setDate(e.target.value);

    props.updateFetchTime({ type: "newdate", date: e.target.value });
  }

  return (
    <div className="bookingform">
      <form onSubmit={props.handleSubmit}>
        <div className="labelbox">
          <label htmlFor="res-date">Choose date</label>
          <input
            name="date"
            value={props.date}
            onChange={handleNewDateChange}
            type="date"
            id="res-date"
            required
          />
        </div>

        <div className="labelbox">
          <label htmlFor="res-firstname">First name</label>
          <input
            name="firstName"
            value={props.firstName}
            onChange={(e) => props.setFirstName(e.target.value)}
            type="text"
            id="res-firstname"
            placeholder="First Name"
            required
            minLength={2}
            maxLength={50}
          />
        </div>
        <div className="labelbox">
          <label htmlFor="res-lastName">Last name</label>
          <input
            name="last name"
            value={props.lastName}
            onChange={(e) => props.setLastName(e.target.value)}
            type="text"
            id="res-lastName"
            placeholder="Last Name"
            minLength={2}
            maxLength={50}
          />
        </div>

        <div className="labelbox">
          <label htmlFor="res-time">Choose time</label>
          <select
            name="time"
            value={props.time}
            onChange={(e) => props.setTime(e.target.value)}
            id="res-time "
            required
          >
            <option value={""}></option>
            <AvailableTimes avaTimes={props.avaTimes} />
          </select>
        </div>
        <div className="labelbox">
          <label htmlFor="guests">Number of guests</label>
          <input
            name="guest"
            value={props.guest}
            onChange={(e) => props.setGuest(e.target.value)}
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            required
          />
        </div>

        <div className="labelbox">
          <label htmlFor="occasion">Occasion</label>
          <select
            name="occasion"
            value={props.occasion}
            onChange={(e) => props.setOccasion(e.target.value)}
            id="occasion"
            required
          >
            <option value={""}></option>
            <option value={"Birthday"}>Birthday</option>
            <option value={"Anniversary"}>Anniversary</option>
          </select>
        </div>
        <button
          aria-label="On Click"
          type="submit"
          value=" Make your reservation"
          disabled={!props.getIsFormValid()}
        >
          Make your reservation
        </button>
      </form>
    </div>
  );
}
export default BookingForm;
