import {useRouter} from "next/router";

const ProductDetail=({post})=>{

    const router=useRouter()
    if (router.isFallback){
        return <h6>Loading...</h6>
    }

    return(
        <div>
            Product detail {post.body}
            <br/>
            id:{post.id} <br/>
            title:{post.title}
        </div>
    )
}

export default ProductDetail;

export async function getStaticPaths(){
    const response= await fetch("https://jsonplaceholder.typicode.com/posts")
    const data=await response.json()

    const paths=data.map(product=>{
        return{
            params:{
                productId:`${product.id}`
            }
        }
    })

    return{
        paths,
        fallback:false,
    }
}

export async function getStaticProps(context){
    const {params} = context
    const response= await fetch("https://jsonplaceholder.typicode.com/posts/"+params.productId.toString())
    const data=await response.json()

    return{
        props:{
            post:data,
        }
    }
}