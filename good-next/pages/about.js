import {useSession, getSession } from "next-auth/react";
import {redirect} from "next/navigation";

const About=({data,session})=>{

    return(
        <div>
            about page - my data{data}
        </div>
    )
}
export default About;

export async function getServerSideProps(context){
    const session=await getSession(context)

    if (!session){
        redirect:{
            destination:`api/auth/signin?callbackUrl=http://localhost:3000/about`
        }
    }

    return{
        props:{
            session,
            data:session?"list of blog(session=true)":"list of free blog (session=false)"
        }
    }
}