function FormVerefication(form){
    const formBtn = form.querySelector('.form-btn')
    let status
    
    function checkUserName(){
        const {userName} = form
        const message = userName.parentElement.querySelector('.error-message')
        if(userName.value.trim() === ""){
        message.innerText = 'Fild Name empty'
        status = false
        }
        else if(userName.value.length !== 0 && userName.value.length < 3){
        message.innerText = 'Name is short'
            status = false
        }
        else{
            message.innerText = ''
            status = true
        }
    }

    function checkEmail(){
       const {email} = form
       const message = email.parentElement.querySelector('.error-message')
       const re = /\S+@\S+\.\S+/
       if(email.value.trim() === ""){
        message.innerText = 'Fild email empty'
        status = false
       }
       else if (!re.test(email.value) && email.value.length !== 0 ){
        message.innerText = 'Not correct email address'
        status = false
       }
       else{
        message.innerText = ''
        status = true
       }
    }
    function checkPassword(){
        const {password} = form
        const message = password.parentElement.querySelector('.error-message')
        const{confirmPassword} = form
        if(password.value.trim() === ""){
           message.innerText = 'Fild password empty'
            status = false
        }
        else if(password.value.length < 8){
           message.innerText = 'Password must be at least 8 characters'
            status = false
        }
        else if(password.value !== confirmPassword.value){
            confirmPassword.parentElement.querySelector('.error-message').innerText = 'Passwords do not match'
            status = false
        }
        else{
            confirmPassword.parentElement.querySelector('.error-message').innerText = ''
            message.innerText = ''
            status = true
        }
    }

    function vereficationForm(event){
        event.preventDefault()
        checkUserName()
        checkEmail()
        checkPassword()

        



        if(status === false){
           
            console.log('ERROR form not validated')
        }
        else{
            console.log('The form has been validated')
            
        }

    }




    formBtn.addEventListener('click' , vereficationForm)
}
const form = FormVerefication(document.formReg)

