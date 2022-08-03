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