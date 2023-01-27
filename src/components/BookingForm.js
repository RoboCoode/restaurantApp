import AvailableTimes from "./AvailableTimes";

function BookingForm(props) {
  

  

  return (
    <div className="bookingform">
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input
          value={props.date}
          onChange={(e) => props.setDate(e.target.value)}
          type="date"
          id="res-date"
        />
        <label htmlFor="res-firstname">First name</label>
        <input
          value={props.firstName}
          onChange={(e) => props.setFirstName(e.target.value)}
          type="text"
          id="res-firstname"
        />
        <label htmlFor="res-lastName">Last name</label>
        <input
          value={props.lastName}
          onChange={(e) => props.setLastName(e.target.value)}
          type="text"
          id="res-lastName"
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          value={props.time}
          onChange={(e) => props.setTime(e.target.value)}
          id="res-time "
        >
          <option value={""}></option>
          <AvailableTimes avaTimes={props.avaTimes} />
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          value={props.guest}
          onChange={(e) => props.setGuest(e.target.value)}
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          value={props.occasion}
          onChange={(e) => props.setOccasion(e.target.value)}
          id="occasion"
        >
          <option value={""}></option>
          <option value={"Birthday"}>Birthday</option>
          <option value={"Anniversary"}>Anniversary</option>
        </select>
        <input
          type="submit"
          value="Make Your reservation"
          disabled={!props.getIsFormValid()}
        />
      </form>
    </div>
  );
}
export default BookingForm;
