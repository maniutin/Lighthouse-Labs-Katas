const talkingCalendar = function (date) {
  let dateSplit = date.split("/");
  let month = "";
  let day = dateSplit[2];
  let year = dateSplit[0];
  let daySuffix;

  if (dateSplit[1] === "01") {
    month = "January";
  } else if (dateSplit[1] === "02") {
    month = "February";
  } else if (dateSplit[1] === "03") {
    month = "March";
  } else if (dateSplit[1] === "04") {
    month = "April";
  } else if (dateSplit[1] === "05") {
    month = "May";
  } else if (dateSplit[1] === "06") {
    month = "June";
  } else if (dateSplit[1] === "07") {
    month = "July";
  } else if (dateSplit[1] === "08") {
    month = "August";
  } else if (dateSplit[1] === "09") {
    month = "September";
  } else if (dateSplit[1] === "10") {
    month = "October";
  } else if (dateSplit[1] === "11") {
    month = "November";
  } else if (dateSplit[1] === "12") {
    month = "December";
  }

  if (day === "01" || day === "21" || day === "31") {
    daySuffix = +day + "st";
  } else if (day === "02" || day === "22") {
    daySuffix = +day + "nd";
  } else if (day === "03") {
    daySuffix = +day + "rd";
  } else {
    daySuffix = +day + "th";
  }

  let dateString = month + " " + daySuffix + ", " + year;

  return dateString;
};
console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
