function shortestWord(string) {
    const array = string.split(' ');

    const sorted = array.sort((a, b) => {
        return a.length - b.length;
    });

    return sorted[0];
}

console.log(shortestWord('I love JavaScript!')); // Returns 'I' 
