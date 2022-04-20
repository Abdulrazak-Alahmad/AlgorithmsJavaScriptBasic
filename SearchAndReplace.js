function myReplace(str, before, after) {
    str = str.split(' ')
    for (let i = 0; i < str.length; i++) {
        if (str[i] == before || str[i] == before.charAt(0).toUpperCase() + before.slice(1)) {
            if (str[i].charAt(0) === str[i].charAt(0).toUpperCase()) {
                after = after.charAt(0).toUpperCase() + after.slice(1);
            }
            str[i] = after + str[i].slice(str[i], str[i]);
        }
    }
    str = str.join(' ')
    return str;
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"); //output:leaped

myReplace("A quick brown fox Jumped over the lazy dog", "jumped", "leaped"); //output:Leaped