db.customer.find();
db.product.find();
db.createCollection("clothes")
db.clothes.find();
db.clothes.insertOne( { "shirts" : "om"} )
db.clothes.insertOne({
 "pant" : "1010",
 "tshirt" : "9888"
});
db.clothes.insertMany(
[
{ "price" : "500",
"shirts" : "10",
 "pant" : NumberInt(20),
 "tshirt" : "peter eng"
},
{ "shirts" :"30",
    "pant" : "70",
    "tshirt" : "20" 
}
]
)

show collections

db.clothes.insertOne({ "_id" : "10",
}
);

db.clothes.insertOne({ "_id" : " 10",
     "pant" : "70",
    "tshirt" : "20" 
}
);
db.customer.insertOne( {
                                    	"_id" : "My_string",
                                    	"my_third_field": "THIRD",
                                    	"my_fourth_field": "FOURTH"
                                   }
                                 );  
db.customer.find();

db.customer.deleteOne({
    "_id" : "My_string",
})
db.clothes.find();
 
db.clothes.deleteOne({"shirts" : "10"}) 

db.clothes.deleteMany({ "shirts" : "30"})

db.my_first_collectIon.updateOne({},{$set : {my_third_field : "Updated" } })

db.clothes.updateOne({ "_id" : " 10"}, {$set : { pant : ""}})
db.clothes.drop();



