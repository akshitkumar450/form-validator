let userName = document.querySelector('#username')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let confirm = document.querySelector('#confirm')
let small = document.querySelector('small')
let form= document.querySelector('form')
let reset= document.querySelector('#reset')


function showErroruser(user,message){
    userName=document.querySelector('#username');
    userName.parentElement.lastElementChild.classList.add('error');
    userName.parentElement.lastElementChild.textContent=message
}
function showErroremail(email,message){
    email=document.querySelector('#email');
    email.parentElement.lastElementChild.classList.add('error');
    email.parentElement.lastElementChild.textContent=message
}

function showErrorpassword(password,message){
    password=document.querySelector('#password');
    password.parentElement.lastElementChild.classList.add('error');
    password.parentElement.lastElementChild.textContent=message
}

function showErroruserconfirm(confirm,message){
    confirm=document.querySelector('#confirm');
    confirm.parentElement.lastElementChild.classList.add('error');
    confirm.parentElement.lastElementChild.textContent=message
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit' ,(e)=>{
    e.preventDefault()
    if(userName.value==='') 
         showErroruser(userName,'user is required') 
         else{
             userName.parentElement.lastElementChild.classList.remove('error')
         }

    if(email.value==='') {
        showErroremail(email,'email is required')
    } else{
        validateEmail(email)
    }
         
    if(password.value==='') 
    showErrorpassword(password,'email is required')

    if(confirm.value==='') 
         showErroruserconfirm(confirm,'email is required')
})

reset.addEventListener('click',()=>{
    userName.value=email.value=password.value=confirm.value=''
    userName.parentElement.lastElementChild.classList.remove('error')
    email.parentElement.lastElementChild.classList.remove('error')
    password.parentElement.lastElementChild.classList.remove('error')
    confirm.parentElement.lastElementChild.classList.remove('error')
})

