const casual = require("casual");

module.exports = () => {
  let counter = 0;
  const data = {
    users: [],
    posts: [],
  };

  for (let i = 0; i < 50; i++) {
    data.users.push({
      id: i,
      username: casual.username,
      password: casual.password,
      birthay: casual.date((format = "DD-MM-YYYY")),
    });

    if (i % 2 == 0) {
      data.posts.push({
        id: counter,
        content: casual.description,
        userId: data.users[i].id,
      });
      counter += 1;
    }
  }

  return data;
};
