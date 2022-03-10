import React, { useEffect, useState } from "react";
import CardInfoTotal from "./CardInfoTotal";
import ElipsisButton from "./ElipsisButton";

const CardInfo = ({ info, showPage }) => {
  const { daily, weekly, monthly } = info.timeframes;

  const [time, setTime] = useState({ x: "", y: "" });

  useEffect(() => {
    showPage === "daily" && setTime({ x: daily, y: "day" });
    showPage === "weekly" && setTime({ x: weekly, y: "week" });
    showPage === "monthly" && setTime({ x: monthly, y: "month" });
  }, [daily, weekly, monthly, showPage]);

  return (
    <div className="card_info">
      <div className="card_title">
        <p>{info.title}</p>
        <ElipsisButton />
      </div>
      <CardInfoTotal times={time.x} lastTime={time.y} />
    </div>
  );
};

export default CardInfo;
