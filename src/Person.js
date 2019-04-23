import React from 'react'
import './person.css'

const Person = (props) => {
    return <div className="Person"><h1>HOLA { props.cambiando }soy Fredy B { Math.floor(Math.random() * 30) } </h1></div>
}

export default Person