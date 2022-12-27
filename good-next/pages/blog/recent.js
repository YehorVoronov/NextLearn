import {useState} from "react";

const Recent=()=>{
    const [resentData,setResentData] = useState([])
    const [oneObj,setOneObj] = useState()

    const fetchRecent=async ()=>{
        const res=await fetch("/api/blog/recent/")
        const data=await res.json()
        setResentData(data)
    }

    const addToApi=async ()=>{
        const res= await fetch("/api/blog/recent/",{
            method:"POST",
            body:JSON.stringify({oneObj}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data= await res.json()
        console.log(data)
    }
    const deleteObj=async (recentObjId)=>{
        const res= await fetch("/api/blog/"+recentObjId,{
            method:"DELETE",
        })
        const data= await res.json().then(fetchRecent())


    }

    return(
        <div>
            <input value={oneObj} type='text' onChange={(e)=>setOneObj(e.target.value)}/>

            <button onClick={addToApi}>add (post) to api</button>

            <button onClick={fetchRecent}>load recent api</button>
            {resentData.map(e=><div id={e.id}>id:{e.id} text:{e.text}
            <button onClick={()=>deleteObj(e.id)}>delete</button>
            </div>)}
        </div>
    )
}
export default Recent;