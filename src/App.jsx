import { useEffect, useState } from 'react'
import NavLogo from './components/Navbar/NavLogo';
import NavCat from './components/Navbar/NavCat';
import SliderHeader from './components/SliderHeader/SliderHeader';
import ServisecItems from './components/ServisecItems/ServisecItems';

function App() {
  
// const [posts, setPosts] = useState([]);
// const [loading, setLoading] = useState(false);
// const [error, setError] = useState(false);

// const fetchPosts = async () => {
//   let data = await fetch("https://api.digikala.com/v2");
//   let res = await data.json();
//   console.log(res);
   
// }

// useEffect(() => {
//     fetchPosts();
// })

  return (
    <>
     <NavLogo />
     <NavCat />
     <SliderHeader />
     <ServisecItems />
    </>
  )
}

export default App
