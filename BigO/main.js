// const nemo = ["nemo"];

// function findingNemo(nemo) {
//   for (let i = 0; i < nemo.length; i++) {
//     if (nemo[i] === "nemo") {
//       console.log(`finding : ${nemo[i]}`);
//     } else {
//       console.log(`Nomo not found!`);
//     }
//   }
// }

// findingNemo(nemo);



// function getFirstElement(arr) {
//   console.log(`array: `, arr[0])
//     return arr[0]
// }


// getFirstElement([1,2,3,4,5]) // 0(1) constant time complexity



// 5! = 5 * 4 * 3 * 2 * 1 

// takes paramter (n)

// condition: if less than or equal 1 then return 1

function factoria(n){

  if(n <= 1) return 1

return n * factoria(n - 1)

}


console.log(factoria(7))

