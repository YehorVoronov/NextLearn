import Link from "next/link";

const Product=({users,env, productId=100})=>{
    return(
        <div>
            <div style={{backgroundColor:"green"}}>

                .env.local:
                {env}
            </div>
            {users.slice(1,10).map(e=><div key={e.id}>{e.title}</div>)}

            <Link href="/product/1"><h1>Product 1</h1></Link>
            <Link href="/product/2"><h1>Product 2</h1></Link>
            <Link href="/product/3" replace><h1>Product 3</h1></Link>
            <Link href="/product/4"><h1>Product 4</h1></Link>
            <Link href={"/product/"+productId}><h1>product {productId } Product def 100 if no props</h1></Link>

        </div>
    )
}
export async function getStaticProps(){
    const res=await fetch("https://jsonplaceholder.typicode.com/posts")
    const data=await res.json()
    const env=process.env.ITS_FROM_FOLDER_ENV_LOCAL
    return{
        props:{
            users:data,
            env:env
        }
    }
}

export default Product;