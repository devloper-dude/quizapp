const ques = [{
        Q: 'My Name is ________ ?',
        options: ['Omji Trivedi', 'Prashant Kumar', 'Naman Kushwah', 'Rahul Tiwari']
    },
    {
        Q: 'Which is a Front-end language?',
        options: ['Redux', 'Python', 'Node.js', 'HTML']
    },
    {
        Q: 'Which is a JavaScript Framework?',
        options: ['HTML', 'React.js', 'SASS', 'CSS']
    },
    {
        Q: 'What is the name of my YouTube channel?',
        options: ['Freecodecamp', 'Developer Dude', 'Coder', 'HTML point']
    },
    {
        Q: 'You Have Completed Succesfully!',
        options: []
    }
]

const ans = ['Omji Trivedi', 'HTML', 'React.js', 'Developer Dude'];

const question = document.querySelector('#ques');
const next = document.querySelector('#nxt');
const opt = document.querySelectorAll('.box2');
const tryagn = document.querySelector('.btn');
const subbtn = document.querySelector('.subbtn');


let m = 0;

next.addEventListener('click', () => {

    m += 1;
    quiz();
    if (m == ques.length - 1) {
        document.querySelector('.ans').style.display = 'none';
        next.style.display = 'none';
        document.querySelector('.hding').style.display = 'none';
        console.log(score);
    }
})

function quiz() {

    question.innerHTML = ques[m].Q;
    for (let i = 0; i < opt.length; i++) {
        opt[i].innerHTML = ques[m].options[i];
        opt[i].parentElement.style.backgroundColor = 'gray';
        document.querySelector('#nxt').style.display = 'none';
    }
    for (item of opt) {
        item.addEventListener('click', (e) => {
            let value = e.target.innerText;
            if (value == ans[m]) {
                e.target.parentElement.style.backgroundColor = 'green';
                document.querySelector('#nxt').style.display = 'flex';

            } else {
                document.querySelector('.box').style.display = 'none';
                e.target.parentElement.style.backgroundColor = 'red';
                document.querySelector('.win').style.display = 'block';
                document.querySelector('.btn').style.display = 'flex';
            }
        })

    }

}

tryagn.addEventListener('click', () => {
    location.reload(true);
});

document.querySelector('.subbtn').addEventListener('click', () => {
    subbtn.classList.toggle('stop');
})

quiz();