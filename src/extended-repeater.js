module.exports = function repeater(str, { repeatTimes, separator = "+", addition, additionRepeatTimes, additionSeparator = "|" }) {
    let additions = "";
    let result = "";

    if (addition === null) {
        if (additionRepeatTimes != undefined) {
            for (let i = 0; i < additionRepeatTimes; i++) {
                if ((i + 1) != additionRepeatTimes) {
                    additions += (addition + additionSeparator);
                } else {
                    additions += addition;
                }
            }
        }
        for (let j = 0; j < repeatTimes; j++) {
            if (additions != undefined) {
                if ((j + 1) != repeatTimes) {
                    result += (str + additions + separator);
                } else {
                    result += str + additions;
                }
            } else if ((j + 1) != repeatTimes) {
                result += (str + separator);
            } else {
                result += str;
            }
        }
        return result;
    }

    if ((addition != undefined)) {
        if (additionRepeatTimes != undefined) {
            for (let i = 0; i < additionRepeatTimes; i++) {
                if ((i + 1) != additionRepeatTimes) {
                    additions += (addition + additionSeparator);
                } else {
                    additions += addition;
                }
            }
        } else {
            additions = str + addition;
            return additions;
        }
    }

    for (let j = 0; j < repeatTimes; j++) {
        if (additions != undefined) {
            if ((j + 1) != repeatTimes) {
                result += (str + additions + separator);
            } else {
                result += str + additions;
            }
        } else if ((j + 1) != repeatTimes) {
            result += (str + separator);
        } else {
            result += str;
        }
    }

    return result;
};