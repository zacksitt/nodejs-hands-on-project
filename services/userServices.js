const findById = (id) => {
    const users   = ["coursera","rhyme"]
    return users[id-1];
}

module.exports = findById