module.exports = function createDreamTeam(members) {
    return Array.isArray(members) ? members.reduce((acc, cur) => {
        if (typeof cur == 'string') { acc.push(/[a-zA-Z]/g.exec(cur)[0].toUpperCase()); }
        return acc;
    }, []).sort().join('') : false;
};