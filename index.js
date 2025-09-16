// const { getUser } = require("./test");

import getUser from "./test.js";
const UID = 621003558;

let genshinUser;

try {
  genshinUser = await getUser(UID);
} catch (error) {
  console.error("Invalid fetch");
}

if (genshinUser) {
  genshinUser.then((result) => {
    console.log(result);
  });
}
