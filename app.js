var Twitter = require('twit');

var config = require('./config');
var twitter = new Twitter(config);


twitter.get('search/tweets', { q: 'banana since:2011-07-11', count: 1 }, function(err, data, response) {
  console.log(data)
});

twitter.post('statuses/update', { status: '🤖' }, function(err, data, response) {
  console.log(data)
});
