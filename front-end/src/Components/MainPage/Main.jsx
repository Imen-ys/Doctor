import React from 'react'
import {Nav} from '../index'
import doctor from '../images/doctor.jpg'
const Main = () => {
    return (
        <>
            <Nav/>
            <>
                <div className='d-flex justify-content-center align-items-center' style={{height: '90vh'}}>
                    <h1>Welcome</h1>
                    <img src={doctor} className="w-200 h-50"/>
                </div>
            </>
        </>
    )
}

export default Main