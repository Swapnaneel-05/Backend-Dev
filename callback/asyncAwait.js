function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("login")
            resolve()
        },2000)
    })
}

function userDetails(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
        },1000)
    })
}

async function demo(){
    try {
        await login();
        await userDetails();
    } catch (error) {
        console.log("error",error)
    }
    
    console.log("all task done")
}

demo();