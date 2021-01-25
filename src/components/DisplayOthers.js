function DisplayOthers(props){
    return(
        <div>
             <div id="showNotifsDiv">
            {/* <ShowNotifs alerts={notifications} me={props.info.name} my_email={props.info.email} pic={props.info.image_url}/> */}
            </div>
            <p>{props.info.age}</p>
            <p>{props.info.bio}</p>
            <p>{props.info.gender}</p>
            <p id="preference">Preference: {props.info.preference}</p>
           
            <div>
                <button class="btn btn-outline-primary" id="edit-prof-btn">Edit info</button>
            </div>
        </div>
    )
}

export default DisplayOthers;