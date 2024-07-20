import React, {useEffect,useState} from 'react'
import axios from 'axios';
import Navbar from './component/Layout/Navbar'
import User from './component/User/User';
import Search from './component/User/Search';
import "./App.css";

const App = () => {
  const [user,setUser] = useState([]);
  // const fetchData = async () => {
  //   const url = await axios.get("https://api.github.com/users");
  //   setUser(url.data);
  // }
  
  const onSearchTextHandler = async (text) => {

    const url = (`https://api.github.com/search/users?q=${text}&client_id=${import.meta.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${import.meta.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    const res = await axios.get(url);
    setUser(res.data.items);
    console.log("hello",res.data.items)
  }
  useEffect(() => {
    onSearchTextHandler();
  },[])

  return (
    <>
      <Navbar></Navbar>
      <Search onSearchText={onSearchTextHandler}></Search>
      <User user={user}></User>
    </>
  )
}

export default App;
