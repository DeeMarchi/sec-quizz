module.exports = {
  apps : [{
    name       : "SEC_QUIZZ",
    script     : "./src/server.js",
    watch      : true,
    time       : true,
    node_args  : "-r dotenv/config",
  }]
};
