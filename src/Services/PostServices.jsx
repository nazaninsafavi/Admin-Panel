import { jpAxios } from "../JpAxios";

export const getPostServices= ()=>{
     return(
        jpAxios.get('/posts')
     )
    }
