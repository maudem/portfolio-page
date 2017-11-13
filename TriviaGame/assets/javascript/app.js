var position    = 0;
var test        = 0;
var testStatus  = 0;
var question    = 0;
var choice      = 0;
var choices     = 0;
var choiceA     = 0;
var choiceB     = 0;
var choiceC     = 0;
var choiceD     = 0;
var correct     = 0;
var questions = [
                    ["It was Sunday on Jan 1, 2006. What was the day of the week Jan 1, 2010?", "Sunday", "Saturday", "Friday", "Wednesday", "C" ],
        
                    ["Today is Monday. After 61 days, it will be: ", "Wednesday", "Saturday", "Tuesday", "Thurday", "B"],
    
    
                    ["Factor:  20x2 - 3x - 56 ", "(5x - 8)(4x - 7)", "(5x + 8)(4x + 7)", "(5x + 8)(4x - 7)", "(8x + 5)(-7x + 4)", "C"],
    
                    ["Are the following two words similar, contradictory, or not related?  ENTRANCE   ENHANCE", "Similar", "Not Related", "Contradictory", "Same", "B"],
            
                ];
    
//    ["It was Sunday on Jan 1, 2006. What was the day of the week Jan 1, 2010?", "Sunday", "Saturday", "Friday", "Wednesday", "C"]
//    
//    ["Today is Monday. After 61 days, it will be: ", "Wednesday", "Saturday", "Tuesday", "Thurday", "B"],
//    
//    ["Factor:  20x2 - 3x - 56 ", "(5x - 8)(4x - 7)", "(5x + 8)(4x + 7)", "(5x + 8)(4x - 7)", "(8x + 5)(-7x + 4)", "C" ],
//    
//    ["Are the following two words similar, contradictory, or not related?  ENTRANCE   ENHANCE", "Similar", "Not Related", "Contradictory", "Same", "B"]
//    
//];

function returnID(x){
        return document.getElementById(x);
}
function showQuestion(){
        test = $("test");
        if(position >= questions.length){
                test.innerHTML = "<h2> You got "+correct+" of "+questions.length+" questions correct</h2>";
                $("testStatus").innerHTML = "Test Complete";
                position = 0;
                correct = 0;
                return false;
        }
    
        $("testStatus").innerHTML = "Question " + (position+1)+ " of " + questions.length;
        question = questions[position][0];
        choiceA  = questions[position][1];
        choiceB  = questions[position][2];
        choiceC  = questions[position][3];
        choiceD  = questions[position][4];
    
        test.innerHTML = "<h3>"+question+"</h3>";
        test.innerHTML += "<input type='radio' name='choices' value='A'> " +choiceA+"<br>";
        test.innerHTML += "<input type='radio' name='choices' value='B'> " +choiceA+"<br>";
        test.innerHTML += "<input type='radio' name='choices' value='C'> " +choiceA+"<br>";
        test.innerHTML += "<input type='radio' name='choices' value='D'> " +choiceA+"<br><br>";
        test.innerHTML += "<button onclick = 'checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
        choices = document.getElementsByName("choices");
        for(var i=0; i<choices.length; i++)
            if(choice[i].checked){
                choice = choices[i].value;
            }
            if(choice == questions[position][4]){
                correct++;
            }
        position++;
        showQuestion();
}

window.addEventListener("load", showQuestion, false);



