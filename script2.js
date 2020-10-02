let username=document.getElementById('username')
let email=document.getElementById('email')
let password=document.getElementById('password')
let confirm=document.getElementById('confirm')
let form=document.getElementById('form')

function error(info,message){
    const p=info.parentElement;
    const c=p.lastElementChild;
    c.textContent=message;
    c.classList.add('error')
    c.classList.add('error-outline')

}

function success(info){

}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(username.value===''){
        error(username,'username is required')
    }
    else{
        success(username)
    }
    if(email.value===''){
        error(email,'email is required')
    }
    if(password.value===''){
        error(password,'password is required')
    }
    if(confirm.value===''){
        error(confirm,'password does not match')
    }
})
