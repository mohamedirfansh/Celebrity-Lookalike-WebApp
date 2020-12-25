const signinHandler = (db, bcrypt) => (req, res) => {
    const {email, password} = req.body;
    if (!email || !password) {
        return res.status(400).json('unsuccessful')
    }

    db.select('email', 'hash')
    .from('login')
    .where('email', '=', email)
    .then(data => {
        const isValid = bcrypt.compareSync(password, data[0].hash);
        if (isValid) {
            return db.select('*')
            .from('users')
            .where('email', '=', email)
            .then(user => {
                res.json(user[0])
            })
            .catch(err => res.status(400).json('unsuccessful'))
        } 
        else {
            res.status(400).json('unsuccessful')
        }
    })
    .catch(err => res.status(400).json('unsuccessful'))
}

module.exports = {
    signinHandler
}