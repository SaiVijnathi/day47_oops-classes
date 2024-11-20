import React from 'react'

function TenthStudent(props) {
  return (
    <div>
        <h2>{`${props.name} -> ${props.telMarks} ${props.hinMarks} ${props.engMarks} ${props.matMarks} ${props.sciMarks} ${props.socMarks}`}</h2>
    </div>
  )
}

export default TenthStudent;