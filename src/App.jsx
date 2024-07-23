import React, {useEffect,useState} from 'react'
import axios from 'axios';
import Navbar from './component/Layout/Navbar'
import User from './component/User/User';
import Search from './component/User/Search';
import "./App.css";
import Alert from './component/User/Alert';

const App = () => {
  const [user,setUser] = useState([]);
  const [error,setError] = useState([]);
  // const fetchData = async () => {
  //   const url = await axios.get("https://api.github.com/users");
  //   setUser(url.data);
  // }
  
  const onSearchTextHandler = async (text) => {
    setError(text);
    if(!text == ""){
      const url = (`https://api.github.com/search/users?q=${text}&client_id=${import.meta.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${import.meta.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      const res = await axios.get(url);
      setUser(res.data.items);
      console.log("hello",res.data.items)
    }

  }
  useEffect(() => {
    onSearchTextHandler();
  },[])

  const clearUserHandler = () => {
    setUser([]);
  }

  return (
    <>
      <Navbar></Navbar>
     {!error && <Alert></Alert>}
      {/* <Alert></Alert> */}
      <Search onSearchText={onSearchTextHandler} onClearUsers={clearUserHandler} showUsers={user.length > 0 ? true:false}></Search>
      <User user={user}></User>
    </>
  )
}

export default App;
