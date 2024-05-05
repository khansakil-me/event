// option:3

const skyButton = document.getElementById('make-sky');
skyButton.onclick = sky;

function sky() {
    document.body.style.backgroundColor = 'skyblue'
    
}


// option:4
const goldenButton = document.getElementById('make-golden');

goldenButton.addEventListener('click' , goldenColor);

function goldenColor() {
    document.body.style.backgroundColor = 'goldenrod';
    
}

// option:2
    function blue() {
        document.body.style.backgroundColor ='blue';
        
    }