import {API_URLS,LOCALSTORAGE_TOKEN_KEY } from "../utils";

const customFetch =async (url,{body,...customConfig})=>{
    //second orgument in above is the configration object.
    const token=window.localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);

    const headers={
        'content-type':'application/json',
        Accept:'applocation/json'
    }

    if(token){
        headers.Authorization = `Bearer ${token}`;
    }

    const config={
        ...customConfig,
        headers:{
            ...headers,
            ...customConfig.headers,
        }
    }

    if(body){
        config.body=JSON.stringify(body)
    }
    try{
        const responce=await fetch(url,config);
        //config means method
        const data =await responce.json();
        if(data.success){
            return{
                data:data.data,
                success:true
            }
        }
        throw new Error(data.message);

        
    }
    catch (error){
        console.error('error');
        return {
            message:error.message,
            success:false,
        }
    }
};

export const getPosts=(page=1,limit=5)=>{
    return customFetch(API_URLS.posts(page,limit),{
        method:'GET',
    });
} 

export const login=(email,password)=>{
    return customFetch(API_URLS.login(),{
        method:'POST',
        body:{email,password}
    })
}