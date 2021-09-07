// Make Rock, Paper, Scissor Game
// Game Rules
// 1) Rock and Paper = Paper Wins
// 2) Rock and Scissor = Rock Wins
// 3) Paper and Scissor = Scissor Wins

// Steps
// 1) Ask users to play the game or quit, if they press start, then step 2 or quit
// 2) Take User and Computer Input 
// 3) Show them what they choose and who wins as per the Game Rules
// 4) Again ask them do they like to play again
// // 


const item =['Rock','Paper','Scissor'];

let UserInput ;
let ComputerInput;
let play =true;




 while(play){
    play =confirm("Do You wanna Play");
    console.log(play);
    if(!play){
        break;
    }

     UserInput = prompt("Please Select Items 1. Rock  2. Paper 3. Scissor");
     console.log(UserInput);
         if(!UserInput){
             break;
             
         }
     

     while(UserInput>3 || UserInput<1 || isNaN(UserInput)){

         alert('Please Enter Valid Number');
         UserInput = prompt("Please Select Items 1. Rock  2. Paper 3. Scissor");
        
        
     }
    
    
  ComputerInput=ComputerInput-1;
  UserInput=UserInput-1;
  
     ComputerInput = Math.floor(Math.random() * 3 ) +1;
        console.log({ComputerInput});

        if(UserInput === ComputerInput){
            alert(`User Select : ${item[UserInput]}  and Computer Select ${item[ComputerInput]} \n 💁 Result is Tie`);
        }
        // wRock And Paper💁💻🏃

        if(UserInput !== ComputerInput){
            if( item[UserInput]=== 'Rock' && item[ComputerInput]=== 'Paper'){
                alert(`User Select : ${item[UserInput]}  and Computer Select ${item[ComputerInput]}  \n 💻 Computer Win the Game`);
            }

        
    
            if( item[UserInput]=== 'Paper' && item[ComputerInput]=== 'Rock'){
                alert(`User Select : ${item[UserInput]}  and Computer Select ${item[ComputerInput]} \n 🏃 User Win the Game`);
            }

// Rock and Scissor = Rock Wins
if( item[UserInput]=== 'Rock' && item[ComputerInput]=== 'Scissor'){
    alert(`User Select : ${item[UserInput]}  and Computer Select : ${item[ComputerInput]} \n 🏃 User Win the Game`);
    }



    if( item[UserInput]=== 'Scissor' && item[ComputerInput]=== 'Rock'){
        alert(`User Select : ${item[UserInput]}  and Computer Select: ${item[ComputerInput]} \n  💻 Computer Win the Game`);
    }

  //  3) Paper and Scissor = Scissor Wins




    if( item[UserInput]=== 'Paper' && item[ComputerInput]=== 'Scissor'){
        alert(`User Select : ${item[UserInput]}  and Computer Select: ${item[ComputerInput]} \n 💻Computer Win the Game`);
        }
    
    
    
        if( item[UserInput]=== 'Scissor' && item[ComputerInput]=== 'Paper'){
            alert(`User Select : ${item[UserInput]}  and Computer Select: ${item[ComputerInput]}\n 🏃 User Win the Game`);
        }


        }


 }




