import React,{useEffect,useState} from 'react'
import {useLocation} from 'react-router-dom'

export default function ServiceOpenItem(props) {
    let location = useLocation();
    const [show, setShow] = useState(false)
    useEffect(() => {
        
        setShow(true)
        console.log('render')
    },[location.userProps.title])
    
    
    const back = () => {
        props.history.push('/services');
    }
    return (
        <div className={`service ${show && 'service-show'}`}>
            <img src={require('../assets/left-arrow.svg').default} className='back-arrow' onClick={back}/>
            <div className="title">
                <h1>{location.userProps.title}</h1>
            </div>
            <img src={require(`../assets/${location.userProps.img}.svg`).default} className='service-img' alt=""/>
            <p>Something about {location.userProps.title} <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, minima.</p>
        </div>
    )
}
