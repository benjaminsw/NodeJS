var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/amazon_crawler";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("WD_goods_key_phrases").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
