import Testimonial from "./Testimonial";

function Testimonials() {
  let comments = [
    { image: "./person1.avif", text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...", name: "Mary Jane", rating: "" },
    { image: "./person3.avif", text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...", name: "John Doe", rating: "" },
    { image: "./person4.avif", text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...", name: "Mary Jane", rating: "" },
  ];

  return (
    <div className="testi-main">
      <Testimonial comments={comments} />
    </div>
  );
}

export default Testimonials;
