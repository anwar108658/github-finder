import React,{useState} from 'react'
import './Search.css'

const Search = (props) => {
  const [searchData,setSearchData] = useState('');
  const searchHandler = (e) => {
    setSearchData(e.target.value)
  }
  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.onSearchText(searchData);
    setSearchData('');
  }
  return (
    <>
    <form className='form' onSubmit={onSubmitHandler}>
        <input className='text' type="text" name="text" placeholder='Search User' value={searchData} onChange={searchHandler}/>
        <input className='btn' type="submit" value="Search" />
        {props.showUsers && (
        <input onClick={props.onClearUsers} type="button" value="Clear" className='btn' style={{backgroundColor:"pink", color:"#000"}} />
        )}
    </form>
    </>
  )
}

export default Search