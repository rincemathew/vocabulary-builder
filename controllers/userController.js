const mainPage = async (req, res) => {
  res.render("index", { message: "" });
};


const words = async(req,res) =>{
  res.render("words",{content:''})
}

const sentences = async(req,res) =>{
  res.render("sentences",{content:''})
}

module.exports = { mainPage, words, sentences };
