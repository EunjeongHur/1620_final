const darkmode = document.querySelector('.toggle')


darkmode.addEventListener('change', function() {
    const body = document.querySelector("body")
    if (this.checked) {
        body.classList.remove('light-theme')
        body.classList.add('dark-theme');
        
    } else {
        body.classList.remove('dark-theme')
        body.classList.add('light-theme')
    }
});

document.querySelector('#frm-btn').addEventListener('click', createform)

function createform(evt) {
    const form=document.querySelector('form')
    const formmessage = form[0].value
    const formname = form[1].value
    const formemail = form[2].value

    var userinput = {
        name: formname,
        message: formmessage,
        email: formemail
    }

    console.log(userinput)
}