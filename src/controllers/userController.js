import userServices from "../services/userServices"

let handleCreateNewUser = async (req, res) => {
  try {
    let message = await userServices.createNewUser(req.body);
    return res.status(200).json(message);

  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  handleCreateNewUser,
};
