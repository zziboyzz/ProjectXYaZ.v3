import TopNavigation from "../Components/TopNavigation";
import LeftNavigation from "../Components/LeftNavigation";
import Comments from "../Components/Comments";
import TopSearching from "../Components/TopSearching";
import TemporaryDrawer from "../Components/TemporaryDrawer";
import MobileTabs from "../Components/MobileTabs";
import Footer from "../Components/Footer";
import Head from "next/head";
import { useState } from "react";
import { Hidden } from '@material-ui/core';
import '../styles/globals.css';
function MyApp({ Component, pageProps }) {
  const [color, setColor] = useState({mainColor: "#051e34", secondColor: "#724924"});
  const [state, setState] = useState({
    left: false,})


  const [open, setOpen] = useState(false);


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
    } 
    setState({ ...state, [anchor]: open });
    };
    


  
  return (
    <div style={{top: 0, left: 0, position: "absolute", width: "100%", height: "100%",}}>

        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Zen+Dots&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet"></link>
          <title>AZteam</title>
          <link rel="icon" href="https://cdn1.iconfinder.com/data/icons/36-science-badge-pixel-perfect-outline-modern-and-/64/machanics-science-education-badge-logo-256.png" />
        </Head>
      <TemporaryDrawer state={state} setState={setState}  toggleDrawer={toggleDrawer}/>
      <TopNavigation color={color} toggleDrawer={toggleDrawer} state={state} setState={setState}/>
      <MobileTabs color={color}/>
      <LeftNavigation color={color}/>
      <Hidden smDown>
        <Comments color={color} open={open} setOpen={setOpen}/>
        {/* <TopSearching color={color}/> */}
      </Hidden>
      <Component {...pageProps} color={color} />
      <Footer color={color}/>
    </div>
    
  )
}

export default MyApp
