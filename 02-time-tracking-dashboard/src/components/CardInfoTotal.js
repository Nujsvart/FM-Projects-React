import React from "react";
import CountUp from "react-countup";

const CardInfoTotal = ({ times, lastTime }) => {
  return (
    <div className="total">
      <CountUp
        start={0}
        end={times.current}
        delay={0}
        duration={1}
        suffix="hrs"
      >
        {({ countUpRef }) => <p ref={countUpRef} className="current" />}
      </CountUp>

      <p className="previous">
        {`Last ${lastTime}`} - {times.previous}hrs
      </p>
    </div>
  );
};

export default CardInfoTotal;
