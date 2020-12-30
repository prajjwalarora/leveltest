// Setting apart the questions visually

// Setting apart the questions visually

// Setting apart the questions visually

// Setting apart the questions visually

// Setting apart the questions visually

// Setting apart the questions visually

// Setting apart the questions visually

// Setting apart the questions visually

// Setting apart the questions visually





const questionList = [

    [//first set of questions aQuizProgress[0], A1 Question List

        {

            question: "How are you?",

            answers: [

                { text: 'I fine. Thank you.', correct: false },

                { text: 'I am fine. Thank you. You?', correct: false },

                { text: 'I’m fine, thank you. And you? ', correct: true },

            ],

            skill: "grammar communication"

        },

        {

            question: "What is the man’s name and where is he from? <p> <div class='video-responsive'><iframe width='560' height='315' src='https://www.youtube.com/embed/SI8ugTiocls?controls=0&amp;start=27&end=83' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div> </p>",

            answers: [

                { text: 'David. He is from London.', correct: false },

                { text: 'Craig. He is from London.', correct: false },

                { text: 'Craig. He is from Oxford.', correct: true },

                { text: 'David. He is from Oxford.', correct: false },

            ],

            skill: "communication writing"

        },

        {

            question: "Can the little girl and her grandmother buy the cake?<p> <div class='video-responsive'><iframe width='560' height='315' src='https://www.youtube.com/embed/ovj5dzMxzmc? controls=0&amp;start=50&end=83' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div></p>",

            answers: [

                { text: 'Yes, they buy the cake.', correct: false },

                { text: 'No, they don’t have money. ', correct: true },

                { text: "They can buy it, but the boy doesn't like it.", correct: false },

                { text: 'No, the girl doesn’t like the cake.', correct: false },

            ],

            skill: "comprehension vocabulary"

        },

        {

            question: "<div ><img class=\"img-fluid\" src='/leveltest/1-10jpg.jpg'></div><p>What do you see in the picture?</p>",

            answers: [

                { text: 'Train, bus, and car', correct: true },

                { text: 'Taxi, bicycle, and bus', correct: false },

                { text: 'Bus, car, and bicycle', correct: false },

                { text: 'Motorbike, train, bus, and car', correct: false },

            ],

            skill: "vocabulary"

        },

        {

            question: 'Do you drink coffee?',

            answers: [

                { text: 'Yes. I always drink coffee in the morning.', correct: true },

                { text: 'Yes. I never drink coffee.', correct: false },

                { text: 'No. I sometimes drink coffee.', correct: false },

            ],

            skill: "grammar communication"

        },

        {

            question: "<p>- Do you have any hobbies?</p><p>- Yes. I like playing sports. <p>- ___________ (Ask an appropriate question)</p>",

            answers: [

                { text: 'Do you like sports? ', correct: false },

                { text: 'Who do you like?', correct: false },

                { text: 'Who plays sports?', correct: false },

                { text: 'Which sports do you like?', correct: true },

            ],

            skill: "communication grammar"

        },

        {

            question: "<div ><img class=\"img-fluid\" scr=/leveltest/1-7jpg.jpg></div> <p>- Excuse me, _______________ ?</p><p> - Oh. These flowers? They cost 5.99..</p>",

            answers: [

                { text: 'How cost this?', correct: false },

                { text: 'How much does this cost?', correct: true },

                { text: 'How many cost?', correct: false },

                { text: 'How much cost it?', correct: false },

            ],

            skill: "grammar communication"

        },

        {

            question: "<div ><img class=\"img-fluid\" src='/leveltest/1-9jpeg.jpeg'></div><p>Who is in the picture?</p>",

            answers: [

                { text: 'A girl and her mother', correct: false },

                { text: 'A father and a child', correct: false },

                { text: 'Two young women', correct: true },

                { text: 'Two young girls', correct: false },

            ],

            skill: "vocabulary"

        },

        {

            question: "My brother is a journalist. He works for the ______.",

            answers: [

                { text: 'Bank', correct: false },

                { text: 'Company', correct: false },

                { text: 'University', correct: false },

                { text: 'Newspaper', correct: true },

            ],

            skill: "vocabulary"

        },

        {

            question: "<div class='readingactivity'><b>Please give us your personal information and we will call you tomorrow:</b><p>First name: John</p><p>Surname: Wilson</p><p>Birthday: March 21, 1990</p><p>______________ : +34 565 29 24 28</p><p><em>Thank you! We will call you tomorrow!</em></p></div>",

            answers: [

                { text: 'Email', correct: false },

                { text: 'Telephone Number', correct: true },

                { text: 'Passport number', correct: false },

                { text: 'Family number', correct: false },

            ],

            skill: "reading writing"

        },

        {

            question: "<div><img class=\"img-fluid\" src='/leveltest/1-12jpg.jpg'></div><p>Can you enter the shop?</p>",

            answers: [

                { text: 'No, you can come tomorrow.', correct: false },

                { text: 'It is closed on Sundays.', correct: false },

                { text: 'No, it is closed now.', correct: true },

                { text: 'Yes, you can go in.', correct: false },

            ],

            skill: "reading"

        },

    ],

    [ //second set of questions aQuizProgress[1], A2 questions

        {

            question: "<p>Customer: Excuse me, waiter. I asked for a tuna salad, but this is egg.</p><p>Waiter: </p>",

            answers: [

                { text: 'Ok, I will get you the bill.', correct: false },

                { text: 'Yes, that’s right.', correct: false },

                { text: 'I’m sorry. I will change that right away. ', correct: true },

                { text: 'Please wait a moment.', correct: false },

            ],

            skill: "communication reading"

        },

        {

            question: '<p>What are you doing?</p> <p>I ______ (send) emails to clients.</p>',

            answers: [

                { text: 'am sending ', correct: true },

                { text: "don't send", correct: false },

                { text: 'send', correct: false },

                { text: 'will send', correct: false },

            ],

            skill: "grammar communication"

        },

        {

            question: '<p>Paris is so beautiful. ______</p>',

            answers: [

                { text: 'Do you know it?', correct: false },

                { text: 'Were you there before?', correct: false },

                { text: 'Have you ever been there?', correct: true },

            ],

            skill: "grammar communication"

        },

        {

            question: 'We _____ the shopping twice a week.',

            answers: [

                { text: 'do', correct: true },

                { text: 'make', correct: false },

                { text: 'buy', correct: false },

            ],

            skill: "vocabulary reading"

        },

        {

            question: 'Which animal lives in the desert?',

            answers: [

                { text: 'Cow', correct: false },

                { text: 'Camel', correct: true },

                { text: 'Dog', correct: false },

                { text: 'Lion', correct: false },

            ],

            skill: "vocabulary reading"

        },

        {

            question: 'You should _______ smoking. It\'s not good for your health',

            answers: [

                { text: 'give up', correct: true },

                { text: 'giving away', correct: true },

                { text: 'go away', correct: false },

                { text: 'break down', correct: false },

                { text: 'stop out', correct: false },

                { text: 'breaking down', correct: false },

            ],

            skill: "vocabulary grammar"

        },

        {

            question: "Who is Martin going to the Opera with?<p><div class='video-responsive'><iframe width='560' height='315' src='https://www.youtube.com/embed/EMJ3iA1-5EE?controls=0&amp;start=6' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div></p>",

            answers: [

                { text: 'Friends', correct: false },

                { text: 'Alone', correct: false },

                { text: 'His wife', correct: false },

                { text: 'A colleague and her husband', correct: true },

            ],

            skill: "comprehension vocabulary"

        },

        {

            question: "<div ><img class=\"img-fluid\" class=\"img-fluid\" src='leveltest/2-8jpg.jpg'></div><p>- ______________</p><p>- Oh, yes, Steak Tartare is delicious. It is a meat dish made from raw ground beef. It is not cooked.</p>",

            answers: [

                { text: 'How much does this cost?', correct: false },

                { text: 'What is Steak Tartare?', correct: true },

                { text: 'Is this dish delicious?', correct: false },

            ],

            skill: "communication reading"

        },

        {

            question: "<div class='readingactivity'><p>Hey Mom, <p>We are fine here in New York. It is a beautiful city. John really liked the Art Museum but I had a great time at central park.</p><p>When John starts his job and we get our apartment you can come visit us.</p><p>_____________.</p><p>Love Emily</p></div>",

            answers: [

                { text: 'Kind regards', correct: false },

                { text: 'Wish you were here ', correct: true },

                { text: 'You are welcome', correct: false },

                { text: 'You will enjoy it', correct: false },

            ],

            skill: "writing reading"

        },

        {

            question: "<div class='readingactivity'><h3>Tips for learning languages</h3><p> Do group activities. People use language to communicate with other people. A good language learner always looks for opportunities to talk with other students.</p></div><p>What does this tip recommend? </p>",

            answers: [

                { text: 'Making groups', correct: false },

                { text: 'Doing activities', correct: false },

                { text: 'Learning by talking to other people ', correct: true },

                { text: 'Not learning alone', correct: false },

            ],

            skill: "reading vocabulary"

        },

        {

            question: "<div class='readingactivity'><p>________________ </p><p>I am writing you in response to the job advertisement on your company’s website. I have 5 years of sales experience.</p><p>…</p></div>",

            answers: [

                { text: 'Dear Mr. Yumaki,', correct: true },

                { text: 'Respected Mr. Yumaki,', correct: false },

                { text: 'Hello Mr. Yumaki,', correct: false },

            ],

            skill: "writing reading"

        },

        {

            question: "<div class='readingactivity'>I especially use LINE when making plans with my friends because I can send messages easily. We use LINE to send messages, photos and locations so it's easy for us to make plans. On the other hand, we should be careful when using LINE. Sometimes, we can misunderstand the meaning of the other person because we cannot see the other person's facial expression.</div>",

            answers: [

                { text: 'It is a good idea to use LINE to make plans.', correct: false },

                { text: 'We have to be careful when using LINE.', correct: false },

                { text: 'You can’t see the other person when you use LINE.', correct: false },

                { text: 'LINE is useful but it can sometimes lead to misunderstandings.', correct: true },

            ],

            skill: "reading vocabulary"

        },

    ],

    [ //third set of questions aQuizProgress[2], B1 questions

        {

            question: "<p>- What is your plan for today?</p><p>- After class, I _______ (go) to town to buy a present</p>",

            answers: [

                { text: 'will go', correct: false },

                { text: 'go', correct: false },

                { text: 'am going', correct: true },

                { text: 'have gone', correct: false },

            ],

            skill: "grammar reading"

        },

        {

            question: "Where are the people in this video? <p><div class='video-responsive'><iframe width='560' height='315' src='https://www.youtube.com/embed/C0NVo07t9UI?controls=0&amp;start=70&end=148' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div></p>",

            answers: [

                { text: 'They are in a jungle.', correct: false },

                { text: 'They are in a game.', correct: true },

                { text: 'They are on a hike.', correct: false },

                { text: 'They are on vacation.', correct: false },

            ],

            skill: "comprehension vocabulary"

        },

        {

            question: 'I am going to university now but it’s in a different town to where my parents live. I don’t have a lot of money so I live with ________. There’s four of us and we have become good friends.',

            answers: [

                { text: 'Colleagues', correct: false },

                { text: 'Other people', correct: false },

                { text: 'Students', correct: false },

                { text: 'Flatmates', correct: true },

            ],

            skill: "vocabulary reading"

        },

        {

            question: "I’m 1 meter 80 and my brother is 1 meter 85.So, ... <i>(choose the best answer)</i>",

            answers: [

                { text: 'I’m not so tall as my brother.', correct: false },

                { text: "I’m not taller than my brother.", correct: false },

                { text: 'I’m not as tall as my brother.', correct: true },

                { text: 'I’m taller than my brother.', correct: false },

            ],

            skill: "grammar reading"

        },



        {

            question: "I think we may have confused our briefcases. This one is _____ and this one is _______.",

            answers: [

                { text: 'mine ... yours', correct: true },

                { text: 'me ... you', correct: false },

                { text: 'for me ... for you', correct: false },

                { text: 'my ... your', correct: false },

            ],

            skill: "grammar communication"

        },

        {

            question: "</p><div class='readingactivity'> <p>Dear James,</p><br><p>As you know, we have been working on the new perfume that we are launching in April and we are unsure about some of the packaging details. We have seen some of your creative work in the sales department and we think you have a very good eye for detail.</p><br><p>Do you have some time before close of business this Friday to sit down with us and talk through some of our designs? We would truly appreciate your advice on this. It shouldn't take longer than two hours of your time and we would be happy to clear it with Patricia, your department head, if necessary.</p><br><p>Best regards,</p><p>Sarah Ford</p><p><em>Head of Department</em></p></div><p> What is the purpose of the <em>second</em> paragraph?</p>",

            answers: [

                { text: "Ask for help", correct: false },

                { text: "Ask for more information", correct: false },

                { text: "An invitation", correct: true },

                { text: "A job offer", correct: false },

            ],

            skill: "reading writing"

        },

        {

            question: "<div class='readingactivity'> <p>Dear James,</p><br><p>As you know, we have been working on the new perfume that we are launching in April and we are unsure about some of the packaging details. We have seen some of your creative work in the sales department and we think you have a very good eye for detail.</p><br><p>Do you have some time before close of business this Friday to sit down with us and talk through some of our designs? We would truly appreciate your advice on this. It shouldn't take longer than two hours of your time and we would be happy to clear it with Patricia, your department head, if necessary.</p><br><p>Best regards,</p><p>Sarah Ford</p><p><em>Head of Department</em></p></div><p> What is the purpose of the <em>first</em> paragraph?</p>",

            answers: [

                { text: 'Introduction', correct: false },

                { text: 'Give a reason for writing', correct: true },

                { text: 'Explain the problem', correct: false },

                { text: 'Give a complement', correct: false },

            ],

            skill: "reading writing"

        },

        {

            question: "<div class='readingactivity'> <p>Dear Mr. Smith,</p><br><p>I hope this email finds you well. </p><br><p>We have been reviewing your customer file and we have discovered that your contract has not been signed.</p><br><p>As part of our commitment to serving you better it is required that all customers sign a contract when renting our storage spaces so that they understand their rights and obligations.</p><br><p>Please find the document attached and send it to us as soon as you are able.</p><br><p>Sincerely,</p><br><p>Jenn Magden, </p><br><p>Customer Care department</p></div><p><em>What will be the first line in your response?</em></p>",

            answers: [

                { text: 'Thank you very much for this information.', correct: false },

                { text: 'I hope this email finds you well.', correct: false },

                { text: 'I don’t want to sign the contract.', correct: false },

                { text: 'Thank you for getting in touch with me about this issue.', correct: true },

            ],

            skill: "writing reading"

        },

        {

            question: "Choose the word that does not belong.",

            answers: [

                { text: 'Frustration', correct: true },

                { text: 'Drama', correct: false },

                { text: 'Science fiction', correct: false },

                { text: 'Comedy', correct: false },

            ],

            skill: "vocabulary"

        },

        {

            question: "<div class='video-responsive'><iframe width='560' height='315' src='https://www.youtube-nocookie.com/embed/QmPLGt5rd_k?controls=0&amp;start=9 end=33' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div><p>What can ex-President Barack Obama do if he gets hungry in the middle of the night?</p>",

            answers: [

                { text: 'He can call someone', correct: false },

                { text: 'He can order pizza', correct: false },

                { text: 'He can make himself a sandwich', correct: true },

                { text: 'He can get food from the refrigerator ', correct: false },

            ],

            skill: "comprehension communication"

        },

    ],

    [ //fourth set of questions aQuizProgress[3], B2 questions

        {

            question: "<p>- 'Hello? Police?'</p> <p>- 'Yes, this is the police.'</p> <p>- 'I believe my husband is missing'</p> <p>- 'How long _______?'</p>",

            answers: [

                { text: 'has he been missing', correct: true },

                { text: 'had he been missing', correct: false },

                { text: 'is he missing', correct: false },

                { text: 'has he been missing for', correct: false },

            ],

            skill: "grammar communication"

        },

        {

            question: "<p> - ________ </p> <p>- I generally like pop music but I like to hear indie bands once in a while</p>",

            answers: [

                { text: "Which music suits you best?", correct: false },

                { text: "Do you like pop music?", correct: false },

                { text: "What kind of music do you listen to?", correct: true },

                { text: "What music do you like?", correct: false },



            ],

            skill: "communication grammar"

        },

        {

            question: "<div class='video-responsive'><iframe width='560' height='315' src='https://www.youtube.com/embed/W-46rcOv9fc?controls=0&amp;start=023&end=034' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div> <p>Rachel receives her first paycheck. What seems to be the problem?</p>",

            answers: [

                { text: "There is a mistake.", correct: false },

                { text: "Her salary is too low.", correct: true },

                { text: "She is upset because her name is not spelled correctly", correct: false },

                { text: "She didn’t work very hard.", correct: false },

            ],

            skill: "comprehension vocabulary"

        },

        {

            question: "<div class='video-responsive'><iframe width='560' height='315' src='https://www.youtube.com/embed/Px7bjMyPA30?controls=0&amp;start=484&end=538' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div><p>What percentage of the population in Europe dislike their job?</p>",

            answers: [

                { text: "75 percent", correct: false },

                { text: "74 percentage", correct: false },

                { text: "It is a very similar number to the U.S.", correct: true },

                { text: "74 percent", correct: false },

            ],

            skill: "comprehension grammar"

        },

        {

            question: "I’m quite upset because I didn’t get a good mark on the test.",

            answers: [

                { text: "If I studied I would get a good mark.", correct: false },

                { text: "I had studied I would have a good mark.", correct: false },

                { text: "If I study I will get a good mark.", correct: false },

                { text: "If I had studied I would have gotten a good mark.", correct: true },



            ],

            skill: "grammar reading"

        },

        {

            question: "<p><i>You are at a shop and you see a shop assistant.</i></p><p>- Excuse me, could you tell me how much this _______?</p>",

            answers: [

                { text: "cost", correct: false },

                { text: "costs", correct: true },

                { text: "does cost", correct: false },

                { text: "will cost to buy", correct: false },



            ],

            skill: "grammar communication"

        },

        {

            question: "I’m having a hard time deciding which apartment to choose. The bigger one means we’ll have more space when my husband and I decide to have kids. But there’s no rush, ________, I’m not even pregnant so maybe it’s too early to get such a big place.",

            answers: [

                { text: "I mean", correct: true },

                { text: "you know", correct: false },

                { text: "well", correct: false },

                { text: "you can understand", correct: false },



            ],

            skill: "communication grammar"

        },

        {

            question: "We should really consider this new opportunity for the company. __________, if it’s not the right time to be making an investment, we should definitely say no.",

            answers: [

                { text: "By the way", correct: false },

                { text: "As usual", correct: false },

                { text: "So", correct: false },

                { text: "On the other hand", correct: true },

            ],

            skill: "writing reading"

        },

        {

            question: "<div class='readingactivity'><p>Buzz Aldrin was born in New Jersey in 1930. Educated at West Point, he flew Sabre jets in 66 combat missions during the Korean war. He then went on to gain a doctorate in astronautics and joined NASA in 1963, eventually flying with Neil Armstrong on Apolo 11 in 1969. Here are some questions he answered at an interview:</p><p><b>When were you happiest?</b><p>I guess I was happy when I was a young kid and didn't have worries about whether I had to please people. I just went through life facing each little challenge that came along.</p><p><b>What would your super power be?</b></p><p>I believe there are human powers and there is a higher power. I don't know what a super power is.</p><p><b>What makes you depressed?</b><p>Being overwhelmed and not knowing exactly what to do next.</p><p><b>What is the worst job you've done?</b></p><p>When I was young, at summer camp, I used to shovel out the stables where the horses were.</p><p><b>What do you consider your greatest achievement?</b></p><p>I used my ingenuity to open opportunities that allowed me to be in the right place at the right time.</p></div>",

            answers: [

                { text: " Buzz Aldrin was very young for an astronaut.", correct: false },

                { text: " Buzz Aldrin met Neil Armstrong at one point.", correct: false },

                { text: " Buzz Aldrin was a pilot before he became an astronaut. ", correct: true },

                { text: " Buzz Aldrin grew up in West Point.", correct: false },

            ],

            skill: "reading vocabulary"

        },

        {

            question: "<div class='readingactivity'><p>Buzz Aldrin was born in New Jersey in 1930. Educated at West Point, he flew Sabre jets in 66 combat missions during the Korean war. He then went on to gain a doctorate in astronautics and joined NASA in 1963, eventually flying with Neil Armstrong on Apolo 11 in 1969. Here are some questions he answered at an interview:</p><p><b>When were you happiest?</b><p>I guess I was happy when I was a young kid and didn't have worries about whether I had to please people. I just went through life facing each little challenge that came along.</p><p><b>What would your super power be?</b></p><p>I believe there are human powers and there is a higher power. I don't know what a super power is.</p><p><b>What makes you depressed?</b><p>Being overwhelmed and not knowing exactly what to do next.</p><p><b>What is the worst job you've done?</b></p><p>When I was young, at summer camp, I used to shovel out the stables where the horses were.</p><p><b>What do you consider your greatest achievement?</b></p><p>I used my ingenuity to open opportunities that allowed me to be in the right place at the right time.</p></div>",

            answers: [

                { text: "Buzz Aldrin remembers being happiest before he became an adult.", correct: true },

                { text: "Buzz Aldrin thinks that humans are powerful.", correct: false },

                { text: "Buzz Aldrin once worked with horses.", correct: true },

                { text: "Buzz Aldrin’s greatest achievement was gaining a doctorate.", correct: false },



            ],

            skill: "reading vocabulary"

        },

        {

            question: "We should really consider this new opportunity for the company. __________, if it’s not the right time to be making an investment, we should definitely say no.",

            answers: [

                { text: "By the way", correct: false },

                { text: "As usual", correct: false },

                { text: "So", correct: false },

                { text: "On the other hand", correct: true },

            ],

            skill: "writing grammar"

        },

        {

            question: "<div class = ”writingactivity”><b>The Science Museum – Technorama</b><p>____________</p> <p>Technorama is a technical Centre in Winterthur, Switzerland. The motto of this center is: \"Nothing will happen, unless you make it happen.\" In this museum you can touch almost anything. </p><p>____________</p><p> You explore technical phenomena with the five senses. Lots of technical experiments can be done by visitors themselves. This would also make it very interesting for children and teenagers. Today, the museum has 500 natural science experiments. When I was there for the first time, I learned a lot of interesting new facts about Physics. It is wonderful how you can learn by playing with experiments. Sometimes, there are also demonstrations which are very impressive. </p><p>____________</p><p>The museum is big and comfortable with stairs and also an elevator. You can easily spend your whole afternoon on an excursion at Technorama, which means you might need a place to take a break. But do not worry. When you get hungry, there is a restaurant where you can eat and drink something. </p><p>____________</p> <p>I would highly recommend this science museum to anyone interested in physics, chemistry and mathematics.</p></div><p>Choose appropriate titles for the sections of this report written by a student in the correct order </p>",

            answers: [

                { text: "Introduction, Installations, Facilities, Conclusion", correct: false },

                { text: "Introduction, Experiments, Restaurant, My opinion", correct: false },

                { text: "About the Museum, Installations, Breaks, Summary", correct: false },

                { text: "Introducing, Exhibitions,  Installations, To Conclude", correct: true },

            ],

            skill: "vocabulary writing"

        },

    ],

    [ //fifth set of questions aQuizProgress[4], C1 questions

        {

            question: "As we can see from the facts outlined above, __________ (act) in that precise moment, we would never have managed to achieve the results our financial goals for the last quarter.",

            answers: [

                { text: "if we did not act", correct: false },

                { text: "when we don’t act", correct: false },

                { text: "had we not acted", correct: true },

                { text: "acting", correct: false },

                { text: "not having acted", correct: false },

            ],

            skill: "grammar writing"

        },

        {

            question: " <p>- You’re going to do the repairs in the bathroom yourself!? Are you crazy!? Do you ___________ know anything about bathrooms?</p>",

            answers: [

                { text: "even", correct: true },

                { text: "want to", correct: false },

                { text: "already", correct: false },

                { text: "yet", correct: false },



            ],

            skill: "vocabulary communication"

        },

        {

            question: "___________ improve the health and well-being of our employees we have decided to launch a brand new after-work opportunity for our employees. They will be able to attend relaxation workshops during working hours after lunch once a week. The workshops will include breathing exercises, meditation and peer-coaching.",

            answers: [

                { text: "So that we can", correct: false },

                { text: "In order to", correct: true },

                { text: "However, considering to", correct: false },

                { text: "Actually, when we", correct: false },

                { text: "If we want to,", correct: false },

            ],

            skill: "writing grammar"

        },

        {

            question: "<p><b>200 dropped wallets- the 20 MOST and LEAST HONEST cities</b></p><p>Why did the speaker go through so much trouble to add different skills of cards and money to the wallets?</p> <div class='video-responsive'><iframe width='560' height='315' src= https://www.youtube.com/embed/jnL7sJYblGY?controls=0&amp;start=0&end89=' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>",

            answers: [

                { text: "Because if the wallets had a lot of money people would not want to return them.", correct: false },

                { text: "The wallets had to have sentimental value so that people felt emotion.", correct: false },

                { text: "To eliminate any possible reason why someone would not want to return the wallet.", correct: true },

                { text: "He wanted to see if he could trust people not to steal the money.", correct: false },



            ],

            skill: "comprehension vocabulary"

        },

        {

            question: "<p><b>200 dropped wallets- the 20 MOST and LEAST HONEST cities</b></p><p>Who participated in this experiment?</p> <div class='video-responsive'><iframe width='560' height='315' src= https://www.youtube.com/embed/jnL7sJYblGY?controls=0&amp;start=0&end89=' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>",

            answers: [

                { text: "Random people from the internet.", correct: false },

                { text: "Friends and family.", correct: false },

                { text: "People he asked on Instagram.", correct: false },

                { text: "Fans of the YouTube channel.", correct: true },



            ],

            skill: "comprehension vocabulary"

        },

        {

            question: "<p>- …As I was saying with regard to this new project, we’ll be needing everyone to work extra hours because we’re really trying to outperform the other sales teams this time and…</p><p>- _______________________ we’ve been trying to get money to address the issues that have been keeping everyone’s morale low, like the broken air conditioning system, dirty toilets and uncomfortable desks.</p>",

            answers: [

                { text: "I’m sure you won’t mind if I interrupt, but…", correct: false },

                { text: "How can you expect us to perform when…", correct: false },

                { text: "Excuse me for interrupting, we may want to consider an alternative strategy as…", correct: false },

                { text: "I see, now I want everyone to think about that…", correct: true },

            ],

            skill: "communication vocabulary"

        },

        {

            question: "I’m having a hard time deciding which apartment to choose. The bigger one means we’ll have more space when my husband and I decide to have kids. But there’s no rush, ________, I’m not even pregnant so maybe it’s too early to get such a big place.",

            answers: [

                { text: "I mean", correct: true },

                { text: "you know", correct: false },

                { text: "well", correct: false },

                { text: "you can understand", correct: false },

            ],

            skill: "communication grammar"

        },

        {

            question: "</p>It was almost closing time, but the shop assistant let us into the shop.</p><p><b>ABOUT</p><p>Choose another way to phrase this sentence:</p>",

            answers: [

                { text: "It was about closing time when the shop assistant let us into the shop.", correct: false },

                { text: "We were allowed about the shop even though the shop was closing.", correct: false },

                { text: "The shop was about to close but the shop assistant let us in. ", correct: true },

                { text: "The shop was about closing but the shop assistant let us in.", correct: false },

            ],

            skill: "grammar reading"

        },

        {

            question: "</p>When we told her that Craig was seen on what looked like a date with Lucy, Emily reacted as if she was completely _____________ to the news. But we all knew that deep down she was really hurt.</p><p><em>Fill in the blank space</em></p>",

            answers: [

                { text: "different", correct: false },

                { text: "undifferent", correct: false },

                { text: "differing", correct: false },

                { text: "indifferent", correct: true },



            ],

            skill: "vocabulary reading"

        },

        {

            question: "<div class=\"readingactivity\"><p><br>Eliminate coffee completely for 1 month to get the most out of coffee</b></p><p>Yes, you heard me. And yes, it will be the longest 1 month in your life, especially the first 2 weeks. For someone that consumes (only) one cup of double shot flat white or cappuccino on a daily basis, I struggled the first week and begged, negotiated and even tried to bargain for the right to have a cup of coffee. Like an addict, I didn't realize how dependent I was on coffee then.</p><p>All in all, I started to replace green tea for my daily warm drink and started to give up fighting about it. As much as I hate to admit it, it is partly psychological. I never needed coffee to do work, wake up or just get going - I'm just dependent on it to get things moving as it became a habit.</p></div><p>Why does the author recommend taking on this challenge?</p>",

            answers: [

                { text: "She wants the reader to realize that he/she doesn’t really need coffee, and that they only drink it out of habit.", correct: true },

                { text: "She thinks that giving up coffee for month will help the reader quit drinking coffee.", correct: false },

                { text: " She wants the reader to understand how difficult it is to give up coffee and to be impressed with the fact that she did it.", correct: false },

                { text: " She wants the reader to give up coffee for 1 month.", correct: false },

            ],

            skill: "reading vocabulary"

        },

    ],

    [ //fifth set of questions aQuizProgress[5], C2 questions !!!!! THESE ARE NOT COMPLETE!!!

        {

            question: "As we can see from the facts outlined above, __________ (act) in that precise moment, we would never have managed to achieve the results our financial goals for the last quarter.",

            answers: [

                { text: "if we did not act", correct: false },

                { text: "when we don’t act", correct: false },

                { text: "had we not acted", correct: true },

                { text: "acting", correct: false },

                { text: "not having acted", correct: false },

            ],

            skill: "grammar"

        },

        {

            question: " <p>- You’re going to do the repairs in the bathroom yourself!? Are you crazy!? Do you ___________ know anything about bathrooms?</p>",

            answers: [

                { text: "even", correct: true },

                { text: "want to", correct: false },

                { text: "already", correct: false },

                { text: "yet", correct: false },



            ],

            skill: "vocabulary"

        }

    ]

]