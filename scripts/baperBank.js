// handling button
const submit =document.getElementById('submit').addEventListener('click', function () {
    const emailFiled = document.getElementById('input-email').value;
    const passwordFiled =document.getElementById('input-password').value;
    if (emailFiled === 'kuddus@ali.com' && passwordFiled === 'LoveRohima123') {
        window.location.href='index.html'
    }else{
        alert=('Wrong Email or Password')
    }
})




// bank statement page script
