import {useRouter} from "next/router";
import {getSession, signIn, useSession} from "next-auth/react";
import {useState,useEffect} from "react";

function Doc(){
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        const securePage=async ()=>{
            const session=await getSession()
            if (!session){
                signIn()
            } else {
                setLoading(false)
            }
        }
        securePage()
    },[])
    const router=useRouter()
    const {params=[]}=router.query

    if (loading){
        return <h2>Loading... </h2>
    }

    if (params.length===2){
        return (
            <h6>
                viewing docs for feature {params[0]} and concept {params[1]}
            </h6>
        )
    }else if(params.length===1){
        return <h6>viewing docs for feature {params[0]}</h6>
    }

    return <h1>Docs Home Page</h1>
}

export default Doc;