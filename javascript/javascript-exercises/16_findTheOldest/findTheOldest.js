const findTheOldest = function(people) {
    people.sort((a, b) => ((b.yearOfDeath || new Date().getFullYear()) - b.yearOfBirth) - ((a.yearOfDeath || new Date().getFullYear())  - a.yearOfBirth));
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
