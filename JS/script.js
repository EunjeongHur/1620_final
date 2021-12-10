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