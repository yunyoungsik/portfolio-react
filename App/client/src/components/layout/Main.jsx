import React from 'react'

const Main = (props) => {
    return (
        <div id='wrap'>
            <main id='main' role='main'>
                {props.children}
            </main>
        </div>
    )
}

export default Main