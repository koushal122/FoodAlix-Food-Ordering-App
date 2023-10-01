import oops from "./Images/oops.png";

const Error=()=>{
  return (
    <div className="oops">
        <img src={oops} alt="error" />
        <h3 className="oops-text"> You are on the Wrong Page !!</h3>
    </div>
  )
}

export default Error