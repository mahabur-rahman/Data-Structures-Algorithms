function measureArrayVsObject() {
  // Array
  let arr = [];
  for (let i = 0; i < 1000000; i++) arr.push(i);

  console.time("Array Access");
  for (let i = 0; i < 1000000; i++) {
    let x = arr[i];
  }
  console.timeEnd("Array Access");

  // Object
  let obj = {};
  for (let i = 0; i < 1000000; i++) obj[i] = i;

  console.time("Object Access");
  for (let i = 0; i < 1000000; i++) {
    let x = obj[i];
  }
  console.timeEnd("Object Access");
}

measureArrayVsObject();
