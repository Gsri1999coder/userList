import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import ViewDetails from './components/ViewDetails';
import ModalPopup from './components/ModalPopup';
import ChangeUser from './components/ChangeUser';
import SearchWindow from './components/SearchWindow'
function App() {
  const [userData,setUserData]=useState([]);
  const [editUserData,setEditUserData]=useState({})
  const [search,setSearch]=useState('')
  const [searchResult,setSearchResult]=useState()
  console.log('test->',userData);
  const addDataToUserData=(newUserData)=>{
    setUserData(prevData=>{
      const isPresent= prevData.find(user=>user.email===newUserData.email)
      if( isPresent){
        return prevData;
      }
      return [...prevData,newUserData]
    })
  }
  const editUser=(email,change)=>{
    setEditUserData(()=>{return {email,change}})
  }
    const deleteUser=(email)=>{
      setUserData(prevData=>{
        return [...prevData.filter(user=>user.email!==email)]
      })
    }
    useEffect(()=>{
      editUserData.email &&  (document.getElementById('popup-1').style.display='block')
    },[editUserData.change])
    const changeDataToUserData=(data)=>{
      setUserData(prevData=>{
        return [...prevData.filter(i=>i.email!==data.email),data]
      })
    }
    const handleSearch=()=>{
      setSearchResult(()=>{
        const res= userData.find(user=>{
          // console.log('sri->',user.name.slice(0,search.length),search);
          return user.name.slice(0,search.length)===search})
        
        return res;
      })
    }
  return (
    <div className="App">
      <input className='mt-3 pb-2 ms-5 ps-2' placeholder='search' value={search} onChange={(e)=>setSearch(e.target.value)}/>
      <button className='btn btn-style btn-primary text-white border-0 rounded-0 rounded-end fs-5 ' onClick={()=>{handleSearch();searchResult && (document.getElementById('popup-2').style.display='block')}}>search </button>
    <ViewDetails userData={userData} deleteUser={deleteUser} editUser={editUser} change={editUserData.change}/>
    <ModalPopup  addDataToUserData={addDataToUserData} />
    <ChangeUser changeDataToUserData={changeDataToUserData} userInfo={userData.find(user=> user.email===editUserData.email)}/>
    <SearchWindow data={searchResult}/>
    </div>
  );
}

export default App;
