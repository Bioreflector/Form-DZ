function FormVerefication(form){
    const formBtn = form.querySelector('.form-btn')
    const inputsForm =form.querySelectorAll('input')
    const status = []

  
    function checkUserName(){
        const {userName} = form
        const message = userName.parentElement.querySelector('.error-message')
        if(userName.value.trim().length < 3){
        message.innerText = 'Name is short'
        status.push(false)
        }
        else{
            message.innerText = ''
        }
    }

    function checkEmail(){
       const {email} = form
       const message = email.parentElement.querySelector('.error-message')
       const re = /\S+@\S+\.\S+/
        if (!re.test(email.value)){
        message.innerText = 'Not correct email address'
        status.push(false)
       }
        else{
        message.innerText = ''
      }
    }

    function checkPassword(){
        const {password} = form
        const message = password.parentElement.querySelector('.error-message')
        const{confirmPassword} = form
        
         if(password.value.trim().length < 8){
           message.innerText = 'Password must be at least 8 characters'
           status.push(false)
        }
        else if(password.value !== confirmPassword.value){
            confirmPassword.parentElement.querySelector('.error-message').innerText = 'Passwords do not match'
            status.push(false)
        }
        else{
            confirmPassword.parentElement.querySelector('.error-message').innerText = ''
            message.innerText = ''
           
        }
    }
    function checkEmptyFields(){
        inputsForm.forEach((input)=>{
            if(input.value.trim() === ''){
                status.push(false)
                input.parentElement.querySelector('.error-message').innerText = 'The field must not be empty'
            }
        })
    }

    function clearFields(){
        inputsForm.forEach(input => input.value = '')
    }

    function vereficationForm(event){
        event.preventDefault()
        checkUserName()
        checkEmail()
        checkPassword()
        checkEmptyFields()
        if(status.includes(false)){
            console.log('ERROR form not validated')
            status.splice(0)
            
        }
        else{
            console.log('The form has been validated')
            clearFields()
        }

    }
    formBtn.addEventListener('click' , vereficationForm)
}
const form = FormVerefication(document.formReg)

