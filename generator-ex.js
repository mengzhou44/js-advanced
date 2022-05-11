function* sayWords() {
  yield 'hello';
  yield 'world';
}

const generatorObject = sayWords();

for (let item of generatorObject) {
  console.log(item);
}
