import { createContext } from "react";

const UserContext = createContext(
   {
     user:{
        name:"Dummy Name",
        email:"dummy@gmailcom"
     }
   }
)

export default UserContext;