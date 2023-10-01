import React,{useState} from "react";

const Section=({Title,desc,IsVisible,ChangeVisbleSection})=>{
    return(
    <div>
        <h1>{Title}</h1>
        {
            IsVisible ?
            (
            <>
            <p>{desc}</p>
            <button onClick={()=>{ChangeVisbleSection(null)}}>
             Hide
            </button>
            </>
            ):
            <button onClick={()=>{ChangeVisbleSection()}}> Show </button>
        }
    </div>
    )
}

const Instamart=()=>{

    const [isVisibleSection,setIsVisbleSection]=useState("About")
    return(
        <div>
        <Section Title="This is title of About"
        desc="This is description of About"
        IsVisible={isVisibleSection==="About"}
        ChangeVisbleSection={(title)=>{
            if(title===null) setIsVisbleSection("");
            else
            setIsVisbleSection("About")}}
        />

       <Section Title="This is title of Instamart 1"
        desc="This is description of Instamart 1"
        IsVisible={isVisibleSection==="Instamart 1"}
        ChangeVisbleSection={(title)=>{
            if(title===null) setIsVisbleSection("");
            else
            setIsVisbleSection("Instamart 1")}}
        />

        <Section Title="This is title of Instamart 2"
        desc="This is description of Instamart 2"
        IsVisible={isVisibleSection==="Instamart 2"}
        ChangeVisbleSection={(title)=>{if(title===null) setIsVisbleSection("");
        else
        setIsVisbleSection("Instamart 2")}}
        />

        </div>
        
    )
}

export default Instamart;