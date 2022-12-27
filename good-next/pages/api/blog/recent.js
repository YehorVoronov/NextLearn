import {blogRecentApi} from "../../../data/blogRecentApi";

export default function handler(req,res){
    if (req.method==='GET'){
        res.status(200).json(blogRecentApi)
    }else if (req.method==='POST'){
        res.status(200).json(blogRecentApi)
        const bodyObj=req.body.oneObj
        const newObj={
            id: Date.now().toString(),
            text:bodyObj
        }
        blogRecentApi.push(newObj)
        res.status(201).json(newObj)
    }
}