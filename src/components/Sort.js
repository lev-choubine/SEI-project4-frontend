import Swipe from './Swipe'


function Sort(props) {



  
    const randomUser = props.user ? props.user : ''
    console.log(props.user)
    return(
        <div>
            {
                props.user.length === 0
                ?
                <p>Sorry, we couldn't find anyone in your area.</p>
                :
                <Swipe toggle={props.toggle} user={randomUser} pic={props.pic} id={props.id} me={props.me} room={props.user._id}/>
            }
         
            {/* <p>{props.name}</p> */}
        </div>
    )
}

export default Sort;