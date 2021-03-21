module.exports.register = (req, res) => {
    const {name, emaill, password} = req.body;
    res.send(name);
}
