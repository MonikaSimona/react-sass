import React from 'react'

export default function Home() {
    return (
        <div className='home'>
            <div className="header">
                <h1>Welcome</h1>    
                <img src={require('../assets/success.svg').default} alt=""/>
            </div>
        </div>
    )
}
