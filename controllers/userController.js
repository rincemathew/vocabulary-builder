const mainPage = async (req, res) => {
  res.render("index", { message: "" });
};

module.exports = { mainPage };
