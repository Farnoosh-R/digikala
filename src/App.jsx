import { useEffect, useState } from 'react'
import NavLogo from './components/Navbar/NavLogo';
import NavCat from './components/Navbar/NavCat';

function App() {
  
// const [posts, setPosts] = useState([]);
// const [loading, setLoading] = useState(false);
// const [error, setError] = useState(false);

// const fetchPosts = async () => {
//   let data = await fetch("https://jsonplaceholder.typicode.com/posts");
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
    </>
  )
}

export default App
