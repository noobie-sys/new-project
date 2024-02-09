import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const Layout = ({children } :{children : React.ReactNode}) => {
  return (
    <div className=''>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}

export default Layout