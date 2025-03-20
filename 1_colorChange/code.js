
    const body = document.querySelector('body');
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (e.target.id === 'random') {
                let randomColor = Math.floor(Math.random() * 16777215).toString(16);
                randomColor = randomColor.padStart(6, '0'); // Ensure the color is 6 characters long
                body.style.backgroundColor = '#' + randomColor;
            } else {
                body.style.backgroundColor = e.target.id;
            }
        });
    });
