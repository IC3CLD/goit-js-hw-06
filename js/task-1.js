import users from "./users.js"

const getUserNames = users => {
    const copy = [];
    users.forEach(item => copy.push(item.name));
    return copy
  };
  
  console.log(getUserNames(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
