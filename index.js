$(function() {
    japaneseCharList = ['Vowels','K','S','T','N','H','M','Y','R','W','N'];
    let currentIndex = japaneseCharList.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [japaneseCharList[currentIndex], japaneseCharList[randomIndex]] = [
        japaneseCharList[randomIndex], japaneseCharList[currentIndex]];


        $('#japanese-chars').append(
        $('<tr/>')
            .addClass('char-style')
            .append(`<td>${japaneseCharList[currentIndex]}</td>`)
        );
    }
});
