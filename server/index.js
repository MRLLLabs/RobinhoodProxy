require('newrelic');
const express = require('express')
const app = express()
const path = require('path')
const port = 80;
const cors = require('cors')
const proxy = require('http-proxy-middleware');

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/', express.static(path.join(__dirname, '../public')));

const transactionsHost = 'http://3.19.169.46';
const transactionsRoute = '/api/transactions/psql/customers/';
app.use(transactionsRoute, proxy({ target: transactionsHost }));

app.get('/navbar/img/:photo', (req, res) => {
  const url = `http://54.219.176.99/navbar/img/${path.basename(req.url)}`
  res.redirect(url)
})

app.get('/graph/getStocks', (req, res) => {
  const url = `http://54.153.91.76/graph/getStocks?${Object.keys(req.query)[0]}=${req.query.id}`
  res.redirect(url)
})

app.get('/graph/img/:photo', (req, res) => {
  const url = `http://54.153.91.76/graph/img/${path.basename(req.url)}`
  res.redirect(url)
})

app.get('/questionMark.png', (req, res) => {
  const url = `http://34.214.68.82/questionMark.png`
  res.redirect(url)
})

app.get('/exclamationMark.png', (req, res) => {
  const url = `http://34.214.68.82/exclamationMark.png`
  res.redirect(url)
})

app.get('/exclamation-button.png', (req, res) => {
  const url = `http://34.214.68.82/exclamation-button.png`
  res.redirect(url)
})

app.get('/tradestock/api', (req, res) => {
  const url = `http://34.214.68.82/tradeStock/api/?${Object.keys(req.query)[0]}=${req.query.id}`
  res.redirect(url);
})

app.get('/tradeStock/img/:photo', (req, res) => {
  const url = `http://34.214.68.82/img/${path.basename(req.url)}`
  res.redirect(url)
})

app.get('/about/getData', (req, res) => {
  res.redirect(`http://13.52.245.200/about/getData/?${Object.keys(req.query)[0]}=${req.query.id}`);
})

app.get('/news/getData', (req ,res) => {
  const url = `http://54.193.67.89/news/getData?${Object.keys(req.query)[0]}=${req.query.id}`
  res.redirect(url)
})

app.post('/news/addViews', (req, res) => {
  const url = `http://54.193.67.89/news/addViews?${Object.keys(req.query)[0]}=${req.query.id}`
  res.redirect(url)
})

app.get('/ratings/getData', (req, res) => {
  const url = `http://54.153.72.27/ratings/${path.basename(req.url)}`
  res.redirect(url)
})

app.get('/ratings/img/:photo', (req, res) => {
  res.redirect(`http://54.153.72.27/ratings/dist/img/${path.basename(req.url)}`)
})

app.get('/Ratings/:photo', (req, res) => {
  res.redirect(`http://54.153.72.27/Ratings/${path.basename(req.url)}`)
})

app.get('/earnings/getData', (req, res) => {
  const url = `http://54.67.103.66/earnings/getData?${Object.keys(req.query)[0]}=${req.query.id}`
  res.redirect(url)
})

app.post('/updateLineColors', (req, res) => {
  // all the routes to update linecolors
  res.end();
})


app.get('/')

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
