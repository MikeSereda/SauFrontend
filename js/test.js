var encode = function (plainText) {
    let encodedText = btoa(plainText)
    alert(encodedText)
    return encodedText;
}

var decode = function (encodedText) {
    let plainText = atob(encodedText)
    alert(plainText)
    return plainText;
}