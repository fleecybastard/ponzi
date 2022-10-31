import React from 'react'
import Terms from '../components/Terms'
import ScrollToTop from '../components/ScrollToTop'
import Footer from '../components/Footer'
import PrivacyBack from '../components/PrivacyBack'

const Terms_and_Conditions = () => {
    return (
        <>
            <ScrollToTop/>
            <Terms/>
            <PrivacyBack/>  
            <Footer/>
        </>
    )
}

export default Terms_and_Conditions