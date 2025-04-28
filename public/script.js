document.addEventListener('DOMContentLoaded', () => {
    const url = 'http://qzpro.ru:8000';
    const buttonQuiz = document.querySelector('#buttonQuiz');
    const quiz = document.querySelector('#Quiz');
    let currentCanvas = 1;
    let currentIndex = 0;
    let data = {};        
    const userData = {
        date: '',
        position: '',
        quiz_id: quiz_id,
        name: '',
        email: '',
        tel: '',
        details: {
            answers: []
        }
    };
    const City = async () => {
        try {
            const response = await fetch('http://ip-api.com/json/');
            const data = await response.json();
            const city = data.city;
            console.log(`Город пользователя: ${city}`);
            userData.position = city;
        } catch (error) {
            console.error('Ошибка при получении города:', error);
        }
    };
    function formatDate(date) {
        const options = { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false };
        const formattedDate = date.toLocaleString('ru-RU', options);
        
        const [datePart, timePart] = formattedDate.split(', ');
        return `${datePart} г., ${timePart}`;
    };

    const answer = (index) => {
        userData.answers[currentIndex].answer[index] = !userData.answers[currentIndex].answer[index];
        renderAnswers();
    };

    const renderAnswers = () => {
        const questionData = data.canvas2[currentIndex];
        const totalQuestions = data.canvas2.length; 
        const progressPercentage = ((currentIndex) / totalQuestions) * 100; 
        STATUS(currentIndex+1);
        canvas.innerHTML = `
            <div class='canvas2'>
                <div id='answers_for_quiz'></div>
                <div class='progress'>
                    <p>Готово: <span>${Math.round(progressPercentage)}%</span></p>
                    <div class='prog'><div style='width: ${Math.round(progressPercentage)}%'></div></div>
                    <a href='http://qzpro.ru'>Создано в <span>QZ.pro</span></a>
                    <button id='backButton'><img src='data:image/svg+xml;base64,${imgs.back}' alt='#' /></button>
                    <button id='nextButton'>Далее <img src='data:image/svg+xml;base64,${imgs.next}' alt='#' /></button>
                </div>
            </div>
        `;
        const renderQuiz = () => {
            const answersquiz = document.querySelector('#answers_for_quiz');
            const questionData = data.canvas2[currentIndex];
            switch (questionData.name) {
case 'Answers':
answersquiz.innerHTML = `
    <h3>${questionData.question}</h3>
    <div class='answers'>
        ${questionData.answers.map((answer, index) => `
            <div class='item'>
                <button data-index='${index}' class='answerButton'></button>
                <p>${answer}</p>
            </div>
        `).join('')}
    </div>
`;
break;

case 'Calculator':
answersquiz.innerHTML = `
    <h3>${questionData.question}</h3>
    <div class='calc'>                 
        <input type='text' id='count' placeholder='${questionData.min}' />
        <div class='range'>
            <div id='rangeValue' style='width: 50%'><div></div></div>
            <input type='range' id='range' min='${questionData.min}' max='${questionData.max}' step='${questionData.step}' value='${questionData.first}'/>
        </div>
        <div class='text'>
            <p>${questionData.min}</p>
            <p>${questionData.max}</p>
        </div>                                    
    </div>
`;

const rangeInput = document.getElementById('range');
const rangeValueDiv = document.getElementById('rangeValue');
const countInput = document.getElementById('count');

const updateDivWidth = () => {
    const min = parseInt(rangeInput.min);
    const max = parseInt(rangeInput.max);
    const value = parseInt(rangeInput.value);
    const percentage = ((value - min) / (max - min)) * 100;
    rangeValueDiv.style.width = percentage + '%';
    countInput.value = value; 
};

rangeInput.addEventListener('input', () => {
    updateDivWidth();
});

countInput.addEventListener('input', () => {
    const value = countInput.value;
    const min = parseInt(rangeInput.min);
    const max = parseInt(rangeInput.max);
    if (!isNaN(value)) {
        if (value >= min && value <= max) {
            rangeInput.value = value; 
        } else {
            rangeInput.value = value < min ? min : max;
        }
        updateDivWidth(); 
    }
});

updateDivWidth();
break;

case 'AnswersImg':
answersquiz.innerHTML = `
    <h3>${questionData.question}</h3>
    <div class='answersImg'>
        <div class='left'>
            ${questionData.answers.map((answer, index) => `
                <div class='item'>
                    <button data-index='${index}' class='answerButton'></button>
                    <p>${answer}</p>
                </div>
            `).join('')}
        </div>
        <div class='right' style='background: url(${questionData.imgs[0]});'></div>
    </div>
`;
break;

case 'AnswersAndImg':
answersquiz.innerHTML = `
    <h3>${questionData.question}</h3>
    <div class='answersAndImg'>
        <div class='items'>
            ${questionData.answers.map((answer, index) => `
                <div class='item'>
                    <div class='img' style='background: url(${questionData.imgs[index]});'></div>
                    <div class='btns'>
                        <button data-index='${index}' class='answerButton'></button>
                        <p>${answer}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    </div>
`;
break;

default:
break;
};

userData.details.answers[currentIndex].question = questionData.question;
            const answerButtons = document.querySelectorAll('.answerButton');
            answerButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const index = button.getAttribute('data-index');
                    const selectedAnswer = questionData.answers[index]; 
                    const answerIndex = userData.details.answers[currentIndex].answer.indexOf(selectedAnswer);
                    if (answerIndex === -1) {
                
                        userData.details.answers[currentIndex].answer.push(selectedAnswer);
                        console.log(`Добавлен ответ: ${selectedAnswer}`);
                        button.classList.add('active'); 
                    } else {
                        
                        userData.details.answers[currentIndex].answer.splice(answerIndex, 1);
                        console.log(`Удален ответ: ${selectedAnswer}`);
                        button.classList.remove('active'); 
                    }
                });
            });
        };
        renderQuiz();


        const answerButtons = document.querySelectorAll('.answers button');
        answerButtons.forEach((button) => {
            button.addEventListener('click', () => {
                const index = button.getAttribute('data-index');
                answer(index); 
            });
        });
        document.getElementById('nextButton').addEventListener('click', () => {
            if (currentIndex < data.canvas2.length - 1) {
                currentIndex++;
                renderAnswers();
            } else {
                currentCanvas = 3;
                renderCanvas();
            }
        });
        document.getElementById('backButton').addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                renderAnswers(); 
            }
        });
        for (let i = 0; i < data.canvas2.length; i++) {
            userData.details.answers.push({question: '', answer: []});
        }
    };

    const renderCanvas = () => {
        const close = data.theme.theme === 'dark-theme' ? imgs.close2 : imgs.close;
        quiz.innerHTML = `
<div>
<img src='data:image/svg+xml;base64,${close}' alt='#' id='CloseQuiz'>
<div id='canvas' class='${data.theme.button_style}'>
</div>
</div>
        `;            
        const closeQuiz = document.querySelector('#CloseQuiz');
        const canvas = document.querySelector('#canvas');
        const backgroundColor = data.theme.background_color;
        const textColor = data.theme.text_color;
        const buttonColor = data.theme.button_color;
        const buttonTextColor = data.theme.button_text_color;

        buttonQuiz.addEventListener('click', () => {
            quiz.style.display = 'block'; 
            quiz.classList.add(data.theme.theme + '-theme');
            STATUS(12);
        });

        closeQuiz.addEventListener('click', () => {
            quiz.style.display = 'none'; 
        }); 
        if (data.canvas1.is_active && currentCanvas === 1) {
            canvas.innerHTML = ``;
            const logoStyle = data.canvas1.logo ? `background: url(${data.canvas1.logo});` : 'background-color: rgba(66, 87, 102, 0.52);';
            const alignClass = data.canvas1.aling;
            const canvasClass = alignClass === 'canvas-center' ? 'canvas-center' : 'canvas1 ' + alignClass;
            if (data.theme.theme === 'user') {
                canvas.innerHTML = `
<div class='${canvasClass}' style='background-color: ${backgroundColor};'>
${data.canvas1.video ? `
<video loop autoPlay muted class='img'>
    <source src='${data.canvas1.video}' type='video/mp4' />
    Ваш браузер не поддерживает видео.
</video>
` : `
<div class='img' style='background: url(${data.canvas1.img});'></div>
`}
<div class='right'>
<div class='logo'>
    <button style='${logoStyle}'></button>
    <p style='color: ${textColor};'>${data.canvas1.description}</p>                        
</div>
<h1 style='color: ${textColor};'>${data.canvas1.title}</h1>
<h3 style='color: ${textColor};'>${data.canvas1.subtitle}</h3>
<button style='background-color: ${buttonColor}; color: ${buttonTextColor};' id='changeCanvas'>
    ${data.canvas1.button}
</button>
<a href='http://qzpro.ru' style='color: ${textColor}; text-decoration-color: ${buttonColor};'>
    Создано в <span style='color: ${buttonColor};'>QZ.pro</span>
</a>
<p style='color: ${textColor};'>${data.canvas1.tel}</p>
<p style='color: ${textColor};'>${data.canvas1.name}</p>
</div>
</div>
                `;   
                document.getElementById('changeCanvas').addEventListener('click', () => {
                    STATUS(13);
                    if (currentCanvas === 2 && data.canvas2.length > 0) {
                    renderAnswers();
                    } else {
                        currentCanvas = 3;
                        renderCanvas();  
                    }
                });                 
            } else {
                canvas.innerHTML = `
<div class='${canvasClass}'>
${data.canvas1.video ? `
<video loop autoPlay muted class='img'>
    <source src='${data.canvas1.video}' type='video/mp4' />
    Ваш браузер не поддерживает видео.
</video>
` : `
<div class='img' style='background: url(${data.canvas1.img});'></div>
`}
<div class='right'>
<div class='logo'>
    <button style='${logoStyle}'></button>
    <p>${data.canvas1.description}</p>                        
</div>
<h1>${data.canvas1.title}</h1>
<h3>${data.canvas1.subtitle}</h3>
<button id='changeCanvas'>
    ${data.canvas1.button}
</button>
<a href='http://qzpro.ru'>
    Создано в <span>QZ.pro</span>
</a>
<p>${data.canvas1.tel}</p>
<p>${data.canvas1.name}</p>
</div>
</div>
                `;
                document.getElementById('changeCanvas').addEventListener('click', () => {
                    STATUS(13);
                    if (currentCanvas === 2 && data.canvas2.length > 0) {
                    renderAnswers();
                    } else {
                        currentCanvas = 3;
                        renderCanvas();  
                    }
                });
            };
            document.getElementById('changeCanvas').addEventListener('click', () => {
                STATUS(13);
                if (currentCanvas === 2 && data.canvas2.length > 0) {
                    renderAnswers();
                } else {
                    currentCanvas = 3;
                    renderCanvas();  
                }
            }); 


        }
        if (currentCanvas === 2 && data.canvas2.length > 0) {
            renderAnswers();
        }
        if (currentCanvas === 3) {
            canvas.innerHTML = ``; 
            const backgroundColor = data.theme.backgroundColor;
            const textColor = data.theme.textColor;
            const buttonColor = data.theme.buttonColor;
            const buttonTextColor = data.theme.buttonTextColor;
            if (data.theme.theme === 'user') {
                canvas.innerHTML = `
<div class='canvas3 ${data.canvas3.aling}' style='background-color: ${backgroundColor}; '>
${data.canvas3.video ? `
<video loop autoPlay muted class='img'>
    <source src='${data.canvas3.video}' type='video/mp4' />
    Ваш браузер не поддерживает видео.
</video>
` : `
<div class='img' style='background-image: url(${data.canvas3.img});'></div>
`}
<div class='right'>
<h1 style='color: ${textColor};'>${data.canvas3.title}</h1>
<h3 style='color: ${textColor};'>${data.canvas3.subtitle}</h3>
<div class='inputs'>
    ${data.canvas3.name ? `
        <div class='name'>
            <p style='color: ${textColor};'>Имя*</p>
            <input type='text' id='userName' placeholder='Иван' required/>
            <img src='data:image/svg+xml;base64,${imgs.person}' alt='#' />
        </div>
    ` : ''}
    ${data.canvas3.email ? `
        <div class='email'>
            <p style='color: ${textColor};'>Email*</p>
            <input type='text' id='userEmail' placeholder='Mail@example.com' required/>
            <img src='data:image/svg+xml;base64,${imgs.email}' alt='#' />
        </div>
    ` : ''}
    ${data.canvas3.phone ? `
        <div class='phone'>
            <p style='color: ${textColor};'>Телефон*</p>
            <input type='text' id='userTel' placeholder='+7 (900) 000-00-00' required/>
            <img src='data:image/svg+xml;base64,${imgs.phone}' alt='#' />
        </div>
    ` : ''}
</div>
<button id='sendForm' style='background-color: ${buttonColor}; color: ${buttonTextColor};'>Отправить</button>
</div>
</div>
                `;                    
            } else {
                canvas.innerHTML = `
<div class='canvas3 ${data.canvas3.aling}'>
${data.canvas3.video ? `
<video loop autoPlay muted class='img'>
    <source src='${data.canvas3.video}' type='video/mp4' />
    Ваш браузер не поддерживает видео.
</video>
` : `
<div class='img' style='background-image: url(${data.canvas3.img});'></div>
`}
<div class='right'>
<h1>${data.canvas3.title}</h1>
<h3>${data.canvas3.subtitle}</h3>
<div class='inputs'>
    ${data.canvas3.name ? `
        <div class='name'>
            <p>Имя*</p>
            <input type='text' id='userName' placeholder='Иван' required/>
            <img src='data:image/svg+xml;base64,${imgs.person}' alt='#'/>
        </div>
    ` : ''}
    ${data.canvas3.email ? `
        <div class='email'>
            <p>Email*</p>
            <input type='text' id='userEmail' placeholder='Mail@example.com' required/>
            <img src='data:image/svg+xml;base64,${imgs.email}' alt='#'/>
        </div>
    ` : ''}
    ${data.canvas3.phone ? `
        <div class='phone'>
            <p>Телефон*</p>
            <input type='text' id='userTel' placeholder='+7 (900) 000-00-00' required/>
            <img src='data:image/svg+xml;base64,${imgs.phone}' alt='#'/>
        </div>
    ` : ''}
</div>
<button id='sendForm'>Отправить</button>
</div>
</div>
                `;  
            }
            document.querySelector('#sendForm').addEventListener('click', () => {
                const currentDate = new Date();
                console.log(currentDate);
                userData.date = formatDate(currentDate);
                console.log(userData.date);
                City();
                if (data.canvas3.name) {
                    userData.name = document.querySelector('#userName').value;                           
                } else {
                    userData.name = null;
                }
                if (data.canvas3.email) {
                    userData.email = document.querySelector('#userEmail').value;
                } else {
                    userData.email = null;
                }
                if (data.canvas3.phone) {
                    userData.tel = document.querySelector('#userTel').value;                            
                } else {
                    userData.tel = null;
                }
                SENDDATA(userData);
                currentCanvas = 0;
                renderCanvas();
                quiz.style.display = 'none';
            });
            STATUS(11);
        }                
    }
    const SENDDATA = async (usrData) => {
        try {
            const response = await fetch(`${url}/api/application`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(usrData)
            });
            if (!response.ok) {
                console.error('Fetch failed with status:', response.status); 
                return;
            }
            const data = await response.json();
        } catch (error) {       
            console.error('Error occurred:', error); 
        }
    };
    const QUIZ = async () => { 
        try {
            const response = await fetch(`${url}/api/quiz/${quiz_id}`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                console.error('Fetch failed with status:', response.status); 
                return;
            }
            const datas = await response.json();
            data = datas.params;
            renderCanvas();    

        } catch (error) {       
            console.error('Error occurred:', error); 
        }
    };   
    const STATUS = async (id) => { 
        try {
            const response = await fetch(`${url}/api/quiz/counter`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({'quiz_id': quiz_id, 'operation_id': id})
            });
            if (!response.ok) {
                console.error('Fetch failed with status:', response.status); 
                return;
            }
            const data = await response.json();
            console.log(data)

        } catch (error) {       
            console.error('Error occurred:', error); 
        }
    };   
    QUIZ();
});