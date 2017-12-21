var mongoUrl = process.env.MONGODB_URL ||  'mongodb://localhost:27017/mydb';

module.exports = {
  mongodb: {
    connector: 'mongodb',
    url: mongoUrl,
    name: 'mongodb',
  }
}
