let guess = Math.floor(Math.random()*100+1)
var count=0
console.log(guess)
var let_guess=1
function check(){
    let value = document.forms[0]['val'].value
    count++
    const hint = document.getElementById('hint')
    const attempt = document.getElementById('attempt')
    
    
    console.log(value)
    if(let_guess==1){
       if(count<10){
        if(value==guess){
            hint.innerHTML='Guess is correct '
            console.log('Guess is correct')
            attempt.innerHTML='No.of Attempts taken:'+count
            document.getElementById('check_btn').innerHTML='Reset'
            let_guess=0

        }
        else if(value<guess){
            hint.innerHTML='Guess is lower'
            console.log('Guess is lower')
            
            attempt.innerHTML='Attempts:'+count
        }
        else{
            hint.innerHTML='Guess is higher'
            console.log('Guess is higher')
            
            attempt.innerHTML='Attempts:'+count
        }
       }
       else{
        document.getElementById('check_btn').innerHTML='Reset'
        attempt.innerHTML='you have exceeded your attempts'
        let_guess=0
        
       }
    }
    else{
        reset()
        let_guess=1
    }
    function reset(){
         document.getElementById('check_btn').innerHTML='check'
         document.getElementById('input1').value=''
         guess = Math.floor(Math.random()*100+1)
         count=0
         hint.innerHTML='Hints'
         attempt.innerHTML='You have 10 attempts'
         console.log(guess)
        
        
    }
}