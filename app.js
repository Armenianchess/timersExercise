
    
    function countDown(num) {
       
        let numVar = num;

       
 let clearVar = setInterval(function innerFunction() {
        
        if (numVar > 0) {
            console.log(numVar--);
           
        } else if (numVar < 1) {
            console.log('DONE!')
            clearInterval(clearVar);
        
        }
        
    },1000)
  
}
    countDown (6);
  


























/*
Timers Exercise
countdown
Write a function called countdown that accepts a number 
as a parameter and every 1000 milliseconds decrements 
the value and console.logs it. Once the value is 0 it
 should log “DONE!” and stop.

countDown(4);
// 3
// 2
// 1
// "DONE!"
randomGame
Write a function called randomGame that selects a 
random number between 0 and 1 every 1000 milliseconds 
and each time that a random number is picked, 
add 1 to a counter. If the number is greater than
 .75, stop the timer and console.log the number 
 of tries it took before we found a number greater than .75.

Solution
See our solution
*/