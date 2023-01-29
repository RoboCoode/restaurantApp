function Testimonial(props) {
  let comments = props.comments;
  let listComments =  comments.map((comment) => (
    <div key={comment.name + Math.random()} className="testi">
      <div className="testiimage">
        <img src={comment.image} alt="image" />
      </div>

      <div className="testibody">
        <p>"{comment.text}"</p>

        <div className="testiend">
          <div>
            <span>{comment.name}</span>
          </div>

          <div>
            <span>Rating {comment.rating}</span>
          </div>
        </div>
      </div>
    </div>
  ));

  return <ul>{listComments}</ul>;
}

export default Testimonial;
