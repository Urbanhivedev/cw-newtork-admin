
import React,{useEffect, useState, useRef} from 'react';
import "./sidebar.css"
import {LineStyle, Timeline ,TrendingUp} from '@mui/icons-material/';

import PersonIcon from '@mui/icons-material/Person';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import EmailIcon from '@mui/icons-material/Email';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import NearMeIcon from '@mui/icons-material/NearMe';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import WifiProtectedSetupIcon from '@mui/icons-material/WifiProtectedSetup';
import urbanlogo from '../../images/mdliaison.png';

import {Button} from 'react-bootstrap'

import {BrowserRouter as Router ,Link} from "react-router-dom";


export default function Sidebar() {


    const [admin,setAdmin] = useState(true);

    const changeMode = ()=>{
        setAdmin(!admin)
    }

    return (
        
        <div className="sidebar">
  
              <div className="imageCenter">
              <img src={urbanlogo} alt="urban hive logo" className="sidebarLogo"  />
              </div>
               
               
              { /* I MAY NEED THIS LATER BUT I AM BLOCKING THIS OUT BECAUSE MR DEAN SAID TO SEPARATE ADMIN AND USERS
              
                <div  className = "buttonSidebar" onClick = {changeMode}>   
                  <WifiProtectedSetupIcon className = "iconNB"/> {admin ?"Admin Mode":"User Mode"}
                </div>
             */}
                
            <div className="sidebarWrapper">
               
               
                <div className="sidebarMenu">
                
                    <h3 className="sidebarTitle clickable">DASHBOARD</h3>
                
                </div> {/*sidebar menu closing */}

                 
                  {/*I had to assign each emoji component a classname BELOW, to enforce background color*/ }
               {/* <div className="sidebarMenu">
                    <h3 className="sidebarTitle">SEARCH</h3>
                   <ul className="sidebarList">
                     
                     
                     
                    
                 <Link to ={'/properties/built/'} className="linkref">
                     <li className="sidebarListItem">
                         <AccountBalanceIcon  className="sidebarListItemIcon"/>
                        Completed 
                         
                     </li>
                     </Link> 



                     <Link  className="linkref" to={"/properties/offplan/"}>
                     <li className="sidebarListItem">
                       
                         <NearMeIcon className="sidebarListItemIcon"/>
                            Incomplete
                   
                     </li>
                    </Link> 

                     


                    </ul> 
                </div> */} {/*sidebar menu closing */}

          { !admin && 
                 <>
                 <Link  className="linkref" to={"/messages/"}>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle clickable"> HOME </h3>
                   
                </div> 
                </Link>

                   <br/>


                   <div className="sidebarMenu">
                    <h3 className="sidebarTitle">CANDIDATES </h3>
                  
                </div>

                <br/>


                     <div className="sidebarMenu">
                     <h3 className="sidebarTitle">COMPANIES </h3>

                    </div>
                </>
             }
               
                <br/>
                   <br/>
                   <br/> {/**maybe later i will use CSS margins to create spaces between options, not margins */}
                   
               { admin &&
               
               <div className="sidebarMenu">
                    <h3 className="sidebarTitle">ADMIN</h3>
                   <ul className="sidebarList">
                     
                      {/*I had to assign each emoji component a classname here, to enforce background color*/ }
                     
                    
                 
                     <li className="sidebarListItem">
                         <HomeIcon  className="sidebarListItemIcon"/>
                         HOME
                         
                     </li>
                



                     <Link  className="linkref" to={"/admin/userlist/"}>
                     <li className="sidebarListItem">
                       
                         <SupervisedUserCircleIcon className="sidebarListItemIcon"/>
                            CANDIDATES
                   
                     </li>
                    </Link> 

                    <Link  className="linkref" to={"/admin/companylist/"}>
                     <li className="sidebarListItem">
                       
                         <MapsHomeWorkIcon className="sidebarListItemIcon"/>
                            COMPANIES 
                   
                     </li>
                    </Link> 

                     


                    </ul> 
                </div> 
                 }


                 {/*sidebar menu closing */}



                





               
            </div>
             {/*end of sidebar(below)*/}
        </div>
        
    )
}