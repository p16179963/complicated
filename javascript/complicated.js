// MENU BAR****************************************************************
function toggle(){
	document.getElementById("sidebar").classList.toggle("active");
};

function toggleClass(x){

	if (x.className == 'fas fa-times'){
		x.className = 'fas fa-bars';
	} else {
		x.className = 'fas fa-times';
	}
};

//GREETING**************************************************************************************************

if (document.getElementById('home_title')){
  let home_title = document.getElementById('home_title');
  window.onload = ( function() {  
    getDateTime();
  })(); 

  function getDateTime() {
    var now     = new Date(); 
    var hour    = now.getHours(); 
    if(hour <= 11){  
      home_title.innerHTML = "Good Morning";
    }
    else if (hour >= 12 && hour <= 17)
      home_title.innerHTML = "Good Afternoon";
    else {
           home_title.innerHTML = "Good Evening";
    }
  };
  }

// MENU BAR****************************************************************

else if(document.getElementById('quiz_body')){
  (function() {
    const myQuestions = [
    {
      question: "Which character wears a hat?",
      answers: {
        a: "Love",
        b: "Boredom",
        c: "Jealousy"
      },
      correctAnswer: "b"
    },
    {
      question: "What date does Complicated arrive in cinemas?",
      answers: {
        a: "Christmas Day",
        b: "11th November",
        c: "10th July",
      },
      correctAnswer: "c"
    },
    {
      question: "Who's favourite colour is pink?",
      answers: {
        a: "Excited",
        b: "Embarrassed",
        c: "Love"
      },
      correctAnswer: "c"
    },
    {
      question: "Which two characters wear red?",
      answers: {
        a: "Excited and Jealousy",
        b: "Jealousy and Love",
        c: "Excited and Boredom"
      },
      correctAnswer: "a"
    },
    {
      question: "How many charactes are there?",
      answers: {
        a: "3",
        b: "5",
        c: "7"
      },
      correctAnswer: "b"
    }
    ];

    function buildQuiz() {
      const output = [];

      myQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];

        for (letter in currentQuestion.answers) {
          answers.push(
            `<label>
               <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
             </label>`
          );
        }

        output.push(
          `<div class="slide">
             <div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join("")} </div>
           </div>`
        );
      });

      quizContainer.innerHTML = output.join("");
    }

    function showResults() {
      const answerContainers = quizContainer.querySelectorAll(".answers");

      let numCorrect = 0;

      myQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer) {
          numCorrect++;

          answerContainers[questionNumber].style.color = "#21b510";
        } else {
          answerContainers[questionNumber].style.color = "#5d1193";
        }
      });

      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    function showSlide(n) {
      slides[currentSlide].classList.remove("active-slide");
      slides[n].classList.add("active-slide");
      currentSlide = n;
      
      if (currentSlide === 0) {
        previousButton.style.display = "none";
      } else {
        previousButton.style.display = "inline-block";
      }
      
      if (currentSlide === slides.length - 1) {
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
      } else {
        nextButton.style.display = "inline-block";
        submitButton.style.display = "none";
      }
    }

    function showNextSlide() {
      showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");

    buildQuiz();

    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    showSlide(0);

    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
}

//COUNTDOWN************************************************************************************
else {
  window.onload = ( function() {        
      countdown();
       })(); 

  function countdown(){
  	var now = new Date();
  	var eventDate = new Date(2019, 07, 10);

  	var currentTime = now.getTime();
  	var eventTime = eventDate.getTime();

  	var remTime = eventTime - currentTime;

  	var s = Math.floor(remTime / 1000);
  	console.log(s);
  	var m = Math.floor(s / 60);
  	var h = Math.floor(m / 60);
  	var d = Math.floor(h / 24);

  	h %= 24;
  	m %= 60;
  	s %= 60;

  	h = (h < 10) ? "0" + h : h;
  	m = (m < 10) ? "0" + m : m;
  	s = (s < 10) ? "0" + s : s;

  	document.getElementById("days").textContent = d;
  	document.getElementById("days").innerText = d;

  	document.getElementById("hours").textContent = h;
  	document.getElementById("minutes").textContent = m;
  	document.getElementById("seconds").textContent = s;

  	setTimeout(countdown, 1000);
  }
countdown();
}
//COUNTDOWN*************************************************************************************************
