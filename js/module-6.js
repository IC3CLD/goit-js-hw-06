import users from "./users.js"

const getUserNames = users => {
    const copy = [];
    users.forEach(item => copy.push(item.name));
    return copy
  };
  
  console.log(getUserNames(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const getUsersWithEyeColor = (users, color) => {
    return users.filter(user => user.eyeColor === color)
  };
  
  console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const getUsersWithGender = (users, gender) => {
    let result = users.filter(user => user.gender === gender).map(users => users.name);
    return result
  };
  
  console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const getInactiveUsers = users => {
    return users.filter(user => !user.isActive)
  };
  
  console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const getUserWithEmail = (users, email) => {
    return users.find(user => user.email === email);
  };
  
  console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
  console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const getUsersWithAge = (users, min, max) => {
    return users.filter(user => (user.age > min && user.age < max));
  };
  
  console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
  
  console.log(getUsersWithAge(users, 30, 40));
  // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const calculateTotalBalance = users => {
        return users.reduce((acc, user) => acc + user.balance, 0);
      };
      
      console.log(calculateTotalBalance(users)); // 20916

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const getUsersWithFriend = (users, friendName) => {
    let result = users.filter(user => user.friends.includes(friendName)).map(user => user.name);
    return result
  };
  
  console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
  console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const getNamesSortedByFriendsCount = users => {
    const result = users.sort((a,b) => a.friends.length - b.friends.length).map(user => user.name);
    return result
    
  };
  
  console.log(getNamesSortedByFriendsCount(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  const getSortedUniqueSkills = users => {
    return users.reduce((array, user) => { 
       array.push(...user.skills);
       return array
    }, [] ).filter((elem, index, array) => index === array.indexOf(elem)  )
  };
  
  console.log(getSortedUniqueSkills(users));
  // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
