import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function Services() {
  
    return (
        <div className='services'>
            <div className="title">
                <h1>Our services</h1>
            </div>
            <div className="services-grid">
            <Link to={{
                    pathname:'/service',
                    userProps:{
                        title:'Partneship',
                        img:'deal'
                    }
                }}>
                    <div className='service-item'>
                  
                        <h4>Partneship</h4>
                        <img src={require('../assets/deal.svg').default} alt="" />
                        
                    </div>
                    </Link>
                    <Link to={{
                    pathname:'/service',
                    userProps:{
                        title:'Logistics',
                        img:'logistics'
                    }
                }}>
                    <div className='service-item'>
               
                        <h4>Logistics</h4>
                        <img src={require('../assets/logistics.svg').default} alt="" />
                        
                    </div>
                
                    </Link>
                    <Link to={{
                    pathname:'/service',
                    userProps:{
                        title:'Science',
                        img:'atom'
                    }
                }}>
                    <div className='service-item'>
                 
                        <h4>Science</h4>
                        <img src={require('../assets/atom.svg').default} alt="" />
                        
                    </div>
                
                    </Link>
                    <Link to={{
                    pathname:'/service',
                    userProps:{
                        title:'Assistance',
                        img:'support'
                    }
                }}>
                    <div className='service-item'>
               
                        <h4>Assistance</h4>
                        <img src={require('../assets/support.svg').default} alt="" />
                       
                    </div>
                    </Link>
            </div>
        </div>
    )
}
