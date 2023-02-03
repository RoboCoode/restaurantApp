import AvailableTimes from "./AvailableTimes";
import "./BookingForm.css";

function BookingForm(props) {
  function handleNewDateChange(e) {
    props.setFormData({ ...props.formData, date: e.target.value });

    props.updateFetchTime({ type: "newdate", date: e.target.value });
  }

  return (
    <div className="bookingform">
      <form onSubmit={props.handleSubmit}>
        <div className="labelbox">
          <label htmlFor="res-date">Choose date</label>
          <input
            name="date"
            value={props.formData.date}
            onChange={handleNewDateChange}
            onBlur={props.handleBlur}
            className={props.formErrors.date ? "input-error" : ""}
            type="date"
            id="res-date"
            required
          />
          <p className="input-error-message">{props.formErrors.date}</p>
        </div>

        <div className="labelbox">
          <label htmlFor="res-firstname">First name</label>
          <input
            name="firstName"
            value={props.formData.firstName}
            onChange={(e) =>
              props.setFormData({
                ...props.formData,
                firstName: e.target.value,
              })
            }
            onBlur={props.handleBlur}
            type="text"
            id="res-firstname"
            placeholder="First Name"
            required
            minLength={2}
            maxLength={20}
            className={props.formErrors.firstName ? "input-error" : ""}
          />
          <p className="input-error-message">{props.formErrors.firstName}</p>
        </div>
        <div className="labelbox">
          <label htmlFor="res-lastName">Last name</label>
          <input
            name="lastName"
            value={props.formData.lastName}
            onChange={(e) =>
              props.setFormData({ ...props.formData, lastName: e.target.value })
            }
            onBlur={props.handleBlur}
            className={props.formErrors.lastName ? "input-error" : ""}
            type="text"
            id="res-lastName"
            placeholder="Last Name"
            minLength={2}
            maxLength={20}
            required
          />
          <p className="input-error-message">{props.formErrors.lastName}</p>
        </div>

        <div className="labelbox">
          <label htmlFor="res-time">Choose time</label>
          <select
            name="time"
            value={props.formData.time}
            onChange={(e) =>
              props.setFormData({ ...props.formData, time: e.target.value })
            }
            onBlur={props.handleBlur}
            className={props.formErrors.time ? "input-error" : ""}
            id="res-time "
            required
          >
            <option value={""}></option>
            <AvailableTimes avaTimes={props.avaTimes} />
          </select>
          <p className="input-error-message">{props.formErrors.time}</p>
        </div>
        <div className="labelbox">
          <label htmlFor="guests">Number of guests</label>
          <input
            name="guest"
            value={props.formData.guest}
            onChange={(e) =>
              props.setFormData({ ...props.formData, guest: e.target.value })
            }
            onBlur={props.handleBlur}
            className={props.formErrors.guest ? "input-error" : ""}
            type="number"
            placeholder=""
            min="1"
            max="10"
            id="guests"
            required
          />
          <p className="input-error-message">{props.formErrors.guest}</p>
        </div>

        <div className="labelbox">
          <label htmlFor="occasion">Occasion</label>
          <select
            name="occasion"
            value={props.formData.occasion}
            onChange={(e) =>
              props.setFormData({ ...props.formData, occasion: e.target.value })
            }
            className={props.formErrors.occasion ? "input-error" : ""}
            onBlur={props.handleBlur}
            id="occasion"
            required
          >
            <option value={""}></option>
            <option value={"Birthday"}>Birthday</option>
            <option value={"Anniversary"}>Anniversary</option>
          </select>
          <p className="input-error-message">{props.formErrors.occasion}</p>
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
