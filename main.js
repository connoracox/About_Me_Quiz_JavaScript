function checkAnswers(){
    var question1= document.myQuiz.q1.value
    var question2= document.myQuiz.q2.value
    var question3= document.myQuiz.q3.value
    var question4= document.myQuiz.q4.value
    var question5= document.myQuiz.q5.value
    var question6= document.myQuiz.q6.value
    var question7= document.myQuiz.q7.value
    var question8= document.myQuiz.q8.value
    var question9= document.myQuiz.q9.value
    var question10= document.myQuiz.q10.value
    
    var count = 0

    if(question1 == "The Shawshank Redemption") {
        count++
    }
    if(question2 ==" Into Thin Air") {
        count++
    }
    if(question3 == "yellow") {
        count++
    }
    if(question4 == "climbing") {
        count++
    }
    if(question5 == "tacos") {
        count++
    }
    if(question6 == "fiddleleaf fig") {
        count++
    }
    if(question7 == "Texas") {
        count++
    }
    if(question8 == "Washington") {
        count++
    }
    if(question9 == "Florida") {
        count++
    }
    if(question10 == "Glimmer") {
        count++
    }

    document.getElementById("afterSubmit").style.visibility = "visible"
    document.getElementById("numberCorrect").innerHTML = "You got " + count + " correct!"
}