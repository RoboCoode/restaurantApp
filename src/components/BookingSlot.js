import "./BookingSlot.css"


function BookingSlot(props) {
  
  const listBookedSlots = (e) => {
    let newArr = e.map((e) => {
      if (!(JSON.stringify(e) === "{}")) {
        return (
          <li key={e.bookedDate + e.bookedTime}>
            <div >
              <span>  Date:</span>  {e.bookedDate} 
            </div>
            <div >
            <span> Time:</span>   {e.bookedTime}
            </div>
          </li>
        );
      }
    });
    console.log("newArr:", newArr);
    return newArr;
  };

  return (
  
      <ul className="bookingslot"> 
      <h4> Reservations: </h4>
      {props.bookedSlots.length > 0
        ? listBookedSlots(props.bookedSlots)
        : "no records"}
    </ul>
  );
}

export default BookingSlot;
