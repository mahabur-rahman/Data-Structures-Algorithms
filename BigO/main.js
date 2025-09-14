const nemo = ["nemo"];

function findingNemo(nemo) {
  for (let i = 0; i < nemo.length; i++) {
    if (nemo[i] === "nemo") {
      console.log(`finding : ${nemo[i]}`);
    } else {
      console.log(`Nomo not found!`);
    }
  }
}

findingNemo(nemo);
