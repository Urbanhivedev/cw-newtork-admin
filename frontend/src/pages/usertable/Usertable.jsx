
import React,{useEffect, useState, useRef} from 'react';
import Grid from '@mui/material/Grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Paginate from '../../components/paginate/Paginate';
import Searchandfilter from '../../components/searchandfilter/Searchandfilter.jsx'

import {LinkContainer} from 'react-router-bootstrap'
import {Table,Button} from 'react-bootstrap'

import './usertable.css'

import {Link,useNavigate,useParams} from "react-router-dom";

import axios from 'axios'  




export default function Usertable() {
   

  /*I am pushing people to login page if they dont have user info details, i.e they are not in */
  const navigate = useNavigate()
  const { pageNumber } = useParams();

  const [userInfo,setUserInfo]  = useState(JSON.parse(window.sessionStorage.getItem('userInfo'))) 
   console.log(userInfo)
    useEffect(()=>{
  
      if(userInfo === null){
        navigate('/')
      }
  
    },[userInfo,navigate])

    /*I am pushing people to login page if they dont have user info details, i.e they are not in END */
   
  const [pages,setPages] = useState(1);
   const [page,setPage] = useState(1);
   const [users,setUsers] = useState([{city:  "New York",email: "ut4@mdliaison.com",id: "6rG66NTVECO3BUETy2nW", industry :  "Pharmacy"}])
   
   const secondsConverter = function(seconds){
    return new Date(seconds);
  }


   useEffect(()=>{

    const fetchAllUsers = async() => {
     
    
    const {data} = await axios.get(`/api/users?pageNumber=${pageNumber}`) 
     setUsers([...data.allUsers])
     setPage(data.page)
     setPages(data.pages)
     console.log(users)
   }

   fetchAllUsers()
  
  


 },[pageNumber])
  

  
  return (

      <> 
        
   
       <div className="userTableContainer"  > 
        
       <br />
      <center><h1 className ="backgroundColor" >CANDIDATES</h1></center> 
        
        <br />
        <br />
       
       <div className="userTablePreamble backgroundColor">
       

       <div className ="backgroundColor" >
      
        <p className ="backgroundColor" ><Searchandfilter pageSearch={"candidate"}/></p>
      </div>

        {/*<div className ="backgroundColor">
                <Button  className = "buttonStyle">
                  <AddIcon className = "iconNB"/> Add User
                </Button>

  </div>*/}

    </div>
    
         <br/>
         
        
        
        
         
        <table className='table'>
         
          <tr className='tr'>
           <th className='th'>ID</th>
           <th className='th'>NAME</th>
           
           <th className='th'>REGISTERED ON</th>
           <th className='th'></th>
           <th className='th'></th>
         </tr>
         
         
          {users.map(user => (
            <tr className='tr' key={users.indexOf(user)}  >
              <td className='td'>{(page) + (2*(page-1)) + users.indexOf(user)}</td>
              <td className='td' >{user.name}</td>
               
              <td className='td '>{user.registered && user.registered}</td>
             
              <td className='td'>    
              <Link to={`/admin/user/${user.id}/edit`}>
                <Button className = "buttonStyle" >
                  <EditIcon className = "iconNB"/>
                </Button>
               </Link>
            </td>

              <td className='td'>
              
               

               <Button className = "buttonStyle" >
               <DeleteIcon className = "iconNB"/>
               </Button>
             </td>

             
            </tr>
          ))}
         
        </table>
        
        <Paginate page={page} pages={pages}/>
      
      </div>
        
      
      </> 
      
    )
}