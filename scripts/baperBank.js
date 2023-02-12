// handling button
const submit =document.getElementById('submit').addEventListener('click', function () {
    const emailFiled = document.getElementById('input-email').value;
    const passwordFiled =document.getElementById('input-password').value;
    if (emailFiled === 'kuddus@ali.com' && passwordFiled === 'LoveRohima123') {
        console.log('valid email and password');
    }else{
        console.log('invalid email or password');
    }
})