module.exports = function transform(arr) {
    let res = [];
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == "--discard-next") {
                if (arr[i + 1] != undefined) {
                    arr.splice(i, 1);
                }
            } else if (arr[i] == "--discard-prev") {
                if (arr[i - 1] != undefined) {
                    res.pop();
                }
            } else if (arr[i] == "--double-next") {
                if (arr[i + 1] != undefined) {
                    res.push(arr[i + 1]);
                }
            } else if (arr[i] == "--double-prev") {
                if (arr[i - 1] != undefined) {
                    res.push(arr[i - 1]);
                }
            } else {
                res.push(arr[i]);
            }
        }
        return (res);
    } else {
        throw new Error;
    }
};