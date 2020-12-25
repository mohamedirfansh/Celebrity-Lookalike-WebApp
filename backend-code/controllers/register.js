const registerHandler = (db, bcrypt) => (req, res) => {
    const { email, password, name } = req.body;
    if (!email || !name || !password) {
        return res.status(400).json('unsuccessful')
    }
    const hash = bcrypt.hashSync(password);

    db.transaction(trx => {
        trx.insert({
            hash: hash,
            email: email
        })
        .into('login')
        .returning('email')
        .then(loginEmail => {
            return trx.insert({
                name: name,
                email: loginEmail[0],
                joined: new Date()
            })
            .into('users')
            .returning('*')
            .then(user => {
                res.status(200).json(user[0])
            })
        })
        .then(trx.commit)
        .catch(trx.rollback)
    })
    .catch(err => {
        res.status(400).json('unsuccessful');
    })
}

module.exports = {
    registerHandler
}