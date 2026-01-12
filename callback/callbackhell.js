
function login(cb){
    setTimeout(() =>{
        console.log("login");
        cb()
    },2000);
}

function userDetails(){
    setTimeout(()=>{
        console.log("userdetails")
    },1000);
}

login(userDetails)