/*** if/else statement ***/

var birthYear = window.prompt("Enter your birth year : ");

if (birthYear >= 1955 && birthYear <= 1964) {
    console.log("Your Generation : Generation Jones");
} else if (birthYear >= 1965 && birthYear <= 1980) {
    console.log("Your Generation : Generation X");
} else if (birthYear >= 1981 && birthYear <= 1996) {
    console.log("Your Generation : Generation Y (Millenials)");
} else if (birthYear >= 1997 && birthYear <= 2009) {
    console.log("Your Generation : Generation Z");
} else if (birthYear > 2009) {
    console.log("Your Generation : Generation Alpha");
} else {
    console.log("Not listed");
}


/*** switch statement ***/

// switch 1

var birthYear = window.prompt("Enter your birth year : ");

switch (true) {

    case (birthYear >= 1955 && birthYear <= 1964):
        console.log("Your Generation : Generation Jones");
        break;

    case (birthYear >= 1965 && birthYear <= 1980):
        console.log("Your Generation : Generation X");
        break;

    case (birthYear >= 1981 && birthYear <= 1996):
        console.log("Your Generation : Generation Y (Millenials)");
        break;

    case (birthYear >= 1997 && birthYear <= 2009):
        console.log("Your Generation : Generation Z");
        break;

    case (birthYear > 2009):
        console.log("Your Generation : Generation Alpha");
        break;

    default:
        console.log("Not listed")
}

// switch 2

var year = window.prompt("Choose one from 1998, 1999, 2000, 2001 : ");

switch (year) {

    case "1998":
        console.log("23 years old");
        break;

    case "1999":
        console.log("22 years old");
        break;

    case "2000":
        console.log("21 years old");
        break;

    case "2001":
        console.log("20 years old");
        break;

    default:
        console.log("Not listed")
}
