import React from 'react'
import { questions } from './api'
import MyAccordian from './MyAccordian';
import './accordian.css'

const Accordion = () => {
  return (
    <>
      <div className="accordianContainer">
        <h1>React Interview questions</h1>
        {questions.map((data, index) =>{
            return <MyAccordian data={data} key={index} />
        })}
        
      </div>
    </>
  )
}

export default Accordion
