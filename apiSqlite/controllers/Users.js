const User = require("../models/UsersModel.js");
const Settings = require("../models/SettingsModel.js");
const { Op } = require("sequelize");

/*************************************************************/
/* ---------- LIST USERS ----------------------------------- */
/*********************************************************** */
const seqListAll = async (req, res) => {
  /* Search All Users/Features/Galleries */
  try {
    return await User.findAll().then((user) => {
      Settings.findAll().then((init) =>
        res.status(200).json({ udata: user, set: init })
      );
    });
  } catch (error) {
    res.status(400).json({ response: `Error : ${error}` });
  }
};

/*************************************************************/
/* ---------- SEARCH USER DATA BY KEYWORD ------------------ */
/*********************************************************** */
const seqFind = async (req, res) => {
  let findData = "";
  if (req.body.keyword) {
    findData = req.body.keyword;
  }
  try {
    return await User.findAll({
      //   order: [[id, "ASC"]],
      where: {
        [Op.or]: [
          {
            firstname: {
              [Op.like]: `%${findData}%`,
            },
          },
          {
            lastname: {
              [Op.like]: `%${findData}%`,
            },
          },
          {
            department: {
              [Op.like]: `%${findData}%`,
            },
          },
          {
            street: {
              [Op.like]: `%${findData}%`,
            },
          },
          {
            city: {
              [Op.like]: `%${findData}%`,
            },
          },
          {
            state: {
              [Op.like]: `%${findData}%`,
            },
          },
          {
            zip: {
              [Op.in]: [`${findData}`],
            },
          },
        ],
      },
    }).then((user) => {
      Settings.findAll().then((init) =>
        res.status(200).json({ udata: user, set: init })
      );
    });
  } catch (error) {
    res.status(400).json({ response: `Error : ${error}` });
  }
};

/*************************************************************/
/* ---------- UPDATE USER ---------------------------------- */
/*********************************************************** */
const seqUpdate = async (req, res) => {
  const uData = { ...req.body };
  try {
    await Settings.update(uData, {
      where: [{ id: 1 }],
    })
      .then(() => {
        return Settings.findAll();
      })
      .then((response) => res.send(response));
  } catch (error) {
    res.status(400).json({ response: `Error : ${error}` });
  }
};

/*************************************************************/
/* ---------- ADD NEW USER --------------------------------- */
/*********************************************************** */
/* Sequelize - Create User */
const seqCreate = async (req, res) => {
  /* Set Variables */
  const uData = { ...req?.body };
  try {
    await User.create(uData).then((response) =>
      res.status(200).json({ response })
    );
  } catch (error) {
    res.status(400).json({ response: `Error : ${error}` });
  }
};

module.exports = {
  seqFind,
  seqListAll,
  seqCreate,
  seqUpdate,
};
