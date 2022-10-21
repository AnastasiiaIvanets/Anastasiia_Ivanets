function first_non_repeating_letter(s) {
    var allCharacters = s.split('');
    var character;
    var characterMap = {};
    //get all character counts
    for (var i = 0; i < allCharacters.length; i++){
        character = allCharacters[i];
        if (typeof (characterMap[character]) == 'undefined') {
            characterMap[character] = 0;
        }
        characterMap[character]++;
    }
    //remove any duplicates
    for (var c in characterMap) {
        if (characterMap[c] > 1) {
            delete characterMap[c];
        }
    }
    //find the first character in your string that is *still* in the map
    for (var i = 0; i < allCharacters.length; i++){
        character = allCharacters[i];
        if (typeof (characterMap[character]) != 'undefined') {
            return character;
        }
    }
    //all characters in the string were duplicated (e.g. "ABBA")
    return 'No non repeating letters';
}

console.log(first_non_repeating_letter("stress"));
console.log(first_non_repeating_letter("sTreSS"));