import {blogRecentApi} from "../../../data/blogRecentApi";

export default function handler(req,res){

    const recentObjId =req.query.commentId
    if (req.method==="GET"){
        const recentObj=blogRecentApi.find((e)=>e.id===recentObjId
        )
        res.status(200).json(recentObj)
    }else if((req.method==="DELETE")){
        const deleteRecent=blogRecentApi.find((e)=>e.id===recentObjId
        )

        const index=blogRecentApi.findIndex(
            (e)=>e.id===recentObjId
        )
        blogRecentApi.splice(index,1)

        res.status(200).json(deleteRecent)
    }


/*console.log(recentObjId)*/
}