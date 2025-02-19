import React from 'react'
import Line from './Line'
import Navbar from './navbar'
import First from './First'
import Second from './Second'
import Aboutus from './Aboutus'
import Contact from './Contact'
import Footer from './footer'
import Card from './Card'
import logo from './assets/java.jpg'
import logo1 from'./assets/cpp.webp'
import logo2 from'./assets/4.jpeg'
import Social from './social'
import Insta from './assets/insta.webp'
import Yt from './assets/youtube.webp'

function App() {
  return (
    <div className='w-full h-screen bg-black pt-2'>
      <Navbar/>
      <Line/>
      <First/>
      <Line/>
      <Aboutus content="Aboutus"/>
      <Second/>
      <Line/>
      <div className='bg-gray-900'>
          <Aboutus content="Services"/>

      </div>
      <div className='flex items-center justify-around h-full w-full  text-white bg-gray-900' id='services'>

      <Card content ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis numquam fugit est, neque consequuntur tenetur dignissimos itaque, libero fugiat nemo autem magni beatae voluptatum reiciendis aliquid velit provident laboriosam eos quos? Nesciunt, excepturi reprehenderit assumenda eius a perferendis autem commodi?" image={logo}/>
      <Card content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis numquam fugit est, neque consequuntur tenetur dignissimos itaque, libero fugiat nemo autem magni beatae voluptatum reiciendis aliquid velit provident laboriosam eos quos? Nesciunt, excepturi reprehenderit assumenda eius a perferendis autem commodi?" image={logo1}/>
      <Card content="Personal mentorship program" image={logo2}/>
      </div>
      <Line/>
      <Aboutus content="Contact us"/>
      <Contact/>
      <div className='flex justify-center w-full font-bold bg-black text-white p-2'>
         Follow our Social Media 

      </div>
         <div className='w-full h-20 bg-black text-white flex justify-center'>
          <a href="https://www.instagram.com/codersdotin?igsh=M2lwYTlrbWg0b29t">
           <Social Logos={Insta} content="Instagram"/>

          </a>
          <a href="https://youtube.com/@i_explain_all?si=6IntB9DP7yuU-411">
          
            <Social Logos={Yt} content="Youtube"/>
          </a>
         </div>
      <Line/>
      <Footer/>
    </div>
  )
}

export default App