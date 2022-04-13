var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products=[
    {
      name:"iphone11",
      category:'mobile',
      description:'this is awesome',
      image:"https://images-eu.ssl-images-amazon.com/images/I/41R0o8pGJjL._SY445_SX342_QL70_FMwebp_.jpg"
    },
    {
      name:"oppo reno",
      category:'mobile',
      description:'this is awesome',
      image:"https://image.oppo.com/content/dam/oppo/product-asset-library/reno/reno6-global/reno6-5g/v1/assets/reno6-5g-pdp-design-renoglow-sm-320.jpg"

    },
    {
      name:"iphone 13 pro",
      category:'mobile',
      description:'this is awesome',
      image:"https://m.media-amazon.com/images/I/31TCJmM4+mL._SX342_SY445_.jpg"
    },
    {
      name:"oneplus 5",
      category:'mobile',
      description:'this is awesome',
      image:"https://m.media-amazon.com/images/I/81qqBAKRhTL._SY606_.jpg" 
    }
  ]
  res.render('index', { products,admin:false });
});

module.exports = router;
