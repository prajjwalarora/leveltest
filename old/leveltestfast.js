





// //declaration of the main containers in the test

// // const { url } = require("inspector")

// const column1 = document.getElementById("column1")

// const column2 = document.getElementById("column2")

// const column3 = document.getElementById("column3")





// const mailform1 = document.getElementById("intro-container") //#4a

// const mailform2 = document.getElementById("submission-div") //#4b

// const questionContainer = document.getElementById("question-container"); //rename to question-container //column1

// const answerContainer = document.getElementById("answer-container"); //rename to answers-container //column2

// const statusDisplay = document.getElementById("status-container") //column3

// const resultDisplay = document.getElementById("results-container") //column3

// const skillsDisplay = document.getElementById("skillsresult-container") //column2



// const submitButton = document.getElementById("submit-btn"); //delete

// const progressButton = document.getElementById("progress-btn"); //delete

// const startButton = document.getElementById("start-btn"); //delete?

// const testInstructions = document.getElementById("testinstructions") //delete



// //rework these three displays

// const currentStageP = document.getElementById("crnt-stage"); //column3

// const currentQuestionP = document.getElementById("crnt-qstn"); //column3

// const currentScoreP = document.getElementById("crnt-score"); //column3



// const languageLevel = ["A1", "A2", "B1", "B2", "C1", "C2"];

// var questionNumber = [0, 0, 0, 0, 0, 0];

// var userScore = [0, 0, 0, 0, 0, 0];

// var userErrors = [0, 0, 0, 0, 0, 0];

// var aQuizProgress = 0;

// var totalQuestions = 0;

// var totalScore = 0;

// var userSkills = [[[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]]]; //userSkills[0] = corrects, userSkills[1] = errors, userSkills[2] = sumup 

// var testSkills = ["comprehension", "communication", "reading", "writing", "vocabulary", "grammar"] //these words are for refence, they allow mutiple skills per question

// var userData = { name: "", email: "", phone: "", location: "", other: "" }; //user data for the contact form

// var shuffledQuestions

// var inputname = document.getElementById("name");

// var answerList = ""

// var finalComment = ""

// var userLoggedIn = JSON.parse(sessionStorage.getItem('user'));
// var startBtnDirect = document.getElementById("start-btn-direct");

// var questionList = [], A1 = [], A2 = [], B1 = [], B2 = [], C1 = [], C2 = [];


// async function getQuestions() {
//     const qnl = await fetch("http://localhost:3000/api/v1/questions");
//     const data = await qnl.json();
//     data.forEach(d => {
//         if (d.level == "A1")
//             A1.push(d);
//         else if (d.level == "A2")
//             A2.push(d);
//         else if (d.level == "B1")
//             B1.push(d);
//         else if (d.level == "B2")
//             B2.push(d);
//         else if (d.level == "C1")
//             C1.push(d);
//         else if (d.level == "C2")
//             C2.push(d);
//     })
//     questionList.push(A1, A2, B1, B2, C1, C2);
//     // console.log(questionList);
// }


// //FUNCTION LOGIC AND FLOW:

// //1. requiredData() - Start Level Test button checks minimum data. --> 2.

// //2. getUserInfo() - The script grabs the data then starts the test. --> 3.

// //3. initiateQuestion() - Reveals test containers - testcontents + . The test starts with the first question. Calls the current question into questionDiv from questionList. Calls the questions using showAnswers(). --> 4. or 5.

// //3a. getSkillCorrect() - This script sums up successful answers in skills as user gives answers

// //3a. getSkillError() - This script sums up errors in skills as user gives answers

// //4. showAnswers() - This function works through the answer optiosn provided in variable questionList at the question the user is working on.

// //5. submitAnswer() - This button exists in order to give the user a sense of finality before submitting. This loops or ends the quiz. -->3. or 6.

// //6. endQuiz() - Once there are no more questions the user is given display of results. The user has the option to fill out a request for an interaction. --> Submit contact form.

// //6a. skillResults() - this function calculates and displays the results of the quiz as a report

// if (startBtnDirect) {
//     startBtnDirect.addEventListener('click', e => {
//         initiateTest();
//     })
// }

// async function initiateTest() {
//     const progressCard = document.querySelectorAll(".progress-card");
//     if (progressCard.length > 0) {
//         progressCard.forEach(card => {
//             card.remove();
//         })
//     }
//     //getUserInfo () //DISABLED!!! if the condition in getUserInfo>requiredData is not fulfilled, the code stops here.



//     //jumbotron reduction code

//     document.getElementById("header-div").classList = "jumbotron-light"

//     document.getElementById("header-h1").classList = ""

//     document.getElementById("header-hr").classList = ""



//     await getQuestions();

//     shuffleQuestions() //initiation of procedure to start test

//     startButton.classList.add("hide")

//     document.getElementById("usefulinfo").classList.add("hide")

//     initiateQuestion();

// }



// function getUserInfo() {

//     userData.name = document.getElementById("name").value

//     userData.email = document.getElementById("email").value

//     userData.phone = document.getElementById("phone").value

//     userData.location = document.getElementById("location").value

//     userData.other = document.getElementById("otherinfo").value

//     //requiredData ()

// }



// function requiredData() {

//     if (userData.name.length == 0 || userData.email.length == 0) {

//         alert("Please provide a name and an email address to begin the level test.");

//     } else if (userData.email.includes("@") == false || userData.email.includes(".") == false) {

//         alert("Please provide a valid email address.")

//     }

// }



// function shuffleQuestions() {

//     shuffledQuestions = questionList



//     var currentIndex = shuffledQuestions[0].length, temporaryValue, randomIndex;



//     for (i = 0; i <= 5; i++) {//function to shuffle the questions for each level

//         while (0 !== currentIndex) {



//             // Pick a remaining element...

//             randomIndex = Math.floor(Math.random() * currentIndex);

//             currentIndex -= 1;



//             // And swap it with the current element.

//             temporaryValue = shuffledQuestions[i][currentIndex];

//             shuffledQuestions[i][currentIndex] = shuffledQuestions[i][randomIndex];

//             shuffledQuestions[i][randomIndex] = temporaryValue;

//         }

//     }



// }







// function initiateQuestion() {

//     column1.classList.remove("hide") //show test containers

//     column1.classList.add("mycolumn")

//     column2.classList.remove("hide")

//     column2.classList.add("mycolumn")

//     column3.classList.remove("hide")

//     column3.classList.add("mycolumn")



//     //test initiation

//     totalQuestions++

//     currentStageP.innerHTML = aQuizProgress + 1

//     currentQuestionP.innerHTML = totalQuestions

//     mailform1.classList = ("hide") //hide the user data form

//     questionContainer.classList.remove('hide') //show the answer + question containers + form

//     questionContainer.classList.remove('hidevis')

//     answerContainer.classList.remove('hide')

//     answerContainer.classList.remove('hidevis')

//     statusDisplay.classList.remove("hide")

//     statusDisplay.classList.remove("hidevis") //show the test progress container



//     questionContainer.innerHTML = shuffledQuestions[aQuizProgress][questionNumber[aQuizProgress]].question //set up the question text



//     //testInstructions.innerHTML = "Click the correct answer. Click 'Submit' when you're ready."//place this into the answer container

//     showAnswers();

// }



// function showAnswers() {

//     answerContainer.innerHTML = ""

//     ansLen = shuffledQuestions[aQuizProgress][questionNumber[aQuizProgress]].numberOfOptions; //var answerList = questionList[aQuizProgress][questionNumber[aQuizProgress]].answers

//     var answerList = [] //var answerList = questionList[aQuizProgress][questionNumber[aQuizProgress]].answers.sort(() => Math.random() - .5)                
//     for (var i = 1; i <= ansLen; i++) {
//         answerList.push(shuffledQuestions[aQuizProgress][questionNumber[aQuizProgress]][`option${i}`]);
//     }
//     // console.log(answerList);
//     correctAnswer = answerList[parseInt(shuffledQuestions[aQuizProgress][questionNumber[aQuizProgress]].correctOption.split(',')[0])]
//     // console.log(correctAnswer);
//     shuffleAnswers()

//     for (i = 0; i < ansLen; i++) {

//         anAnswer = answerList[i]



//         var inputElement = document.createElement("input");

//         inputElement.type = "radio";

//         inputElement.value = anAnswer

//         inputElement.name = "useranswer"

//         inputElement.id = anAnswer

//         inputElement.setAttribute("oninput", "submitAnswer()");



//         var labelElement = document.createElement("label")

//         labelElement.htmlFor = anAnswer

//         labelElement.classList = "btn btn-primary btn-block"

//         labelElement.innerText = anAnswer



//         answerContainer.appendChild(inputElement);

//         answerContainer.appendChild(labelElement);





//         // if (anAnswer.correct == true) {

//         //     correctAnswer = anAnswer

//         // }

//     }

// };



// function shuffleAnswers() {

//     var currentIndex = answerList.length, temporaryValue, randomIndex;



//     // While there remain elements to shuffle...

//     while (0 !== currentIndex) {



//         // Pick a remaining element...

//         randomIndex = Math.floor(Math.random() * currentIndex);

//         currentIndex -= 1;



//         // And swap it with the current element.

//         temporaryValue = answerList[currentIndex];

//         answerList[currentIndex] = answerList[randomIndex];

//         answerList[randomIndex] = temporaryValue;

//     }

// }







// function submitAnswer() {

//     questionNumber[aQuizProgress]++

//     if (questionNumber[aQuizProgress] == questionList[aQuizProgress].length) {//the condition necessary to end the test is: there are no more questions in that level

//         endTest()

//     } else {

//         submittedAnswer = document.testquestions.useranswer.value //submittedAnswer takes the user's submission value

//         getSkill() //evaluation of the answer into correct/incorrect

//         //Code for transitioning to the next level

//         if (aQuizProgress < 3) {

//             if (userScore[aQuizProgress] == 1 && userErrors[aQuizProgress] == 0) { //AGGRESSIVE LEVEL climbing

//                 aQuizProgress++

//                 if (aQuizProgress >= questionList.length) { //questionList.length goes up to 5, so that the user doesn't go to a level beyond that, the test ends. This is in case the user answers every question correctly.

//                     endTest()

//                 }

//             }

//         };

//         if ((userErrors[aQuizProgress] - userScore[aQuizProgress] >= 3) && totalQuestions < 7) { //Conditions for demotion is there are 3 more Errors than Corrects

//             if (aQuizProgress >= 1) { //User must have reached at least the next level

//                 aQuizProgress-- //this adaptation happens in case the user gets lucky

//             }

//         };//End of code transitioning to the next level or failing a level





//         if (userScore[aQuizProgress] - userErrors[aQuizProgress] == 3 && totalQuestions < 10) { //level climbing by 3's. This is in case the user is unlucky. The second condition is to ensure the test doesn't drag on.

//             aQuizProgress++

//             if (aQuizProgress >= questionList.length) {

//                 endTest() //this is to end the test if the user passes C2.

//             }

//         }

//         if (totalQuestions > 16) {

//             endTest() //this is to make sure that the test doesn't drag on for too long.

//         }





//         totalScore = userScore[0] + userScore[1] + userScore[2] + userScore[3] + userScore[4] + userScore[5];

//         currentScoreP.innerHTML = totalScore

//         initiateQuestion()

//     }



// }



// function getSkill() {

//     questionNumber[aQuizProgress]--

//     var evaluation

//     if (submittedAnswer == correctAnswer) {

//         evaluation = 0; userScore[aQuizProgress]++;

//     } //evaulation 0 is correct

//     else {
//         evaluation = 1

//         userErrors[aQuizProgress]++

//     } //evaulatuion 1 is incorrect





//     var aSkill = shuffledQuestions[aQuizProgress][questionNumber[aQuizProgress]].skill //here aSkill is given the property of the skill which the user got right

//     for (i = 0; i <= testSkills.length; i++) {

//         switch (true) {                //true is a test of includes of variable "aSkill" the operation "includes" 

//             case aSkill.includes(testSkills[i]): //test skills are the 6 skills the test looks at. Here if they are included the function executes

//                 userSkills[aQuizProgress][evaluation][i]++ //in userSkills[current level][correct or incorrect][corresponding test skill]

//                 break;

//         }

//     }

//     questionNumber[aQuizProgress]++

// }







// function endTest() {

//     document.getElementById("testanswersform").classList.add("hide")

//     document.getElementById("testdata").value = userScore

//     // document.getElementById("username").value = userData.name

//     // document.getElementById("userphone").value = userData.phone

//     // // document.getElementById("userPassword").value = userData.phone

//     // // document.getElementById("userPassword").value = userData.phone

//     // document.getElementById("message").value = userData.other

//     // document.getElementById("userlocation").value = userData.location

//     mailform2.classList.remove("hide")

//     statusDisplay.classList = ""

//     statusDisplay.classList.add("hide")

//     skillsDisplay.classList.remove("hide")

//     skillsDisplay.classList.add("skills-container")

//     skillResults()

//     //endTestStatment.concat(finalComment);

// }



// var levelScore = 0

// var highAbility = 0

// var lowAbility = 0
// var skills = []
// var userLevel = "";
// var userlevelScore = 0;

// function skillResults() {

//     for (i = 0; i <= 5; i++) {

//         //percentage = right / (right + wrong) * 100

//         var userSkillsScore = 0

//         userSkillsScore = userSkills[aQuizProgress][0][i] / (userSkills[aQuizProgress][0][i] + userSkills[aQuizProgress][1][i] + 0.1) * 20

//         userSkillsScore = Math.round(userSkillsScore) * 5

//         if (userSkillsScore <= 5) {

//             userSkillsScore = 5

//         }

//         //console.log(userSkills[aQuizProgress][0][i] + "are correct ... of incorrect there are" + userSkills[aQuizProgress][1][i])

//         //console.log (userSkillsScore)

//         userSkills[aQuizProgress][2][i] = userSkills[aQuizProgress][0][i] / (userSkills[aQuizProgress][0][i] + userSkills[aQuizProgress][1][i] + 0.1) * 100

//         document.getElementById("c" + i).style = "height: " + userSkillsScore + "%;"

//         document.getElementById("c" + i).innerHTML = (userSkillsScore / 25).toFixed(1)
//         skills.push((userSkillsScore / 25).toFixed(1))
//         if (userSkillsScore <= 25) {

//             document.getElementById("c" + i).classList.remove("bg-success")

//             document.getElementById("c" + i).classList.add("bg-danger")

//             lowAbility++

//         } else if (userSkillsScore >= 26 && userSkillsScore <= 50) {

//             document.getElementById("c" + i).classList.remove("bg-success")

//             document.getElementById("c" + i).classList.add("bg-warning")

//         } else if (userSkillsScore >= 51 && userSkillsScore <= 75) {

//             document.getElementById("c" + i).classList.remove("bg-success")

//             document.getElementById("c" + i).classList.add("bg-info")

//         } else {

//             highAbility++

//         }



//         levelScore = levelScore + userSkillsScore

//     }

//     console.log(skills);

//     levelScore = levelScore / 6

//     levelScore = levelScore / 25

//     var finallevelScore = levelScore.toFixed(1);
//     userlevelScore = finallevelScore;


//     document.getElementById("question-header").innerHTML = `<h3>Test Result <button class='btn btn-primary' style='width:fit-content; margin:5px;' ${userLoggedIn.isProfileCompleted ? 'id="save-result-direct"' : 'data-toggle=\"modal\" data-target=\"#submission-modal\"'}>Save Result</button>`



//     var endTestStatment = "<p class='text-info'> Your current level is <h1><span class='badge badge-success'>" + languageLevel[aQuizProgress] + "</span></h1> <div>" + "<p>Your level score out of 4 is: <span class='badge badge-success'>" + finallevelScore + "</span></p>" + "<p><strong>You can:</strong></p>" + levelDescriptions[aQuizProgress] + "</div>"



//     questionContainer.innerHTML = endTestStatment


//     userLevel = languageLevel[aQuizProgress];


//     skillsDisplay.classList.remove("hide")

//     //finalComment = "<p>Additional comments:</p><ul>"

//     //Final comments: Check if final comment is necessary. Add text, then create an ul, then add appropriate comment under li. Then append the ul to the questionbox (aka within column1)

//     if (finallevelScore > 3.0 || finallevelScore < 1.0 || lowAbility > 0 || highAbility > 0) {

//         var listElement = document.createElement("ul")

//         var parElement = document.createElement("p")

//         parElement.innerHTML = "<strong>Additional comments:</strong>"







//         if (finallevelScore > 3.0) {

//             var listItem = document.createElement("li")

//             listItem.innerHTML = additionalComments.highscore

//             listElement.appendChild(listItem)



//         } else if (finallevelScore < 1.0) {

//             var listItem = document.createElement("li")

//             listItem.innerHTML = additionalComments.lowscore

//             listElement.appendChild(listItem)

//         }



//         if (highAbility > 0) {

//             var listItem = document.createElement("li")

//             listItem.innerHTML = additionalComments.highability

//             listElement.appendChild(listItem)



//         }



//         if (lowAbility > 0) {

//             var listItem = document.createElement("li")

//             listItem.innerHTML = additionalComments.lowability

//             listElement.appendChild(listItem)



//         }

//         questionContainer.appendChild(parElement)

//         questionContainer.appendChild(listElement)

//     }

//     document.getElementById('save-result-direct').addEventListener('click', e => {
//         saveResult({ skills, userLevel, userlevelScore })
//     })

//     document.getElementById("submissionForm").addEventListener('submit', e => {
//         e.preventDefault();
//         const name = document.getElementById("usernameSubmi").value;
//         const phnNum = document.getElementById("userphoneSubmi").value;
//         const location = document.getElementById("userlocationSubmi").value;
//         const password = document.getElementById("userPasswordSubmi").value;
//         const passwordConfirm = document.getElementById("userPasswordConfirmSubmi").value;
//         const message = document.getElementById("messageSubmi").value;
//         const user = JSON.parse(sessionStorage.getItem('user'));
//         console.log(user);
//         if (password == passwordConfirm) {
//             // console.log({ name, phnNum, location, password, message });
//             // console.log({ passwordConfirm, password });
//             saveUserDetail({ name, phnNum, location, password, message });
//             saveResult({ skills, userLevel, userlevelScore })
//             $('#submission-modal').modal('hide');
//         } else {
//             alert("Passsword and Confirm Password is not same!")
//         }

//     })
// }

// async function saveResult(data) {
//     try {
//         const url = "http://localhost:3000/api/v1/progress"
//         const result = await fetch(url, {
//             method: "POST",
//             body: JSON.stringify(
//                 {
//                     userRegistrationId: JSON.parse(sessionStorage.getItem('user')).registrationNumber,
//                     level: data.userLevel,
//                     levelScore: data.userlevelScore,
//                     listeningSkill: data.skills[0],
//                     speakingSkill: data.skills[1],
//                     readingSkill: data.skills[2],
//                     writingSkill: data.skills[3],
//                     vocabularySkill: data.skills[4],
//                     grammarSkill: data.skills[5]
//                 }
//             ),
//             headers: {
//                 "Content-type": "application/json; charset=UTF-8"
//             }
//         })
//         const dataRecived = await result.json();
//         if (dataRecived.status == "success") {
//             alert('Result Stored Successfully!');
//         }
//         else {
//             alert("Error Occured while storing result")
//         }
//     } catch (err) {
//         console.log(err);
//     }
// }

// async function saveUserDetail(data) {
//     console.log(data);
//     try {
//         const url = "http://localhost:3000/api/v1/users/" + JSON.parse(sessionStorage.getItem('user')).registrationNumber;
//         console.log(url);
//         const result = await fetch(url, {
//             method: "POST",
//             body: JSON.stringify(

//                 {
//                     name: data.name,
//                     phoneNumber: data.phnNum,
//                     location: data.location,
//                     message: data.message,
//                     password: data.password
//                 }
//             ),
//             headers: {
//                 "Content-type": "application/json; charset=UTF-8"
//             }
//         })
//     } catch (err) {
//         console.log(err);
//     }
// }
// function saveForm() {



// }



// function teacherForm() {



// }





// function testDebugger() { //this function exists only to troubleshoot and see how the test looks at the end

//     for (i = 0; i <= 5; i++) {

//         userSkills[aQuizProgress][0][i] = userSkills[aQuizProgress][0][i] + 4

//         userSkills[aQuizProgress][1][i] = userSkills[aQuizProgress][1][i] + 2

//     }

//     endTest()

// }



// const levelDescriptions = [

//     "<ul><li>Understand and use basic everyday expressions</li><li>Introduce yourself or others</li><li>Ask and answer questions about personal details like: where you live, people you know, things you have.</li><li>Interact in a simple conversation if the other person speaks clearly and slowly</li></ul>",

//     "<ul><li>Understand sentences and frequent expressions about: basic personal and family information, shopping, local area, work. </li><li>Communicate in simple and routine situations and topic of the exchange is simple and direct. </li><li>Describe your background, immediate environment and needs in simple terms.</li></ul>",

//     "<ul><li>Understand the main point on topics like work, school or free time activities. </li><li>Manage in most situations when traveling. </li><li>Write a simple text on topics you know well. </li><li>Describe experiences, events, dreams, hopes, and ambitions. Give reasons or explanations for opinions and plans.</li></ul>",

//     "<ul><li>Understand the main idea of complicated texts on concrete and abstract topics, including technical discussion in your field. </li><li>Speak mostly fluently and spontaneously and able to speak to fluent users of the language without many problems. </li><li>Write a clear and detailed text on many different subjects. </li><li>Explain a point of view on a topic with advantages and disadvantages of different options.</li></ul>",

//     "<ul><li>Understand a wide range of demanding, longer texts, and recognize implicit meaning. </li><li>Express yourself fluently and spontaneously without much obvious searching for expressions. </li><li>Write a clear and detailed text on many different subjects. </li><li> Use language flexibly and effectively for social, academic and professional purposes. </li><li> produce clear, well-structured, detailed text on complex subjects, showing controlled use of organisational patterns, connectors and cohesive devices.</li></ul>",

//     "<ul><li>Understand with ease virtually everything heard or read. </li><li> Summarise information from different spoken and written sources, reconstructing arguments and accounts in a coherent presentation.</li><li> Express yourself spontaneously, very fluently and precisely, differentiating finer shades of meaning even in more complex situations.</li></ul>",

// ]



// const additionalComments = {

//     highscore: "<span class=\"badge badge-pill badge-warning\">High average score:</span> You are very close to the next level. For some reason you didn't manage to achieve the next level. It is recommended that you discuss your result with your teacher.",

//     highability: "<span class=\"badge badge-pill badge-success\">One or more abilities is very high:</span> This means that you have already perfected that ability at the current level. If it is your strong point, keep working on it, but do not forget the other abilities.",

//     lowscore: "<span class=\"badge badge-pill badge-danger\">Low average score:</span> Your average score is very low. It means that you are just at the beginning of this level and it may be difficult for you study at this level. You should talk to an experienced teacher before choosing a book or a course.",

//     lowability: "<span class=\"badge badge-pill badge-warning\">One or more abilities is too low:</span> It is very important that you do not ignore that ability. If you don't know how to improve, you should speak with an experienced teacher who can give you the right advice."

// }


// const registrationForm = document.querySelector('.registration-form');
// registrationForm.addEventListener('submit', async e => {
//     e.preventDefault();
//     $('#registration-modal').modal('hide');
//     const data = await fetch("http://localhost:3000/api/v1/auth/signup", {
//         method: "POST",
//         body: JSON.stringify(
//             {
//                 email: document.getElementById('useremailRegister').value
//             }
//         ),
//         headers: {
//             "Content-type": "application/json; charset=UTF-8"
//         }
//     })
//     var dataRecived = await data.json()
//     sessionStorage.setItem('user', JSON.stringify(dataRecived.data.user))
//     initiateTest()
// })
