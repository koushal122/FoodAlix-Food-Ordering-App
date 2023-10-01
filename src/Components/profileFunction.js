import { useState ,useEffect} from "react"

const Profile=(props)=>{
    //state variable
    const [count,setCount]=useState(0);
    const [count2,setCount2]=useState(0);

    useEffect(()=>{
      //best place for API calls becoz it is called after render
    });

    return(
        <div>
            <h1>This is function based component</h1>
            <p> like this we acess props {props.name}</p>
            <p>Count: {count}</p>
            {/* here we change count like this */}
            <button onClick={()=>{
                setCount(1);
                setCount2(2);
            }}>Increase Count</button>
        </div>
    )
}

export default Profile