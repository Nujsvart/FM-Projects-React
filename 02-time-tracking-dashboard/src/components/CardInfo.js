import React from "react";

const CardInfo = ({ info }) => {
  console.log(info);
  return (
    <div className="card_info">
      <div className="card_title">
        <p>{info.title}</p>
        <button className="elipsis">
          <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
              fill="#BBC0FF"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <p className="current">{info.timeframes.weekly.current}hrs</p>
      <p className="previous">
        Last week - {info.timeframes.weekly.previous}hrs
      </p>
    </div>
  );
};

export default CardInfo;
