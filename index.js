function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Function 2: mondayWork (function expression)
  const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }
  
  // Function 3: wrapAdjective
  function wrapAdjective(highlight = "*") {
    return function (adjective) {
      return `You are ${highlight}${adjective}${highlight}!`;
    }
  }