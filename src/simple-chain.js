const chainMaker = {
    res: [],

    getLength() {
        return this.res.length;
    },
    addLink(value) {
        this.res.push(value);
        return this;
    },
    removeLink(position) {
        if (this.res[position - 1] == undefined) {
            this.res = [];
            throw new Error("Error");
        }
        this.res.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        this.res.reverse();
        return this;
    },
    finishChain() {
        let result = "";
        this.res.forEach((el, i) => {
            if (i === 0) {
                result += "( ";
            }
            result += el + " )~~( ";
            if (i === this.res.length - 1) {
                result = result.substring(0, result.length - 4);
            }
        });
        this.res = [];
        return result;
    }
};

module.exports = chainMaker;