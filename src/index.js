module.exports = function toReadable(number) {
    const numbers = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    };

    let res = '';
    let str = number.toString();
    let [firstDigit, secondDigit, thirdDigit] = str;

    if (str.length <= 2) {
        if (numbers[number]) {
            return numbers[number];
        }

        return `${numbers[firstDigit + '0']} ${numbers[secondDigit]}`;
    }

    if (secondDigit == 0 && thirdDigit == 0) {
        return `${numbers[firstDigit]} hundred`;
    }

    res = `${numbers[firstDigit]} hundred`;
    if (secondDigit == 0) {
        res += ` ${numbers[thirdDigit]}`;
        return res;
    }

    if (thirdDigit == 0) {
        res += ` ${numbers[secondDigit + '0']}`;
        return res;
    } else {
        if (secondDigit < 2) {
            res += ` ${numbers[secondDigit + thirdDigit]}`;
            return res;
        }

        res += ` ${numbers[secondDigit + '0']} ${numbers[thirdDigit]}`;
        return res;
    }
};
