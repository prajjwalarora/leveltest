const loginForm = document.getElementById("loginForm");
const emailLogin = document.getElementById("useremailLogin");
const passwordLogin = document.getElementById("passwordLogin");
const navbarNav = document.querySelector('.navbar-nav');
const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");
const spinnerContainer = document.getElementById("spinner-container");
// const startBtn = document.getElementById("start-btn");
var startBtnDirect = document.getElementById("start-btn-direct");
var progressBtn = document.getElementById("progress-btn");
var userLoggedIn = JSON.parse(sessionStorage.getItem('user'));
const tempQnData = JSON.parse(localStorage.getItem('TempTestProgress'));
const passResetForm = document.getElementById("resetForm");
const submissionForm = document.getElementById("submissionForm");
const validateEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var saveBtn;
var saveBtn2;


//declaration of the main containers in the test

// const { url } = require("inspector")

const column1 = document.getElementById("column1")

const column2 = document.getElementById("column2")

const column3 = document.getElementById("column3")





const mailform1 = document.getElementById("intro-container") //#4a

const mailform2 = document.getElementById("submission-div") //#4b

const questionContainer = document.getElementById("question-container"); //rename to question-container //column1

const answerContainer = document.getElementById("answer-container"); //rename to answers-container //column2

const statusDisplay = document.getElementById("status-container") //column3

const resultDisplay = document.getElementById("results-container") //column3

const skillsDisplay = document.getElementById("skillsresult-container") //column2



const submitButton = document.getElementById("submit-btn"); //delete

const progressButton = document.getElementById("progress-btn"); //delete

const startButton = document.getElementById("start-btn"); //delete?

const testInstructions = document.getElementById("testinstructions") //delete



//rework these three displays

const currentStageP = document.getElementById("crnt-stage"); //column3

const currentQuestionP = document.getElementById("crnt-qstn"); //column3

const currentScoreP = document.getElementById("crnt-score"); //column3


const languageLevel = ["A1", "A2", "B1", "B2", "C1", "C2"];


var questionNumber = [0, 0, 0, 0, 0, 0];

var userScore = [0, 0, 0, 0, 0, 0];

var userErrors = [0, 0, 0, 0, 0, 0];

var aQuizProgress = 0;

var totalQuestions = 0;

var totalScore = 0;

var userSkills = [[[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]]]; //userSkills[0] = corrects, userSkills[1] = errors, userSkills[2] = sumup 


var testSkills = ["comprehension", "communication", "reading", "writing", "vocabulary", "grammar"] //these words are for refence, they allow mutiple skills per question

var userData = { name: "", email: "", phone: "", location: "", other: "" }; //user data for the contact form

var shuffledQuestions

var inputname = document.getElementById("name");

var answerList = ""

var finalComment = ""

var qnId;
// var userLoggedIn = JSON.parse(sessionStorage.getItem('user'));
// var startBtnDirect = document.getElementById("start-btn-direct");
var userAnswers = [];
var questionList = [], A1 = [], A2 = [], B1 = [], B2 = [], C1 = [], C2 = [];




if (userLoggedIn) {
    spinnerContainer.classList.remove('spinner-hide');
    addUserNav()
    startBtnDirect.innerText = "Start test"

    spinnerContainer.classList.add('spinner-hide');
    if (userLoggedIn.email)
        loginBtn.classList.add('d-none');

    if (userLoggedIn.isProfileCompleted) {

        registerBtn.classList.add('d-none');
        progressBtn.classList.remove('d-none')
    }
    // startBtn.classList.add('d-none');
    startBtnDirect.classList.remove('d-none')
    if (tempQnData) {
        initiateTest();
    }

}

function addUserNav() {
    if (userLoggedIn.isProfileCompleted) {
        const newHTML = `<i class="las la-user-circle text-white" style="font-size: 30px;"></i> <p class="text-white my-auto mr-1">${userLoggedIn ? userLoggedIn.name : "Anonymous"}  |</p> <a class="text-white" id="logout-btn" style="cursor:pointer">LogOut</a>`
        navbarNav.insertAdjacentHTML('afterend', newHTML)
        document.getElementById('logout-btn').addEventListener('click', e => {
            sessionStorage.clear();
            localStorage.clear()
            location.reload();
        })
    }
}


loginForm.addEventListener('submit', async e => {
    try {
        e.preventDefault();
        spinnerContainer.classList.remove('spinner-hide');
        if (validateEmail.test(emailLogin.value.toLowerCase())) {
            if (passwordLogin.value.length >= 8) {
                const data = await fetch("https://leveltest-backend.herokuapp.com/api/v1/auth/login", {
                    method: "POST",
                    body: JSON.stringify(
                        {
                            email: emailLogin.value.toLowerCase(),
                            password: passwordLogin.value
                        }
                    ),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
                var dataRecived = await data.json()
                if (dataRecived.status == "fail") {
                    alert(dataRecived.data.message)
                    spinnerContainer.classList.add('spinner-hide');
                } else {
                    sessionStorage.setItem('user', JSON.stringify(dataRecived.data.user))
                    alert('login Success')
                    spinnerContainer.classList.add('spinner-hide');
                    location.reload();
                    // loginBtn.classList.add('d-none');
                    // progressBtn.classList.add('d-none')
                }
            } else {
                alert("password length cannot be less then 8!");
                spinnerContainer.classList.add('spinner-hide');
            }
        }
        else {
            alert("Please provide vaild email");
            spinnerContainer.classList.add('spinner-hide');
        }

    } catch (err) {
        console.log(err);
        spinnerContainer.classList.remove('spinner-hide');
    }
})

passResetForm.addEventListener('submit', async e => {
    const resetEmail = document.getElementById("userEmailReset");
    try {
        e.preventDefault();
        spinnerContainer.classList.remove('spinner-hide');
        const data = await fetch("https://leveltest-backend.herokuapp.com/api/v1/auth/forgotPassword", {
            method: "POST",
            body: JSON.stringify(
                {
                    email: resetEmail.value,
                }
            ),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        var dataRecived = await data.json()
        if (dataRecived.status == 'fail') {
            alert("No user found with this email!");
            spinnerContainer.classList.add('spinner-hide');
        } else if (dataRecived.status == 'error') {
            spinnerContainer.classList.add('spinner-hide');
            alert(dataRecived.message)
        }
        else {
            spinnerContainer.classList.add('spinner-hide');
            $('#passReset-modal').modal('hide');
            alert(dataRecived.message)
        }
    } catch (err) {
        console.log(err);
    }
})

if (progressBtn) {
    progressBtn.addEventListener('click', async e => {
        try {
            spinnerContainer.classList.remove('spinner-hide');
            const result = await fetch(`https://leveltest-backend.herokuapp.com/api/v1/progress/${JSON.parse(sessionStorage.getItem('user')).registrationNumber}`);
            const data = await result.json();
            const mainContainer = document.getElementById("maintestcontainer");
            if (data.length > 0) {
                data.forEach((d, i) => {
                    const htmlString = `<div class="progress-card border flexcontainer col-12 justify-content-center my-3 bg-secondary p-3">
                    <span class="align-self-center h5 mr-3">${i + 1}.</span>
                    <span class="text-center mx-4 text-uppercase h5">Level<br> ${d.level}</span>
                    <span class="text-center mx-4 text-uppercase h5">Level Score<br> ${d.levelScore}</span>
                    <span class="text-center mx-4 text-uppercase h5">listening<br> ${d.listeningSkill}</span>
                    <span class="text-center mx-4 text-uppercase h5">speaking<br> ${d.speakingSkill}</span>
                    <span class="text-center mx-4 text-uppercase h5">reading<br> ${d.readingSkill}</span>
                    <span class="text-center mx-4 text-uppercase h5">writing<br> ${d.writingSkill}</span>
                    <span class="text-center mx-4 text-uppercase h5">vocabulary<br> ${d.vocabularySkill}</span>
                    <span class="text-center mx-4 text-uppercase h5">grammar<br> ${d.grammarSkill}</span>
                    </div>`;
                    mainContainer.insertAdjacentHTML('beforeend', htmlString)
                })
                progressBtn.classList.add('d-none')
                spinnerContainer.classList.add('spinner-hide');
            } else {
                spinnerContainer.classList.add('spinner-hide');
                alert("No previous results found")
            }

        } catch (err) {
            console.log(err);
            spinnerContainer.classList.add('spinner-hide');
            alert("some error occured")
        }
    })
}

// maintestcontainer
{/*  */ }





async function getQuestions() {
    const qnl = await fetch("https://leveltest-backend.herokuapp.com/api/v1/questions");
    const data = await qnl.json();
    data.forEach(d => {
        if (d.level == "A1")
            A1.push(d);
        else if (d.level == "A2")
            A2.push(d);
        else if (d.level == "B1")
            B1.push(d);
        else if (d.level == "B2")
            B2.push(d);
        else if (d.level == "C1")
            C1.push(d);
        else if (d.level == "C2")
            C2.push(d);
    })
    questionList.push(A1, A2, B1, B2, C1, C2);
    // console.log(questionList);
}


//FUNCTION LOGIC AND FLOW:

//1. requiredData() - Start Level Test button checks minimum data. --> 2.

//2. getUserInfo() - The script grabs the data then starts the test. --> 3.

//3. initiateQuestion() - Reveals test containers - testcontents + . The test starts with the first question. Calls the current question into questionDiv from questionList. Calls the questions using showAnswers(). --> 4. or 5.

//3a. getSkillCorrect() - This script sums up successful answers in skills as user gives answers

//3a. getSkillError() - This script sums up errors in skills as user gives answers

//4. showAnswers() - This function works through the answer optiosn provided in variable questionList at the question the user is working on.

//5. submitAnswer() - This button exists in order to give the user a sense of finality before submitting. This loops or ends the quiz. -->3. or 6.

//6. endQuiz() - Once there are no more questions the user is given display of results. The user has the option to fill out a request for an interaction. --> Submit contact form.

//6a. skillResults() - this function calculates and displays the results of the quiz as a report

if (startBtnDirect) {
    startBtnDirect.addEventListener('click', e => {

        if (!userLoggedIn) {

            $('#test-warning-modal').modal('show');
            $('#test-warning-modal').on('hidden.bs.modal', async function () {
                spinnerContainer.classList.remove('spinner-hide');
                localStorage.clear()
                await getRegistrationNumber();
                setTimeout(() => {
                    location.reload();
                    spinnerContainer.classList.add('spinner-hide');
                }, 500)
            });
        } else {
            spinnerContainer.classList.remove('spinner-hide');
            initiateTest();
        }

    })
}

async function initiateTest() {
    const progressCard = document.querySelectorAll(".progress-card");
    if (progressCard.length > 0) {
        progressCard.forEach(card => {
            card.remove();
        })
    }
    localStorage.setItem("testCompleted", false);
    if (tempQnData) {
        questionNumber = tempQnData.questionNumber;

        userScore = tempQnData.userScore;

        userErrors = tempQnData.userErrors;

        aQuizProgress = tempQnData.aQuizProgress;
        currentStageP.innerHTML = aQuizProgress + 1
        totalQuestions = tempQnData.totalQuestions;
        currentQuestionP.innerHTML = totalQuestions
        totalScore = tempQnData.totalScore;
        currentScoreP.innerHTML = totalScore;
        userSkills = tempQnData.userSkills;
        userAnswers = JSON.parse(localStorage.getItem('userAnswers'));
    } else {
        localStorage.removeItem('userAnswers');
    }
    //getUserInfo () //DISABLED!!! if the condition in getUserInfo>requiredData is not fulfilled, the code stops here.

    if (tempQnData) {
        const data = `<a id="clear-test-data" class="text-white ml-1" style="cursor:pointer;">| Start Again</a>`
        document.querySelector(".navbar-collapse").insertAdjacentHTML('beforeend', data)
    }

    const startAgainBtn = document.getElementById("clear-test-data");
    if (startAgainBtn)
        startAgainBtn.addEventListener('click', e => {
            localStorage.removeItem('TempTestProgress');
            localStorage.removeItem('userAnswers')
            location.reload();
        })
    //jumbotron reduction code

    document.getElementById("header-div").classList = "jumbotron-light"

    document.getElementById("header-h1").classList = ""

    document.getElementById("header-hr").classList = ""



    await getQuestions();

    shuffleQuestions() //initiation of procedure to start test

    // startButton.classList.add("hide")

    document.getElementById("usefulinfo").classList.add("hide")
    spinnerContainer.classList.add('spinner-hide');
    initiateQuestion();

}



function getUserInfo() {

    userData.name = document.getElementById("name").value

    userData.email = document.getElementById("email").value

    userData.phone = document.getElementById("phone").value

    userData.location = document.getElementById("location").value

    userData.other = document.getElementById("otherinfo").value

    //requiredData ()

}



function requiredData() {

    if (userData.name.length == 0 || userData.email.length == 0) {

        alert("Please provide a name and an email address to begin the level test.");

    } else if (userData.email.includes("@") == false || userData.email.includes(".") == false) {

        alert("Please provide a valid email address.")

    }

}



function shuffleQuestions() {

    shuffledQuestions = questionList



    var currentIndex = shuffledQuestions[0].length, temporaryValue, randomIndex;



    for (i = 0; i <= 5; i++) {//function to shuffle the questions for each level

        while (0 !== currentIndex) {



            // Pick a remaining element...

            randomIndex = Math.floor(Math.random() * currentIndex);

            currentIndex -= 1;



            // And swap it with the current element.

            temporaryValue = shuffledQuestions[i][currentIndex];

            shuffledQuestions[i][currentIndex] = shuffledQuestions[i][randomIndex];

            shuffledQuestions[i][randomIndex] = temporaryValue;

        }

    }



}







function initiateQuestion() {

    column1.classList.remove("hide") //show test containers

    column1.classList.add("mycolumn")

    column2.classList.remove("hide")

    column2.classList.add("mycolumn")

    column3.classList.remove("hide")

    column3.classList.add("mycolumn")



    //test initiation

    totalQuestions++

    currentStageP.innerHTML = aQuizProgress + 1

    currentQuestionP.innerHTML = totalQuestions

    mailform1.classList = ("hide") //hide the user data form

    questionContainer.classList.remove('hide') //show the answer + question containers + form

    questionContainer.classList.remove('hidevis')

    answerContainer.classList.remove('hide')

    answerContainer.classList.remove('hidevis')

    statusDisplay.classList.remove("hide")

    statusDisplay.classList.remove("hidevis") //show the test progress container


    const newQn = shuffledQuestions[aQuizProgress][questionNumber[aQuizProgress]];
    qnId = newQn.id
    if (newQn.isContainimage) {
        let paragraph = "";
        const divImg = `<div><img class="img-fluid" src='${newQn.url}'></div>`
        newQn.question.split('^').forEach(t => {
            paragraph += `<p>${t}</p>`
        })
        questionContainer.innerHTML = paragraph + divImg //set up the question text
    } else if (newQn.isContainVideo) {
        let paragraph = "";
        const divVideo = `<div class='video-responsive'><iframe width='560' height='315' src=${newQn.url} frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>`
        newQn.question.split('^').forEach(t => {
            paragraph += `<p>${t}</p>`
        })
        questionContainer.innerHTML = divVideo + paragraph //set up the question text

    } else if (newQn.isReadingActivity) {
        let paragraph = "";
        newQn.question.split('^').forEach(t => {
            paragraph += `<p>${t}</p>`
        })
        questionContainer.innerHTML = `<div class='readingactivity'>${paragraph}</div>` //set up the question text
    } else {
        let paragraph = "";
        newQn.question.split('^').forEach(t => {
            paragraph += `<p>${t}</p>`
        })
        questionContainer.innerHTML = paragraph //set up the question text
    }




    //testInstructions.innerHTML = "Click the correct answer. Click 'Submit' when you're ready."//place this into the answer container

    showAnswers();

}



function showAnswers() {

    answerContainer.innerHTML = ""

    ansLen = shuffledQuestions[aQuizProgress][questionNumber[aQuizProgress]].numberOfOptions; //var answerList = questionList[aQuizProgress][questionNumber[aQuizProgress]].answers

    var answerList = [] //var answerList = questionList[aQuizProgress][questionNumber[aQuizProgress]].answers.sort(() => Math.random() - .5)                
    for (var i = 1; i <= ansLen; i++) {
        answerList.push(shuffledQuestions[aQuizProgress][questionNumber[aQuizProgress]][`option${i}`]);
    }
    // console.log(answerList);
    correctAnswer = answerList[parseInt(shuffledQuestions[aQuizProgress][questionNumber[aQuizProgress]].correctOption.split(',')[0])]
    // console.log(correctAnswer);
    shuffleAnswers()

    for (i = 0; i < ansLen; i++) {

        anAnswer = answerList[i]



        var inputElement = document.createElement("input");

        inputElement.type = "radio";

        inputElement.value = anAnswer

        inputElement.name = "useranswer"

        inputElement.id = anAnswer

        inputElement.setAttribute("oninput", "submitAnswer()");



        var labelElement = document.createElement("label")

        labelElement.htmlFor = anAnswer

        labelElement.classList = "btn btn-primary btn-block"

        labelElement.innerText = anAnswer



        answerContainer.appendChild(inputElement);

        answerContainer.appendChild(labelElement);





        // if (anAnswer.correct == true) {

        //     correctAnswer = anAnswer

        // }

    }

};



function shuffleAnswers() {

    var currentIndex = answerList.length, temporaryValue, randomIndex;



    // While there remain elements to shuffle...

    while (0 !== currentIndex) {



        // Pick a remaining element...

        randomIndex = Math.floor(Math.random() * currentIndex);

        currentIndex -= 1;



        // And swap it with the current element.

        temporaryValue = answerList[currentIndex];

        answerList[currentIndex] = answerList[randomIndex];

        answerList[randomIndex] = temporaryValue;

    }

}







function submitAnswer() {

    questionNumber[aQuizProgress]++

    if (questionNumber[aQuizProgress] == questionList[aQuizProgress].length) {//the condition necessary to end the test is: there are no more questions in that level

        endTest()

    } else {

        submittedAnswer = document.testquestions.useranswer.value //submittedAnswer takes the user's submission value

        getSkill() //evaluation of the answer into correct/incorrect

        //Code for transitioning to the next level

        if (aQuizProgress < 3) {

            if (userScore[aQuizProgress] == 1 && userErrors[aQuizProgress] == 0) { //AGGRESSIVE LEVEL climbing

                aQuizProgress++

                if (aQuizProgress >= questionList.length) { //questionList.length goes up to 5, so that the user doesn't go to a level beyond that, the test ends. This is in case the user answers every question correctly.

                    endTest()

                }

            }

        };

        if ((userErrors[aQuizProgress] - userScore[aQuizProgress] >= 3) && totalQuestions < 7) { //Conditions for demotion is there are 3 more Errors than Corrects

            if (aQuizProgress >= 1) { //User must have reached at least the next level

                aQuizProgress-- //this adaptation happens in case the user gets lucky

            }

        };//End of code transitioning to the next level or failing a level





        if (userScore[aQuizProgress] - userErrors[aQuizProgress] == 3 && totalQuestions < 10) { //level climbing by 3's. This is in case the user is unlucky. The second condition is to ensure the test doesn't drag on.

            aQuizProgress++

            if (aQuizProgress >= questionList.length) {

                endTest() //this is to end the test if the user passes C2.

            }

        }

        if (totalQuestions > 16) {

            endTest() //this is to make sure that the test doesn't drag on for too long.

        }





        totalScore = userScore[0] + userScore[1] + userScore[2] + userScore[3] + userScore[4] + userScore[5];

        currentScoreP.innerHTML = totalScore;
        const data = {
            registrationNumber: userLoggedIn.registrationNumber,
            questionNumber, userScore, userErrors, aQuizProgress, totalQuestions, totalScore, userSkills
        }
        localStorage.setItem("TempTestProgress", JSON.stringify(data))
        initiateQuestion()

    }



}



function getSkill() {

    questionNumber[aQuizProgress]--

    var evaluation;
    // saveAnswer(submittedAnswer, correctAnswer);
    userAnswers.push({
        questionsId: qnId,
        correctAnswer,
        submittedAnswer,
        result: correctAnswer == submittedAnswer ? "correct" : "incorrect"
    })
    localStorage.setItem('userAnswers', JSON.stringify(userAnswers))
    if (submittedAnswer == correctAnswer) {

        evaluation = 0; userScore[aQuizProgress]++;

    } //evaulation 0 is correct

    else {
        evaluation = 1

        userErrors[aQuizProgress]++

    } //evaulatuion 1 is incorrect





    var aSkill = shuffledQuestions[aQuizProgress][questionNumber[aQuizProgress]].skill //here aSkill is given the property of the skill which the user got right

    for (i = 0; i <= testSkills.length; i++) {

        switch (true) {                //true is a test of includes of variable "aSkill" the operation "includes" 

            case aSkill.includes(testSkills[i]): //test skills are the 6 skills the test looks at. Here if they are included the function executes

                userSkills[aQuizProgress][evaluation][i]++ //in userSkills[current level][correct or incorrect][corresponding test skill]

                break;

        }

    }

    questionNumber[aQuizProgress]++

}







function endTest() {

    document.getElementById("testanswersform").classList.add("hide")

    // document.getElementById("testdata").value = userScore

    // document.getElementById("username").value = userData.name

    // document.getElementById("userphone").value = userData.phone

    // // document.getElementById("userPassword").value = userData.phone

    // // document.getElementById("userPassword").value = userData.phone

    // document.getElementById("message").value = userData.other

    // document.getElementById("userlocation").value = userData.location

    mailform2.classList.remove("hide")

    statusDisplay.classList = ""

    statusDisplay.classList.add("hide")

    skillsDisplay.classList.remove("hide")

    skillsDisplay.classList.add("skills-container")

    skillResults()

    //endTestStatment.concat(finalComment);

}



var levelScore = 0

var highAbility = 0

var lowAbility = 0
var skills = []
var userLevel = "";
var userlevelScore = 0;

function skillResults() {
    // console.log(JSON.parse(localStorage.getItem('userAnswers')));

    for (i = 0; i <= 5; i++) {

        //percentage = right / (right + wrong) * 100

        var userSkillsScore = 0

        userSkillsScore = userSkills[aQuizProgress][0][i] / (userSkills[aQuizProgress][0][i] + userSkills[aQuizProgress][1][i] + 0.1) * 20

        userSkillsScore = Math.round(userSkillsScore) * 5

        if (userSkillsScore <= 5) {

            userSkillsScore = 5

        }

        //console.log(userSkills[aQuizProgress][0][i] + "are correct ... of incorrect there are" + userSkills[aQuizProgress][1][i])

        //console.log (userSkillsScore)

        userSkills[aQuizProgress][2][i] = userSkills[aQuizProgress][0][i] / (userSkills[aQuizProgress][0][i] + userSkills[aQuizProgress][1][i] + 0.1) * 100

        document.getElementById("c" + i).style = "height: " + userSkillsScore + "%;"

        document.getElementById("c" + i).innerHTML = (userSkillsScore / 25).toFixed(1)
        skills.push((userSkillsScore / 25).toFixed(1))
        if (userSkillsScore <= 25) {

            document.getElementById("c" + i).classList.remove("bg-success")

            document.getElementById("c" + i).classList.add("bg-danger")

            lowAbility++

        } else if (userSkillsScore >= 26 && userSkillsScore <= 50) {

            document.getElementById("c" + i).classList.remove("bg-success")

            document.getElementById("c" + i).classList.add("bg-warning")

        } else if (userSkillsScore >= 51 && userSkillsScore <= 75) {

            document.getElementById("c" + i).classList.remove("bg-success")

            document.getElementById("c" + i).classList.add("bg-info")

        } else {

            highAbility++

        }



        levelScore = levelScore + userSkillsScore

    }

    // console.log(skills);

    levelScore = levelScore / 6

    levelScore = levelScore / 25

    var finallevelScore = levelScore.toFixed(1);
    userlevelScore = finallevelScore;


    document.getElementById("question-header").innerHTML = `<h3>Test Result <button class='btn btn-primary' style='width:fit-content; margin:5px;' ${userLoggedIn.isProfileCompleted ? 'id="save-result-direct"' : 'id="save-result" data-toggle=\"modal\" data-target=\"#submission-modal\"'}>Save Result</button>`



    var endTestStatment = "<p class='text-info'> Your current level is <h1><span class='badge badge-success'>" + languageLevel[aQuizProgress] + "</span></h1> <div>" + "<p>Your level score out of 4 is: <span class='badge badge-success'>" + finallevelScore + "</span></p>" + "<p><strong>You can:</strong></p>" + levelDescriptions[aQuizProgress] + "</div>"



    questionContainer.innerHTML = endTestStatment


    userLevel = languageLevel[aQuizProgress];


    skillsDisplay.classList.remove("hide")

    //finalComment = "<p>Additional comments:</p><ul>"

    //Final comments: Check if final comment is necessary. Add text, then create an ul, then add appropriate comment under li. Then append the ul to the questionbox (aka within column1)

    if (finallevelScore > 3.0 || finallevelScore < 1.0 || lowAbility > 0 || highAbility > 0) {

        var listElement = document.createElement("ul")

        var parElement = document.createElement("p")

        parElement.innerHTML = "<strong>Additional comments:</strong>"







        if (finallevelScore > 3.0) {

            var listItem = document.createElement("li")

            listItem.innerHTML = additionalComments.highscore

            listElement.appendChild(listItem)



        } else if (finallevelScore < 1.0) {

            var listItem = document.createElement("li")

            listItem.innerHTML = additionalComments.lowscore

            listElement.appendChild(listItem)

        }



        if (highAbility > 0) {

            var listItem = document.createElement("li")

            listItem.innerHTML = additionalComments.highability

            listElement.appendChild(listItem)



        }



        if (lowAbility > 0) {

            var listItem = document.createElement("li")

            listItem.innerHTML = additionalComments.lowability

            listElement.appendChild(listItem)



        }

        questionContainer.appendChild(parElement)

        questionContainer.appendChild(listElement)

    }
    document.getElementById("sub-btn-text").value = 'Register & save'
    document.querySelector(".sub-btn-head").innerHTML = 'Register & save'
    localStorage.setItem("testCompleted", true);

    saveBtn = document.getElementById('save-result-direct');
    saveBtn2 = document.getElementById('save-result')
    if (saveBtn) {
        saveBtn.addEventListener('click', e => {
            spinnerContainer.classList.remove('spinner-hide');
            saveAnswer()
            saveResult({ skills, userLevel, userlevelScore })
        })
    }



}

async function saveResult(data) {
    try {
        const url = "https://leveltest-backend.herokuapp.com/api/v1/progress"
        const result = await fetch(url, {
            method: "POST",
            body: JSON.stringify(
                {
                    userRegistrationId: JSON.parse(sessionStorage.getItem('user')).registrationNumber,
                    level: data.userLevel,
                    levelScore: data.userlevelScore,
                    listeningSkill: data.skills[0],
                    speakingSkill: data.skills[1],
                    readingSkill: data.skills[2],
                    writingSkill: data.skills[3],
                    vocabularySkill: data.skills[4],
                    grammarSkill: data.skills[5]
                }
            ),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        const dataRecived = await result.json();
        if (dataRecived.status == "success") {
            alert('Result Stored Successfully!');
            // sessionStorage.clear();
            localStorage.removeItem("TempTestProgress");
            localStorage.removeItem('userAnswers')
            // location.reload()
            spinnerContainer.classList.add('spinner-hide');
            if (saveBtn)
                saveBtn.classList.add('d-none')
            if (saveBtn2)
                saveBtn2.classList.add('d-none')

            if (startBtnDirect) {
                startBtnDirect.classList.add('d-none');
            }

        }
        else {
            spinnerContainer.classList.add('spinner-hide');
            alert("Error Occured while storing result");
        }
    } catch (err) {
        spinnerContainer.classList.add('spinner-hide');
        console.log(err);
    }
}

async function saveUserDetail(data) {
    try {
        const url = "https://leveltest-backend.herokuapp.com/api/v1/users/" + JSON.parse(sessionStorage.getItem('user')).registrationNumber;
        console.log(url);
        const result = await fetch(url, {
            method: "POST",
            body: JSON.stringify(

                {
                    name: data.name,
                    email: data.email,
                    location: data.location,
                    message: data.message,
                    password: data.password
                }
            ),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        const newData = await result.json();
        sessionStorage.setItem('user', JSON.stringify(newData.data));
        return newData;
    } catch (err) {
        console.log(err);
        alert("Error Occured");
    }
}
function saveForm() {



}



function teacherForm() {



}





function testDebugger() { //this function exists only to troubleshoot and see how the test looks at the end

    for (i = 0; i <= 5; i++) {

        userSkills[aQuizProgress][0][i] = userSkills[aQuizProgress][0][i] + 4

        userSkills[aQuizProgress][1][i] = userSkills[aQuizProgress][1][i] + 2

    }

    endTest()

}



const levelDescriptions = [

    "<ul><li>Understand and use basic everyday expressions</li><li>Introduce yourself or others</li><li>Ask and answer questions about personal details like: where you live, people you know, things you have.</li><li>Interact in a simple conversation if the other person speaks clearly and slowly</li></ul>",

    "<ul><li>Understand sentences and frequent expressions about: basic personal and family information, shopping, local area, work. </li><li>Communicate in simple and routine situations and topic of the exchange is simple and direct. </li><li>Describe your background, immediate environment and needs in simple terms.</li></ul>",

    "<ul><li>Understand the main point on topics like work, school or free time activities. </li><li>Manage in most situations when traveling. </li><li>Write a simple text on topics you know well. </li><li>Describe experiences, events, dreams, hopes, and ambitions. Give reasons or explanations for opinions and plans.</li></ul>",

    "<ul><li>Understand the main idea of complicated texts on concrete and abstract topics, including technical discussion in your field. </li><li>Speak mostly fluently and spontaneously and able to speak to fluent users of the language without many problems. </li><li>Write a clear and detailed text on many different subjects. </li><li>Explain a point of view on a topic with advantages and disadvantages of different options.</li></ul>",

    "<ul><li>Understand a wide range of demanding, longer texts, and recognize implicit meaning. </li><li>Express yourself fluently and spontaneously without much obvious searching for expressions. </li><li>Write a clear and detailed text on many different subjects. </li><li> Use language flexibly and effectively for social, academic and professional purposes. </li><li> produce clear, well-structured, detailed text on complex subjects, showing controlled use of organisational patterns, connectors and cohesive devices.</li></ul>",

    "<ul><li>Understand with ease virtually everything heard or read. </li><li> Summarise information from different spoken and written sources, reconstructing arguments and accounts in a coherent presentation.</li><li> Express yourself spontaneously, very fluently and precisely, differentiating finer shades of meaning even in more complex situations.</li></ul>",

]



const additionalComments = {

    highscore: "<span class=\"badge badge-pill badge-warning\">High average score:</span> You are very close to the next level. For some reason you didn't manage to achieve the next level. It is recommended that you discuss your result with your teacher.",

    highability: "<span class=\"badge badge-pill badge-success\">One or more abilities is very high:</span> This means that you have already perfected that ability at the current level. If it is your strong point, keep working on it, but do not forget the other abilities.",

    lowscore: "<span class=\"badge badge-pill badge-danger\">Low average score:</span> Your average score is very low. It means that you are just at the beginning of this level and it may be difficult for you study at this level. You should talk to an experienced teacher before choosing a book or a course.",

    lowability: "<span class=\"badge badge-pill badge-warning\">One or more abilities is too low:</span> It is very important that you do not ignore that ability. If you don't know how to improve, you should speak with an experienced teacher who can give you the right advice."

}


async function getRegistrationNumber() {

    try {
        // const data = await fetch("https://leveltest-backend.herokuapp.com/api/v1/auth/initialRegister")
        // var dataRecived = await data.json()
        const registrationNumber = Math.floor((Math.random() * 1000000000) + 1);
        const data = {
            isProfileCompleted: false,
            registrationNumber: registrationNumber
        };
        console.log(data);
        sessionStorage.setItem('user', JSON.stringify(data));
        // if (dataRecived.status == 'fail') {
        //     spinnerContainer.classList.add('spinner-hide');
        //     alert(dataRecived.data.message)
        // } else {

        // }
        return;
    } catch (err) {
        spinnerContainer.classList.add('spinner-hide');
        console.log(err);
    }
}




async function saveAnswer() {
    const rn = userLoggedIn.registrationNumber;
    const data = [];
    userAnswers.forEach(ua => {
        ua['userRegistrationId'] = rn
        data.push(ua)
    })
    console.log(data);
    try {
        const url = "https://leveltest-backend.herokuapp.com/api/v1/answers";
        const result = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    } catch (err) {
        console.log(err);
    }
}


submissionForm.addEventListener('submit', async e => {
    try {
        e.preventDefault();
        console.log(userLoggedIn);
        if (!userLoggedIn)
            await getRegistrationNumber();
        spinnerContainer.classList.remove('spinner-hide');
        const name = document.getElementById("usernameSubmi").value;
        const email = document.getElementById("useremailSubmi").value.toLowerCase();
        const userlocation = document.getElementById("userlocationSubmi").value;
        const password = document.getElementById("userPasswordSubmi").value;
        const passwordConfirm = document.getElementById("userPasswordConfirmSubmi").value;
        const message = document.getElementById("messageSubmi").value;
        const user = JSON.parse(sessionStorage.getItem('user'));
        if (password.length < 8) {
            alert("password is too short");
            spinnerContainer.classList.add('spinner-hide');
        }
        else {

            if (password == passwordConfirm) {

                if (!validateEmail.test(email)) {
                    alert("Please provide valid email address!");
                    spinnerContainer.classList.add('spinner-hide');
                } else {
                    const result = await saveUserDetail({ name, email, userlocation, password, message });
                    registerBtn.classList.add('d-none')
                    if (result.status == 'faill') {
                        alert(result.message);
                        spinnerContainer.classList.add('spinner-hide');
                    }
                    else {
                        if (localStorage.getItem("testCompleted")) {
                            alert(result.message);
                            saveResult({ skills, userLevel, userlevelScore })
                            saveAnswer()
                        } else {
                            alert(result.message);
                            location.reload();
                        }

                    }

                    $('#submission-modal').modal('hide');
                }
            } else {
                alert("Passsword and Confirm Password is not same!");
                spinnerContainer.classList.add('spinner-hide');
            }
        }
    } catch (err) {
        console.log(err);
        spinnerContainer.classList.add('spinner-hide');
    }

})