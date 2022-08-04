// a function to redact every part of a phone number except the area code
function redactnumber() {
    let numbersection = document.getElementById("phonesection").innerHTML;
    console.log(numbersection)

    let phonesearch = /\(?\d{3}[-|.|\)]?\s?\d{3}[-|.]\d{4}/g;
    let redacted = numbersection.replace(phonesearch, ("XXX-XXX-XXXX"));
    console.log(redacted);
    document.getElementById("phonesection").innerHTML = redacted;

}

function betterredactnumber() {
    let numbersection = document.getElementById('phonesection').innerHTML;
    console.log(numbersection);

    let phonesearch = /\(?(\d{3})[-|.|\)]?\s?(\d{3})[-|.](\d{4})/g;
    let redacted = numbersection.replace(phonesearch, "$1 XXX-XXXX");
    console.log(redacted);
    document.getElementById("phonesection").innerHTML = redacted;
}

// a function to redact the username in an email address
function sensoremail () {
    let emails = document.getElementById("emailsection").innerHTML;
    console.log(emails);

    let emailsearch = /[\w|.]*(@\w*\.(com|net|edu))/g;
    let sensored = emails.replace(emailsearch, "XXXXX$1");
    document.getElementById("emailsection").innerHTML = sensored;
}

// A function to switch the order of first name and last name
function nameswap() {
    let names = document.getElementById("namesection").innerHTML;
    console.log(names);
    let namesearch = /(\w+),\s(\w+)/g;
    let switchednames = names.replace(namesearch, "$2 $1");
    document.getElementById('namesection').innerHTML = switchednames;
}


function betternameswap() {
    let names = document.getElementById('namesection').innerHTML;
    let namesearch = /(\w+),\s(\w+)/g;
    let result = namesearch.test(names);
    console.log(result);
    if (result == true) {
        let switchednames = names.replace(namesearch, "$2 $1");
        document.getElementById('namesection').innerHTML = switchednames;
    } else if (result == false) {
        let falsenamesearch = /(\w+)\s(\w+)/g;
        let switchednames = names.replace(falsenamesearch, "$2, $1");
        document.getElementById('namesection').innerHTML = switchednames;
    }
}