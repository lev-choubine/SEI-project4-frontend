import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import ShowNotifs from './ShowNotifs'


const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

function NotificationParent(props){


const [info, setInfo]=useState([])
getMyInfo (`${REACT_APP_SERVER_URL}/api/users/myinfo/${props.email}`)

function getMyInfo (route){
        Axios.get(route)
        .then(res =>{
            console.log(props.email)
        console.log('hi') 
          setInfo(res.data.user[0])
          console.log(info)
          
        })
        .catch(err=>{
            console.log(err)
        })
      }

useEffect(() => {
        
        
      }, [props.email] )
useEffect(() => {

      }, [props.email] )
   
return(
        <div>
            <ShowNotifs alerts={info.notifications} me={info.name} pic={info.image_url} email={info.email}/>
        </div>
    )
}

export default NotificationParent;