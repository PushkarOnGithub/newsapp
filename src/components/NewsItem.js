import React from "react";

const NewsItem = (props) => {
  let altImageUrl =
    "https://c.ndtvimg.com/2022-09/jvrqeppc_underground-cave-generic-pixabay_625x300_14_September_22.jpg";

  let { title, description, imageUrl, newsUrl, author, date, name } = props;
  return (
    <div className="my-3 mx-2">
      <div className="card">
        <img
          className="card-img-top"
          src={imageUrl ? imageUrl : altImageUrl}
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">
            {title}...
            <span
              className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
              style={{ zIndex: 1, left: "80%" }}>
              {name.replace(".com", "").replace("www.", "")}
              <span className="visually-hidden">unread messages</span>
            </span>
          </h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : name} on {new Date(date).toDateString()}
            </small>
          </p>
          <a
            href={newsUrl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
