document.getElementById('btn-submit').addEventListener('click', function(){
    const emailType = document.getElementById('email-type');
    const email = emailType.value;

    const passwordType = document.getElementById('password-type');
    const password = passwordType.value;

    if(email === 'santan@bapgmail.com'  && password === '123456'){
        window.location.href = 'bank.html';
    }else{
        alert('invalid user')
    }


})