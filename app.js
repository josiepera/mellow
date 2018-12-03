const express = require('express');
const app = express();
const port = process.env.PORT || 3001


app.use(express.static('client/build'))
const parser = require('body-parser');
app.use(parser.json());
app.use(parser.urlencoded({extended: false}));

const logger = require('morgan');
app.use(logger('dev'));

app.get('/', (req,res) => {
  res.send(`<h1>Home Page</h1>`)
})

const routes = require('./routes/mellow-routes')
app.use('/rooms', routes)

const exploreRoutes = require('./routes/explore-routes')
app.use('/explore', exploreRoutes)

const furnitureRoutes = require('./routes/furniture-routes')
app.use('/furniture_list', furnitureRoutes)

app.use('*', (req,res) => {
  res.status(404).send('Page Not Found!')
})

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})
