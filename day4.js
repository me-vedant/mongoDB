db.getCollection("customer").aggregate(

    // Pipeline
    [
        // Stage 1
        {
            $match: {
                 "Cart.added_products":{$elemMatch:{"product_id":"X003"}}
                
            }
        }
    ],

    // Options
    {

    }

    // Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/

);