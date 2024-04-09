// Function saturdayFun
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Function mondayWork
  function mondayWork(work = "go to the office") {
    return `This Monday, I will ${work}.`;
  }
  
  // Function wrapAdjective
  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    }
  }
  
  // Example usage of wrapAdjective
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction("amazing")); // Output: You are !!!amazing!!!
  