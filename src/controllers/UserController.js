exports.GetUsers = (req, res) => {
  res.json({ message: "List of users" });
};

exports.CreateUser = (req, res) => {
  const user = req.body;
  res.status(201).json({ message: "User created", user });
};
