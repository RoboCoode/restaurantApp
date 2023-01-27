function BookingSlot(props) {
  
  const listBookedSlots = (e) => {
    let newArr = e.map((e) => {
      if (!(JSON.stringify(e) === "{}")) {
        return (
          <div key={e.bookedDate + e.bookedTime}>
            <div >
              Date: {e.bookedDate} Time: {e.bookedTime}
            </div>
          </div>
        );
      }
    });
    console.log("newArr:", newArr);
    return newArr;
  };

  return (
    <>
      {" "}
      <div> Booked: </div>
      {props.bookedSlots.length > 0
        ? listBookedSlots(props.bookedSlots)
        : "No booked date"}
    </>
  );
}

export default BookingSlot;
