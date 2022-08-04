
import useFetch from './useFetch';
import BlogList from './BlogList';
import JSONDATA from './data/db.json';
import React,{useState} from 'react'

const Search = () => {
    const [searchTerm,setSearchTerm] = useState('')

  return (
    <div className='appp'>
    <input type="text" placeholder="seach..." onChange={e=>setSearchTerm(e.target.value)} />
      {JSONDATA.filter((val)=>{
        if(searchTerm ===""){
          return val
        }
        else if(val.author.toLowerCase().includes(searchTerm.toLowerCase())){
          return val;
        }
      }).map((val,key)=>{
        return <div>{val.author} </div>
      })}
    </div>
  )
}

export default Search