module.exports = function toReadable (number) {
  if (number < 0) {
        return false;
    }

    single_digit = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    double_digit = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    below_hundred = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number === 0) {
        return 'zero';
    }

    function convert(number) {
        let word = '';
        if (number < 10) {
            word = `${single_digit[number]} `;
        } else if (number < 20) {
            word = `${double_digit[number - 10]} `;
        } else if (number < 100) {
            let rem = convert(number % 10);
            word = `${below_hundred[Math.floor(number / 10) - 2]} ${rem}`;
        } else if (number < 1000) {
            word = `${single_digit[Math.trunc(number / 100)]} hundred ${convert(number % 100)}`;
        } else if (number < 1000000) {
            word = `${convert(parseInt(number / 1000)).trim()} thousand ${convert(number % 1000)}`;
        } else if (number < 1000000000) {
            word = `${convert(parseInt(number / 1000000)).trim()} million ${convert(number % 1000000)}`;
        } else {
            word = `${convert(parseInt(number / 1000000000)).trim()} billion ${convert(number % 1000000000)}`;
        }
        return word;
    }
    let result = convert(number);
    return result.trim();
}
