document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (button.id === 'clear') {
                display.innerHTML = '';
            } else if (button.id === 'calculate') {
                try {
                    display.innerHTML = eval(display.innerHTML);
                } catch (error) {
                    display.innerHTML = 'Error';
                }
            } else {
                display.innerHTML += button.textContent;
            }
        });
    });
});
