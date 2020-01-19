const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const userRouter = require('./controllers/UserController/UserController');
const roleRouter = require('./controllers/RoleController/RoleController');
const indexRouter = require('./controllers/IndexController/IndexController');

const jsonParser = express.json();
const pool = require('./module/db-config');
var bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('views', __dirname + '/views'); // говорим експрес чтоб глянул в папку и отрендарил всё чо там есть
app.set('view engine', 'ejs'); // конфогурацыя темплейт ядра

app.use('/api/user', userRouter);
app.use('/api/role', roleRouter);
app.use('/', indexRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

//module.exports=app;
