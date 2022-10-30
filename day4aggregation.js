// select *  from customer where address = 'Pune'
db.customer.find()
db.customer.aggregate([])
// select *  from customer where address = 'Pune'
db.getCollection("customer").aggregate(
    [
        {
            "$match" : {
                "address" : "Pune"
            }
        }
    ], 
    
);

// select * from customer where street_no = 123
db.customer.find({ "billing_address.street_no": 123}, {})
db.getCollection("customer").aggregate(
    [
        {
            "$match" : {
                "billing_address.street_no" : 123.0
            }
        }
    ], 
);
// select * from customer where total_cost > 350
db.customer.find({ "Cart.total_cost":{$gt: 350}})
db.getCollection("customer").aggregate(
    [
        {
            "$match" : {
                "Cart.total_cost" : {
                    "$gt" : 350.0
                }
            }
        }
    ], 
);
// select * from customer where total_cost > 350 and address = 'Pune'
db.customer.find({"Cart.total_cost": {$gt : 350}, "address": "Pune" })
db.getCollection("customer").aggregate(
    [
        {
            "$match" : {
                "Cart.total_cost" : {
                    "$gt" : 350.0
                },
                "address" : "Pune"
            }
        }
    ], 
);
// select * from customer where address in ('Pune','Chennai')
db.customer.find({address: {$in: [/pune/i,/chennai/i]}})
db.getCollection("customer").aggregate(
    [
        {
            "$match" : {
                "address" : {
                    "$in" : [
                        /pune/i,
                        /chennai/i
                    ]
                }
            }
        }
    ], 
);

// select * from customer where address != 'Chennai'
db.customer.find({address: {$ne: "Chennai"}})
db.getCollection("customer").aggregate(
    [
        {
            "$match" : {
                "address" : {
                    "$ne" : "Chennai"
                }
            }
        }
    ], 
);

// select * from customer where address like '%pune%'
db.customer.find({address: {$in: [/pune/i]}})
db.getCollection("customer").aggregate(
    [
        {
            "$match" : {
                "address" : {
                    "$in" : [
                        /pune/i
                    ]
                }
            }
        }
    ], 
);
// select * from customer where lower(address) like '%pune%'
db.customer.find({address: {$in: [/pune/i]}})
db.getCollection("customer").aggregate(
    [
        {
            "$match" : {
                "address" : {
                    "$in" : [
                        /pune/i
                    ]
                }
            }
        }
    ], 
);
// select * from  customer.Cart.added_products[] where [].product_id = 'X001' // invalid syntax just for reference
db.customer.find({"Cart.added_products":{$elemMatch:{"product_id" : "X001"}}},{})
db.getCollection("customer").aggregate(
    [
        {
            "$match" : {
                "Cart.added_products" : {
                    "$elemMatch" : {
                        "product_id" : "X001"
                    }
                }
            }
        }
    ], 
);
// select * from  customer.Cart.added_products[] where [].product_id = 'X003'
db.customer.find({"Cart.added_products":{$elemMatch:{"product_id":"X003"}}})
db.getCollection("customer").aggregate(
    [
        {
            "$match" : {
                "Cart.added_products" : {
                    "$elemMatch" : {
                        "product_id" : "X003"
                    }
                }
            }
        }
    ], 
);



