// -------------step 1
document.getElementById('btn-login').addEventListener('click',function(){
// ----------   step 2
    const getEmail = document.getElementById('login-mail');
    const email = getEmail.value;

    const getPassword =document.getElementById('login-pass');
    const password = getPassword.value;
// ----------  step3 
    if( email==='urmy@gmail.com' && password ==='jahirul'){
       window.location.href ='bank.html';


    }
    else{
       alert('You are attemp wrong email or password');

    };

      

    
});
