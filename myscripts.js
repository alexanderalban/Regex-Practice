function redactnumber() {
    let numbersection = document.getElementById("phonesection").innerHTML;
    console.log(numbersection)
    let replacetest = numbersection.replace(/phone/, "cell");
    console.log(replacetest)
    let redacted = numbersection.replace(/\(?\(d{3}\)?/g, ("XXX"))
    console.log(redacted)

}