let result = (score) => {
  return new Promise((resolve, reject) => {
    console.log("Gathering results...");

    if (score > 50) resolve("Congratulations! You have Passed");
    else reject("You have failed");
  });
};

//call result above with normal then/catch (one with pass. one with fail)

//call result above with async await (one with pass. one with fail)
