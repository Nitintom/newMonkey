import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, url} = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={imageUrl} alt="" />
           <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <a href={url} target="_blank"rel="noreferrer"  className="btn btn-sm btn-dark">
              Read More 
            </a>
          </div>
        </div>
      </div>

    );
  }
}


export default NewsItem;
