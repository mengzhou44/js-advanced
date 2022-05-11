//  reason1: iife doesn ot pollute global namespace

(function myiife(num) {
  num++;
  console.log(num);
  num === 5 ? console.log('finished!') : myiife(num);
})((num = 0));

// reason 2 private variables and methods from closure

const increment = (() => {
  let count = 0;

  const credits = () => console.log(`you got ${count} credits`);

  return () => {
    count++;
    credits();
  };
})();

increment();
increment();
increment();

//reason 3  module pattern

// const Score = (() => {
//   let score = 0;

//   return {
//     current: () => score,
//     increment: () => score++,
//     get: () => score,
//   };
// })();

const Score = (() => {
  let score = 0;

  const current = () => score;
  const increment = () => score++;

  return {
    current,
    increment,
  };
})();

Score.increment();
Score.increment();

console.group(Score.current());


// reason 4 injecting namespace


