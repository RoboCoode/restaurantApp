import { useState } from "react";

function AvailableTimes() {
  const initState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  const [avaTimes, setAvaTimes] = useState(initState);

  let listTimes = () => {
    let newArr = avaTimes.map(function (e) {
      return <option key={e} value={e}>{e}</option>;
    });
    return newArr;
  };
  
  
  
  return <>{listTimes()}</>;
}

export default AvailableTimes;
