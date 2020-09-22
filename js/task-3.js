import users from "./users.js";

const getUsersWithGender = (users, gender) => {
    let result = users.filter(user => user.gender === gender).map(users => users.name);
    return result
  };
  
  console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
