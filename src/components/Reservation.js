import BookingForm from "./BookingForm";
import BookingSlot from "./BookingSlot";
import { useState } from "react";

function Reservation() {
  const initState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  const [availableTimes, setAvaTimes] = useState(initState);
  const [date, setDate] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [time, setTime] = useState("");
  const [guest, setGuest] = useState("1");
  const [occasion, setOccasion] = useState("");
  const [bookedSlots, setbookedSlots] = useState([]);

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

   for (let i=0; i< bookedSlots.length; i++){

  if ( bookedSlots[i].bookedDate === date && bookedSlots[i].bookedTime === time){

    alert("This reservation are already booked. Please choose another time. ");
    return;
  }}
   
   
 

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
      />
      <BookingSlot bookedSlots={bookedSlots} />
    </div>
  );
}

export default Reservation;
