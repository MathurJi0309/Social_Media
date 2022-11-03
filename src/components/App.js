import { useEffect, useState } from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {getPosts} from '../api'
import {Home,Login} from '../pages';
import {Loader,Navbar} from './';

const About=()=>{
  return <h1>About</h1>
}

const UserInfo=()=>{
  return <h1>User Info</h1>
}

const Page404=()=>{
  return <h1>404 page is not found</h1>
}



function App() {
  const [posts,setPosts] =useState([]);
  const [loading,setLoading] =useState(true);

  useEffect(()=>{
    const fetchPosts =async ()=>{
      const response=await getPosts();
      console.log('response',response);
      if(response.success){
        setPosts(response.data.posts)
      }
      setLoading(false);
    }
    fetchPosts();
  },[]);

  if(loading){
    return <Loader/>;
  }
  return (
    <Router>
    <div className="App">
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home posts={posts}/>}/>
      </Routes>

      <Routes>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Routes>
        <Route path="/user/jjak" element={<UserInfo/>}/>
      </Routes>
      <Routes>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Routes>
        <Route element={<Page404/>}/>
      </Routes>
      
    
      
    </div>
    </Router>
  );
}

export default App;
