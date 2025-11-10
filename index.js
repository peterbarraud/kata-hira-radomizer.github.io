$(function() {
    console.log( "ready!" );

    //credit: https://stackoverflow.com/a/2450976/4672179
    let japaneseCharList = () => {
        arrayToShuffle = ['Vowels','K','S','T','N','H','M','Y','R','W','N'];
        let currentIndex = arrayToShuffle.length;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [arrayToShuffle[currentIndex], arrayToShuffle[randomIndex]] = [
            arrayToShuffle[randomIndex], arrayToShuffle[currentIndex]];
        }
        return arrayToShuffle;

    }

    // Used like so
    console.log(japaneseCharList());

    
});