import React from 'react'
import SideBar from './Components/SideBar/SideBar'
import Information from './Components/Information/Information'
import Posts from './Components/Posts/Posts'
import Blogs from './Components/Blogs/Blogs'
import './PageGeneral.css'
import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
const Page = () => {
    const [Toggle, setToggle] = useState(true)
    const toggle = () => {
        setToggle(!Toggle)
    }
    return (
        <div id='OS-page' className='container-fluid'>
            <div className='row'>
                {Toggle && <div className="col-7 col-md-3 vh-100 position-fixed z-3 OS-large-screen">
                    <SideBar/>
                </div>}
                {Toggle && <div className="col-7 col-md-3">                   
                </div>}
                <div className="col">
                   <Routes>
                      <Route path='/' element={<Information toggle={toggle} />}/>
                      <Route path='/Posts' element={<Posts  toggle={toggle}/>} />
                      <Route path='/Blogs' element={<Blogs  toggle={toggle}/>}/>
                   </Routes>                   
                </div>
            </div>

        </div>
    )
}

export default Page