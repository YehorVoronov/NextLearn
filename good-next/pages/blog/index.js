import useSWR from "swr";


const fetcher=async()=>{
    const response=await  fetch("http://localhost:4000/posts")
    const data=await response.json()
    return data
}
function dataSWR(){
    const {data,error}=useSWR('blogDataSwr',fetcher)

    if (error) return "an arror has occured"
    if (!data) return "Loading..."

    return <div>
        Blog main
        {data.map(post=>{
            return<div>
                post.id :{post.id}<br/>
                post.title :{post.title}<br/>
                post.author :{post.author}<br/>
            </div>
        })}
    </div>
}
export default dataSWR
/*const Blog=({posts})=>{
    return(
        <div>
          Blog main
            {posts.map(post=>{
                return<div>
                    post.id :{post.id}<br/>
                    post.title :{post.title}<br/>
                    post.author :{post.author}<br/>
                </div>
            })}
        </div>
    )
}

export default Blog;
export async function getStaticProps(){
    const response=await fetch("http://localhost:4000/posts")
    const data = await response.json()
    return{
        props:{
            posts:data
        },
        revalidate:30
    }
}*/
