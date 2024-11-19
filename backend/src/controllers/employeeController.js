exports.getEmployees = (req, res) => {
    res.status(200).json([{ id: 1, name: 'John Doe', role: 'Developer', email: 'john@example.com' }]);
};

exports.addEmployee = (req, res) => {
    res.status(501).send('Not Implemented');
};