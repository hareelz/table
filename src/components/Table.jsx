import React, { useEffect } from 'react'
import './Table.css'
import { useNavigate } from 'react-router-dom'

const Table = (props) => {
    const {lyde, getLyde, deleteLyde} = props
    const navigate = useNavigate()

    useEffect(() => {
        getLyde()
    }, [])
  return (
    <div>
        <table>
        <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Number</th>
          <th>City</th>
          <th>#</th>
        </tr>
      </thead>
      {lyde.map((item, i) =>
      <tbody key={item.id}>
        <tr>
          <td>{i + 1}</td>
          <td>{item.FName}</td>
          <td>{item.LName}</td>
          <td>{item.email}</td>
          <td>{item.numb}</td>
          <td>{item.city}</td>
          <td><button onClick={() => deleteLyde(item.id)}>✖️</button><button onClick={() => navigate(`/edit/${item.id}`)}>🔩</button></td>
        </tr>
      </tbody>)}
        </table>
        
    </div>
  )
}

export default Table