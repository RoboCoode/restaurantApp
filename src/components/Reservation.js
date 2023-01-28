import BookingForm from "./BookingForm";
import BookingSlot from "./BookingSlot";
import { useState, useReducer } from "react";
import { fetchAPI } from "../fetchAPI.js";

function Reservation() {
  function  initializeTimes() { return   fetchAPI(new Date())};
  

  function updateTimes(state, action) {

    switch (action.type) { 

      case 'newdate': {  return fetchAPI(new Date(action.date));   }
    }

   
  }

  const [availableTimes, dispatch] = useReducer(updateTimes,{} ,initializeTimes);
  const [date, setDate] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [time, setTime] = useState("");
  const [guest, setGuest] = useState("1");
  const [occasion, setOccasion] = useState("");
  const [bookedSlots, setbookedSlots] = useState([]);

  console.log("AvaTimes 2 : ", availableTimes);

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

    for (let i = 0; i < bookedSlots.length; i++) {
      if (
        bookedSlots[i].bookedDate === date &&
        bookedSlots[i].bookedTime === time
      ) {
        alert(
          "This reservation are already booked. Please choose another time. "
        );
        return;
      }
    }

    alert("Reservation created!");

    setbookedSlots((prevState) => [
      ...prevState,
      { ["bookedDate"]: date, ["bookedTime"]: time },
    ]);
    clearForm();
  };

  return (
    <div className="reservation">
      <BookingForm
        handleSubmit={handleSubmit}
        getIsFormValid={getIsFormValid}
        avaTimes={availableTimes}
        date={date}
        setDate={setDate}
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        time={time}
        setTime={setTime}
        guest={guest}
        setGuest={setGuest}
        occasion={occasion}
        setOccasion={setOccasion}
        updateFetchTime={dispatch}
      />
      <BookingSlot bookedSlots={bookedSlots} />
    </div>
  );
}

export default Reservation;
