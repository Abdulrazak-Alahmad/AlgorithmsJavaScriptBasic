function capitalizeFirstLetter(str) {
    str = str.toLowerCase().split(" ");
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        var str1 = str.join(" ");
    }
    return str1
}
console.log(capitalizeFirstLetter("sHoRt AnD sToUt"))
console.log(capitalizeFirstLetter("I'm a little tea pot"))