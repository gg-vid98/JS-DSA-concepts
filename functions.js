for(let i=0; i<5; i++){
    setTimeout(()=>{
        console.log(i)
    }, i*1000)
}

/* arrow vs normal func
1. syntax
2. implicit return (one line no need return in arrow)
3. arguments
function fn(){
    console.log(arguments) // returns args 1,2,3 (arguments is a keyword)
}
fn(1,2,3)

const fnArr => (){
    console.log(arguments) // arguments not defined
}
fnArr(1,2,3)


4. this 

let user = {
    username: 'Aaa',
    rc1: () => {
        console.log(this.username) // gives undefined since this points to global
    },
    rc2: function(){
        console.log(this.username) // gives aaa since this points to object
    }
}
user.rc1();
user.rc2();

*/