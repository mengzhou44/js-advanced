// function outer() {
//      let count = 0

//      function inner(){
//           count++
//           console.log(count)
//      }
//      inner()
// }

// outer();
// outer();

function outer() {
  let count = 0;

  return ()=> {
    count++;
    console.log(count);
  }
}

let fn = outer();
fn();
fn();

// in javascript, when reutnr a fucntion from anoher functio, we are returning not only the function definition but the fuction's scope. 

// funciton defnition  have associtated persistent memoy that hold live data between executtion


// this comibinaiton of funcition deficntion and its scope chain is called  the closure. 


