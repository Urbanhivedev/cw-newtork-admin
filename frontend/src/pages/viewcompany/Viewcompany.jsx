import React,{useEffect, useState, useRef} from 'react';
import Grid from '@mui/material/Grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import Paginate from '../../components/paginate/Paginate';
import Searchandfilter from '../../components/searchandfilter/Searchandfilter.jsx'

import {LinkContainer} from 'react-router-bootstrap'
import {Table,Button} from 'react-bootstrap'




import './viewcompany.css'

import {Link,useNavigate,useParams} from "react-router-dom";
import mdlogo from '../../images/mdliaison.png';

import axios from 'axios'  




export default function Viewcompany() {
   

  /*I am pushing people to login page if they dont have user info details, i.e they are not in */
  const navigate = useNavigate()
  console.log(useParams())
  const { pageNumber,companyname } = useParams();

  const [userInfo,setUserInfo]  = useState(JSON.parse(window.sessionStorage.getItem('userInfo'))) 
   
     useEffect(()=>{
  
      if(userInfo === null){
        navigate('/')
      }
  
    },[userInfo])

    /*I am pushing people to login page if they dont have user info details, i.e they are not in END */
   
  const [pages,setPages] = useState(1);
   const [page,setPage] = useState(1);
  const [users,setUsers] = useState([{start:'hi'},{start:'hi'},{start:'hi'}])
  const [company,setCompany]= useState()
  const [jobs,setJobs] = useState('');
  const [id,setId] = useState();


   useEffect(()=>{

    const fetchAllUsers = async() => {
     
    
    const {data} = await axios.get(`/api/properties/companies/${companyname}?pageNumber=${pageNumber}`) 
     console.log(data)
     setPage(data.page)
     setPages(data.pages)
     setCompany(data.company)
     setJobs(data.vacanciesArray)
     setId(data.id)
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
       <Link to={`/admin/companylist/`}> {/*figure how to direct this route  out later */}
                <Button className = "buttonStyle" >
                <ArrowLeftIcon className = "iconNB"/>  BACK 
                </Button>
        </Link>
       <br/>
      <center><h1 className ="backgroundColor" >COMPANY</h1></center> 
        
        <br />
        <br />
       
       <div className="companyViewPreamble backgroundColor">
       
        <div className="backgroundColor companyNameAndLogo">
        <img src={mdlogo /*only temporary */} style={{width:'100px',marginRight:"4%",borderRadius:"15%"}}/>
          {company ? company.name: 'J & B BUILDING'} 
          </div>

       <div className ="backgroundColor" >
      
        <p className ="backgroundColor" ><Searchandfilter pageSearch={"job"}/></p>
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
           <th className='th'>JOBS</th>
           
           <th className='th'>START DATE</th>
           <th className='th'></th>
           <th className='th'></th>
         </tr>
         
         
          {jobs !== '' && jobs.map((job,index) => (
            <tr className='tr' key={jobs.indexOf(job)}  >
              <td className='td'>{(page) + (2*(page-1)) + jobs.indexOf(job)}</td>
              <td className='td' >{job.title}</td>
               {console.log(jobs)}
              <td className='td '>{'02/08/2022'}</td>
             
              <td className='td'>    
              <Link to={`/admin/company/joblisting/${id}/${index}`}> {/*figure how to direct this route  out later */}
                <Button className = "buttonStyle" >
                 VIEW{/* <EditIcon className = "iconNB"/>*/}
                </Button>
               </Link>
            </td>


             
            </tr>
          ))}
         
        </table>
        
        <Paginate page={page} pages={pages}/>
      </div>
        
      
      </> 
      
    )
}
 