function Card({ dish }) {
  return (
    <>
      {" "}
      <div className="card">
        <img className="cardimage" src={dish.image} alt="" />

        <div className="cardbody">
          <div className="cardfirstrow">
            <div className="cardtitle">
              <span>{dish.name}</span>
            </div>
            <div className="cardprice">
              <span> {dish.price} </span>
            </div>
          </div>

          <div className="carddescrip">
            <p> {dish.description} </p>
          </div>

          <div className="cardend">
            <button className="cardbutton"> Order & Delivery </button>
          </div>
        </div>
      </div>{" "}
    </>
  );
}

export default Card;
