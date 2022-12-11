
import React,{useEffect, useState, useRef} from 'react';
import Grid from '@mui/material/Grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Paginate from '../../components/paginate/Paginate';
import Searchandfilter from '../../components/searchandfilter/Searchandfilter.jsx'

import {LinkContainer} from 'react-router-bootstrap'
import {Table,Button} from 'react-bootstrap'

import './companytable.css'

import {Link,useNavigate,useParams} from "react-router-dom";

import axios from 'axios'  




export default function Companytable() {
   

  /*I am pushing people to login page if they dont have user info details, i.e they are not in */
  const navigate = useNavigate()
  const { pageNumber } = useParams();

  const [userInfo,setUserInfo]  = useState(JSON.parse(window.sessionStorage.getItem('userInfo'))) 
   
     useEffect(()=>{
  
      if(userInfo === null){
        navigate('/')
      }
  
    },[userInfo])

    /*I am pushing people to login page if they dont have user info details, i.e they are not in END */
   
  const [pages,setPages] = useState(1);
   const [page,setPage] = useState(1);
  const [users,setUsers] = useState([])


   useEffect(()=>{

    const fetchAllUsers = async() => {
     
    
    const {data} = await axios.get(`/api/properties/complete?pageNumber=${pageNumber}`) 
     setUsers([...data.properties])
     setPage(data.page)
     setPages(data.pages)
     
   console.log(users)
   }

   fetchAllUsers()

   /*const fetchProperties = async() => {
     
    const {data} = await axios.get(`/api/properties?pageNumber=${pageNumber}`) //{data} is object destructuring from what we get back from axios , i totally forgot about object destructuring
   
    console.log(data.properties)
     setPropertyList(data.properties)
     setPage(data.page)
     setPages(data.pages)

   }

   fetchProperties()*/


 },[pageNumber])
  
 
  
  
  return (

      <> 
      

       <div className="userTableContainer"> 
        
       <br />
      <center><h1 className ="backgroundColor" >COMPANIES</h1></center> 
        
        <br />
        <br />
       
       <div className="userTablePreamble backgroundColor">
       

       <div className ="backgroundColor" >
      
        <p className ="backgroundColor" ><Searchandfilter pageSearch={"company"}/></p>
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
           
           <th className='th'>JOBS AVAILABLE</th>
           <th className='th'></th>
           <th className='th'></th>
         </tr>
         
         
          {users.map(user => (
            <tr className='tr' key={users.indexOf(user)}  >
              <td className='td'>{(page) + (2*(page-1)) + users.indexOf(user)}</td>
              <td className='td' >{user.name}</td>
               {console.log(user)}
              <td className='td '>{`${user.jobs.length} JOBS`}</td>
             
              <td className='td'>    
              <Link to={`/admin/company/${user.id}`}>
                <Button className = "buttonStyle" >
                 {/* <EditIcon className = "iconNB"/>*/}VIEW
                </Button>
               </Link>
            </td>

             {/* <td className='td'>
              
               

               <Button className = "buttonStyle" >
               <DeleteIcon className = "iconNB"/>
               </Button>
             </td> */}

             
            </tr>
          ))}
         
        </table>
        
        <Paginate page={page} pages={pages}/>
      </div>
        
      
      </> 
      
    )
}