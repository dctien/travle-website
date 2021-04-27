import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            {/* Tag <figure> xác định các nội dung liên quan mạch lạc với nhau, như hình ảnh, sơ đồ, code,...
Nội dung của tag <figure> nên liên quan tới nội dung chính. */}
            <img
              src={props.src}
              // alt="Travel image"
              alt={props.text}
              className="cards__item__img"
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
