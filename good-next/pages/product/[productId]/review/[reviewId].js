import {useRouter} from "next/router";

const Review=()=>{
    const router=useRouter()
    const {productId,reviewId}=router.query
    return(
        <div>
           pr {productId} Review {reviewId}
        </div>
    )
}

export default Review;