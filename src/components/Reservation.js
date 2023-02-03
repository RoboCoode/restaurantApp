import BookingForm from "./BookingForm";
import BookingSlot from "./BookingSlot";
import { useState, useReducer, useEffect } from "react";
import { fetchAPI } from "../fetchAPI.js";

function Reservation() {
  function initializeTimes() {
    return fetchData();
  }

  function updateTimes(state, action) {
    switch (action.type) {
      case "newdate": {
        return fetchData(action.date);
      }
      default: {
        return;
      }
    }
  }

  let fetchData = (r) => fetchAPI(new Date(r));

  useEffect(() => {
    fetchData();
  }, []);

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    {},
    initializeTimes
  );

  const [bookedSlots, setbookedSlots] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    date: "",
    firstName: "",
    lastName: "",
    time: "",
    guest: "1",
    occasion: "",
  });

  const getIsFormValid = () => {

    if (
      Object.keys(formErrors).length === 0 &&
      formData.firstName &&
      formData.lastName &&
      formData.occasion &&
      formData.time &&
      formData.date &&
      formData.guest
    ) {
      return true ;
    } else {
      return  false;
    }
  };

  const clearForm = () => {
    setFormData({
      date: "",
      firstName: "",
      lastName: "",
      time: "",
      guest: "",
      occasion: "",
    });
  };

  const bookingconditions = () => {
    for (let i = 0; i < bookedSlots.length; i++) {
      if (
        bookedSlots[i].bookedDate === formData.date &&
        bookedSlots[i].bookedTime === formData.time
      ) {
        alert(
          "This reservation are already booked. Please choose another time. "
        );
        return false;
      }
    }

    if (bookedSlots.length > 1) {
      alert("Limit is 2 reservation");
      clearForm();
      return false;
    }
    return true;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    let error = { ...formErrors };
    if (!value) {
      error[name] = "This field is required";
    } else if (name == "firstName") {
      if (value.length <= 2 || value.length >= 25) {
        error[name] = " Name should be more than 2 and less than 50 char";
      } else {
        delete error[name];
      }
    }else if (name == "guest") {
       if (value == 0) { error[name] = "guests should be min 1"} 
       else { delete error[name]; }
  }
    
    
    else { delete error[name];}

    setFormErrors(error);
  };

  console.log(formErrors);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookingconditions()) {
      alert("Reservation created!");

      setbookedSlots((prevState) => [
        ...prevState,
        { ["bookedDate"]: formData.date, ["bookedTime"]: formData.time },
      ]);
    
      clearForm();
      
    } else {
      return;
    }
   
  };

  return (
    <div className="reservation">
      <BookingForm
        handleSubmit={handleSubmit}
        getIsFormValid={getIsFormValid}
        avaTimes={availableTimes}
        formData={formData}
        setFormData={setFormData}
        updateFetchTime={dispatch}
        handleBlur={handleBlur}
        formErrors={formErrors}
      />
      <BookingSlot bookedSlots={bookedSlots} />
    </div>
  );
}

export default Reservation;
