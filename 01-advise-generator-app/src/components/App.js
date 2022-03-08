import React, { useState } from "react";

import AdviceNumber from "./AdviceNumber";
import Advice from "./Advice";
import Divider from "./Divider";
import DiceButton from "./DiceButton";

import "../styles/app.css";

const App = () => {
  const [quote, setQuote] = useState({
    advice:
      "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
    id: 117,
  });

  return (
    <div className="container">
      <AdviceNumber quoteId={quote.id} />
      <Advice quote={quote.advice} />
      <Divider />
      <DiceButton setQuote={setQuote} />
    </div>
  );
};

export default App;
