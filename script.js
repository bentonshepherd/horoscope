var signs = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"];
var messages = ["you will find meaning through helping others and working on challenging problems.", "you will be happy when surrounded by " +
    "different types of people.", "you will find great pleasure in competition with others.", "trying different foods from a variety of places " +
    "may bring you joy.", "expressing yourself through writing may bring you happiness.", "you find happiness when spending time with your family.",
    "don't be afraid to take the reigns and lead the group!", "follow your imagination, wherever it may take you.", "find balance in your life by being " +
    "at ease with the world around you.", "try not to let your inner detective get out of hand", "find joy through investing in your " +
    "emotional well-being.", "be open to the different topics that may present themselves to you."];
var images = ["images/aquarius.png", "images/pisces.png", "images/aries.png", "images/taurus.png", "images/gemini.png",
    "images/cancer.png", "images/leo.png", "images/virgo.png", "images/libra.png", "images/scorpio.png", "images/sagittarius.png",
    "images/capricorn.png"];



function go() {

    console.log("Find Your Horoscope!");
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var name = document.getElementById("name").value;
    console.log(month);
    console.log(day);
    console.log(name);

    var error = determineError (month, day);

    if (error == false) {
        var sign = determineSign(month, day);

        document.getElementById("writeSign").innerHTML = signs[sign];

        document.getElementById("image").src = images[sign];

        document.getElementById("message").innerHTML = name + ", " + messages[sign];
    } else {
        document.getElementById("writeSign").innerHTML = "Error";

        document.getElementById("image").src = " ";

        document.getElementById("message").innerHTML = "Invalid date";
    }
}

function determineError (month, day) {
    if (day == 31 && month == 8) {
        return true;
    }

    if (day == 31 && month == 3) {
        return true;
    }

    if (day == 31 && month == 5) {
        return true;
    }

    if (day == 31 && month == 10) {
        return true;
    }

    if (day == 29 && month == 1) {
        return true;
    }

    if (day == 30 && month == 1) {
        return true;
    }

    if (day == 31 && month == 1) {
        return true;
    }
    return false;
}

function determineSign(month, day) {
    if (month == 0 && day >= 20 || month == 1 && day <= 18) {
        return 0;
    }
    if (month == 1 && day >= 19 || month == 2 && day <= 20) {
        return 1;
    }
    if (month == 2 && day >= 21 || month == 3 && day <= 19) {
        return 2;
    }
    if (month == 3 && day >= 20 || month == 4 && day <= 20) {
        return 3;
    }
    if (month == 4 && day >= 21 || month == 5 && day <= 20) {
        return 4;
    }
    if (month == 5 && day >= 21 || month == 6 && day <= 22) {
        return 5;
    }
    if (month == 6 && day >= 23 || month == 7 && day <= 22) {
        return 6;
    }
    if (month == 7 && day >= 23 || month == 8 && day <= 22) {
        return 7;
    }
    if (month == 8 && day >= 23 || month == 9 && day <= 22) {
        return 8;
    }
    if (month == 9 && day >= 23 || month == 10 && day <= 21) {
        return 9;
    }
    if (month == 10 && day >= 22 || month == 11 && day <= 21) {
        return 10;
    }
    if (month == 11 && day >= 22 || month == 0 && day <= 19) {
        return 11;
    }
}

