document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('myButton');
    const message = document.getElementById('message');
    
    button.addEventListener('click', () => {
        if (message.classList.contains('hidden')) {
            message.classList.remove('hidden');
            message.classList.add('visible');
        } else {
            message.classList.remove('visible');
            message.classList.add('hidden');
        }
    });
});
