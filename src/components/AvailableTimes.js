
function AvailableTimes(props) {
  let listTimes = () => {
    let newArr = props.avaTimes.map(function (e) {
      return (
        <option key={e} value={e}>
          {e}
        </option>
      );
    });
    return newArr;
  };

  return <>{listTimes()}</>;
}

export default AvailableTimes;
