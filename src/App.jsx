import { useEffect, useState } from 'react'
import NavLogo from './components/Navbar/NavLogo';
import NavCat from './components/Navbar/NavCat';
import SliderHeader from './components/SliderHeader/SliderHeader';
import ServisecItems from './components/ServisecItems/ServisecItems';
import CarouselOff from './components/CarouselOff/CarouselOff';
import SliderMain from './components/SliderMain/SliderMain';
import AdsBoxSmall from './components/AdsBoxSmall/AdsBoxSmall';
import Footer from './components/Footer/Footer';


function App() {
  
const [apiData, setApidata] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);



const fetchPosts = async () => {
  let res = await fetch("./db.json");
  let data = await res.json();
    setApidata(data.data.widgets);
    
  // console.log(apiData);
   
}



useEffect(() => {
    fetchPosts();
    
})

  return (
    <>
     <NavLogo />
     <NavCat />
     <SliderHeader />
     <SliderMain />
     <ServisecItems data={apiData}/>
     <CarouselOff />
     <AdsBoxSmall />
     <Footer />
    </>
  )
}

export default App
