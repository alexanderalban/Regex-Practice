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

function sensoremail () {
    let emails = document.getElementById("emailsection").innerHTML;
    console.log(emails);

    let emailsearch = /[\w|.]*(@\w*\.(com|net|edu))/g;
    let sensored = emails.replace(emailsearch, "XXXXX$1");
    document.getElementById("emailsection").innerHTML = sensored;
}

function nameswap() {
    let names = document.getElementById("namesection").innerHTML;
    console.log(names);
    let namesearch = /(\w+),\s(\w+)/g;
    let switchednames = names.replace(namesearch, "$2 $1");
    document.getElementById('namesection').innerHTML = switchednames;
}