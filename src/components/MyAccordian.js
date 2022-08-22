import React, { useState } from "react";

const MyAccordian = (props) => {
  const [show, setShow] = useState(false);
  const showAns = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="itemContainer">
        <div className="accordionItem">
          <div className="button">
            <button className="show" onClick={showAns}>
              {show ? "➖" : "➕"}
            </button>
          </div>
          <div className="content">
            <h2 className="question">{props.data.question}</h2>
          </div>
        </div>
        {show && <p className="answer">{props.data.answer}</p>}
      </div>
    </>
  );
};

export default MyAccordian;
