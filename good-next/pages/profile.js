import Link from "next/link";
import {signIn,signOut,useSession} from "next-auth/react";

const Profile=()=>{
    const { data: session } = useSession();
    /*const [session,loading] = useSession()*/
    return(
        <div>
            profile page<br/>
            {!session?(
                <Link legacyBehavior href='/api/auth/signin'>
                    <a onClick={e=>{
                        e.preventDefault()
                        signIn("github")
                    }}>sign In</a>
                </Link>
            ):(
                <Link legacyBehavior href="/api/auth/signout">
                    <a onClick={e=>{
                        e.preventDefault()
                        signOut()
                    }}>sign Out</a>
                </Link>
            )}
            {/*{!loading && !session && (

            )}*/}
            <br/>
            {/*{session&&(

            )}*/}


        </div>
    )
}
export default Profile;