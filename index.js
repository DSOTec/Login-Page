const form = document.querySelector('form');
const nameInput = document.querySelector('input[name="email"]');
const re =  /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/;
const passwordInput = document.querySelector('input[name="password"]');
const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const validateInput = () =>{
    nameInput.classList.remove("invalid");
    passwordInput.classList.remove("invalid2");
    if(!nameInput.value.match(re)){
       document.querySelector('.hidden').style.display = "block";
       nameInput.classList.add("invalid");
    }else{ 
        document.querySelector('.hidden').style.display = "none";
        document.querySelector('input[name="email"]').style.border = "2px solid green";
        
}
if(regex.exec(passwordInput) == null){
    document.querySelector('.hidden2').style.display = "block";
    passwordInput.classList.add("invalid2");
} else{
    document.querySelector('.hidden2').style.display = "none";
    document.querySelector('input[name="password"]').style.border = "2px solid green";

}
const isValidEmail = (email) =>{
    
    return re.test(String(email).toLowerCase());
}

/*const isValidPassword = (password) =>{
    return re.test(String(password).toLowerCase());
}*/
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInput();
   
} );
nameInput.addEventListener('input', () =>{
    validateInput();
})
passwordInput.addEventListener('input', () =>{
    validateInput();
})