import React from 'react'

const Research = (props) => {
  return (
    <tr>
        <td>{props.research.date}</td>
        <td>{props.research.id}</td>
        <td>{props.research.time}</td>
    </tr>
  )
}

export default Research