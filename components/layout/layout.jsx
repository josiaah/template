import React from 'react';
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'

const  Layout = (props) => {
    return (
        <div>
            <Navbar/>
            <main>{props.children}</main>
            <Footer/>
        </div>
    )
}

export default Layout;