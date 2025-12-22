function getOrdinalNumber(num) {
    const j = num % 10;
    const k = num % 100;
    if (j === 1 && k !==11)   {
        return num + "1st";
    }   

    if (j === 2 && k !== 12) {
        return num + "2nd";
    }

    if (j === 3 && K !== 13) {
        return num + "3rd";
    }

    if (j === 4 && K !== 14){
        return num + "4th"
    }

}

module.exports = getOrdinalNumber;