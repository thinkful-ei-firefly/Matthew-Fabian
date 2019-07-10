const createMyObject = () => ({
  foo: "bar",
  answerToUniverse: 42,
  "olly olly": "oxen free",
  sayHello: () => "hello"
});

const obj = createMyObject();
console.log(obj);

/*const modifyObject() = (obj) => ({
	return 
});*/

function modifyObject(obj){
	return {...obj, foo:'foo', bar:'bar', bizz:'bizz', bang:'bang'};
}

console.log(modifyObject(obj));