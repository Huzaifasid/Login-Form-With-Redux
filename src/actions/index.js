 export const login = (data)=>{
    //  console.log(data);
return {
    type: 'LOG_IN',
    payload:{
        email:data.email,
        password:data.password
    }
}
}
 export const logout = (data)=>{
    //  console.log(data);
return {
    type: 'LOG_OUT',
    payload:{
        email:data.email,
        password:data.password
    }
}
}

