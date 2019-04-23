import React from 'react'

export function Home(props) {
    return (
        <div>
            <h1>{props.message}</h1>
            <h1>Desde casa</h1>
            <button onClick={ () => props.updateMessage('PLOP')}>Click Aqui </button>
            <input type="text" onChange={props.changed}/>
        </div>
    )
}

export default Home