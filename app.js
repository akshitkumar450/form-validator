let small = document.querySelector('small')
let username = document.querySelector('#username')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let confirm = document.querySelector('#confirm')
let form = document.querySelector('form')

function error(infoerr, message) {
    //parent
    let par = infoerr.parentElement;
    // parent -> input element
    let userInput = par.querySelector('input')
    //update the text
    par.lastElementChild.textContent = message;
    par.lastElementChild.classList.add('error')

    //update the border color
    userInput.classList.add('input-error');
}

function success(infosuc) {
    let par = infosuc.parentElement;
    let userInput = par.querySelector('input')
    infosuc.classList.add('input-success');
    par.lastElementChild.classList.remove('error')

}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function toupper(input) {
    let s1=input.id.slice(0,1).toUpperCase();
    let s2=input.id.slice(1);
    return s1+s2
}
function check(inpArr) {
    inpArr.forEach(element => {
        if(element.value===''){
           error(element,`${toupper( element)} is required`)
        }else{
            success(element)
        }
    });
}

function checkLen(inp,a,b) {
    if(inp.value.length < a || inp.value.length > b  ){
        error(inp,`${toupper( inp)} length should be  ${a} between ${b}`)
    }
    else{
        success(inp)
    } 
}

function match(inp1,inp2){
    if(inp1.value!==inp2.value){
        error(inp2,'passowrd does not match')
    } 
}


form.addEventListener('submit', (e) => {
    e.preventDefault()

    let fields = [username, email, password, confirm];

    check(fields);
    checkLen(username,3,10)
    checkLen(password,6,15)
    match(password,confirm)


 


    //naive method

    // if(username.value===''){
    //    error(username,'username is required')
    // }else{
    //     success(username)
    // }

    // if(email.value===''){
    //     error(email,'email is required')
    //  }else if (! validateEmail(email.value)) {
    //     error(email,'email is not valid')
    //  }else {
    //     success(email)
    // }

    //  if(password.value===''){
    //     error(password,'password is required')
    //  }else{
    //     success(password)
    // }

    //  if(confirm.value===''){
    //     error(confirm,'password is required')
    //  }else{
    //     success(confirm)
    // }
})

