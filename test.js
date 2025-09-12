const { EnkaClient } = require("enka-network-api");
const enka = new EnkaClient();

async function getUser(uid) {
  const user = await enka.fetchUser(uid);
  return user;
}

module.exports = {
  getUser,
};

// enka.fetchUser(621003558).then((user) => {
//   console.log(user);
//   user.characters.forEach((character) => {
//     console.log(character);
//   });
// });
