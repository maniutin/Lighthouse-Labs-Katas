const instructorWithLongestName = function (instructors) {
  let names = [];
  //1. Access 'name'
  for (let i = 0; i < instructors.length; i++) {
    names.push(instructors[i]["name"]);
  }
  //2. Count name.length
  let namesLength = [];
  for (let j = 0; j < names.length; j++) {
    namesLength.push(names[j].length);
  }
  //3. Compare name values
  let longestName = Math.max(...namesLength);
  //4. Find the longest name in the names array
  const foundLongestName = names.find((name) => name.length === longestName);
  //5. Return the object with the longest name
  const foundObj = instructors.find(
    (element) => element["name"] === foundLongestName
  );
  return foundObj;
};
console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);
