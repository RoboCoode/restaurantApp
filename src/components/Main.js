import Card from "./Card";

function Main() {
  let arrdishes = [
   /* {
      name: "Lasagna",
      description: " Italian cooked pasta with meat",
      price: "5 €",
      image: "https://media.istockphoto.com/id/1096466528/photo/slice-of-lasagna.jpg?s=612x612&w=0&k=20&c=REZOwYgrlST0_6CfQAqZqm_mdpQqNSA1wyKW3d0yGPA=",
    },*/
    {
      name: "Bruccheta",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
      price: "8 €",
      image: "https://img.aktuality.sk/foto/MHgxODo1MTg0eDI5MzEvZml0LWluLzg4MHg0MDAvaW1n/ZTJ4EASaTebUIQKrI5BCzg.jpg?st=zH8LLsPHmZDqFxsVJMZ7dLqIQfXdsb-A-yFI0ZCBfgY&ts=1559563114&e=0",
    },
  /*  {
      name: "Toffife Cake",
      description: " Ouououou ouououou ouououou ouououou ouououou ",
      price: "2 €",
      image: "https://static.wixstatic.com/media/882d5a_dc5b787142ed445cb5be1f25b835f6ca~mv2.png/v1/fit/w_677%2Ch_550%2Cal_c/file.png",
    },*/
    {
      name: "Honey soup",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  ",
      price: "11 €",
image: "./soup.png"    },
    {
      name: "Vegeratian meat",
      description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
      price: "7 €",
      image: "https://www.veganfoodandliving.com/wp-content/uploads/2018/09/GettyImages-801224958.jpg",
    },
    {
      name: "Cheese pastrami Cheese pastrami are most delicious ",
      description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  ",
      price: "25 €",
      image: "https://www.sargento.com/assets/Uploads/Recipe/Image/asffeewq.jpg",
    },
  ];

  return (
    <div className="main">
    <h1> Taste our specials</h1>

      <Card dishes={arrdishes} />
    </div>
  );
}

export default Main;
