import React from 'react';
import Header from '../components/Header/Header';
//pages
// import '~/LandingPage.scss';
//hooks
// import {useNavigate} from 'react-router-dom';



function LandingPage() {

  //page navigation
    // const navigate = useNavigate();

return(
    <>
{/* header here */}
    <Header/>

  {/* main content here */}
  <div className='main-container'>
    {/* Splash image */}
    {/* <div><img src='' /></div> */}
    
    
     <div>About </div><div>Explore</div><div>Start a quote</div></div>
       
    </>
)


}

export default LandingPage;