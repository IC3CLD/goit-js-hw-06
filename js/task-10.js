import users from "./users.js";

const getSortedUniqueSkills = users => {
    return users.reduce((array, user) => { 
       array.push(...user.skills);
       return array
    }, [] ).filter((elem, index, array) => index === array.indexOf(elem)  )
  };
  
  console.log(getSortedUniqueSkills(users));
  // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
