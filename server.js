/*const { APP_NAME, PORT } = require("./config");
const app = require("./app");

app.listen(PORT, () => {
    console.log(`${APP_NAME} is listening on port ${PORT}...`);
});*/
const { Ignitor } = require('@adonisjs/ignitor')

new Ignitor(require('@adonisjs/fold'))
    .appRoot(__dirname)
    .fireHttpServer()
    .catch(console.error)