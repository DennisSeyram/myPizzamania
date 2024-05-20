function Card(props) {
  return (
    <div className="col-md-3">
      <div className="card img-fluid">
        <img src={props.imgSrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description}</p>
          <a href="#" className="btn btn-primary">
            Click to Order
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
