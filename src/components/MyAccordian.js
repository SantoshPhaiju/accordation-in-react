import React, { useRef, useState } from "react";

const MyAccordian = (props) => {
  const [icon, setIcon] = useState("+");
  const answerRef = useRef();
  const showAns = () => {
    if (icon === "+") {
      setIcon("-");
      answerRef.current.classList.add("show");
      answerRef.current.classList.remove("hidden");
    } else {
      setIcon("+");
      answerRef.current.classList.add("hidden");
      answerRef.current.classList.remove("show");
    }
  };
  return (
    <>
    <div className="itemContainer">
      <div className="accordionItem">
        <div className="button">
          <button className="show" onClick={showAns}>
            {icon}
          </button>
        </div>
        <div className="content">
          <h2 className="question">{props.data.question}</h2>
        </div>
      </div>
      <p className="answer hidden" ref={answerRef}>{props.data.answer}</p>
    </div>
    </>
  );
};

export default MyAccordian;
