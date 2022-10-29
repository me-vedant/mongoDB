db.createCollection("players")
db.players.find()
//Players --> p_name,dob, skill,is_oversea_player  medical_details(last_yoyo_date,is_passed), team_name
//rr "vk","rht","gayle","kevin",mi "plrd","archer","vittori","bravo", csk"brvo","gilly","matt","messi"
db.players.insertMany(
[
{"p_name": "vk",
  "skill": "bat",
 "dob": ISODate("1999-12-12"),
 "is_oversea_player": "yes",
 "medical_details": {"last_yoyo_date": ISODate("2022-12-12") , "is_passed": "yes"},
 "team_name": "Rajasthan Royals"
},
{"p_name": "rht",
  "skill": "bat",
 "dob": ISODate("1999-12-12"),
 "is_oversea_player": "yes",
 "medical_details": {"last_yoyo_date": ISODate("2022-12-12") , "is_passed": "yes"},
 "team_name": "Rajasthan Royals"
},
{"p_name": "gayle",
  "skill": "bat",
 "dob": ISODate("1999-12-12"),
 "is_oversea_player": "yes",
 "medical_details": {"last_yoyo_date": ISODate("2022-12-12") , "is_passed": "yes"},
 "team_name": "Rajasthan Royals"
},
{"p_name": "kevin",
  "skill": "bat",
 "dob": ISODate("1959-12-12"),
 "is_oversea_player": "yes",
 "medical_details": {"last_yoyo_date": ISODate("2012-12-12") , "is_passed": "yes"},
 "team_name": "Rajasthan Royals"
},
{"p_name": "plrd",
  "skill": "bat",
 "dob": ISODate("1959-12-12"),
 "is_oversea_player": "yes",
 "medical_details": {"last_yoyo_date": ISODate("2012-12-12") , "is_passed": "yes"},
 "team_name": "MI"
},
{"p_name": "archer",
  "skill": "bowl",
 "dob": ISODate("1989-12-12"),
 "is_oversea_player": "yes",
 "medical_details": {"last_yoyo_date": ISODate("2010-11-12") , "is_passed": "yes"},
 "team_name": "MI"
},
{"p_name": "vittori",
  "skill": "bat",
 "dob": ISODate("2000-12-12"),
 "is_oversea_player": "yes",
 "medical_details": {"last_yoyo_date": ISODate("2020-05-12") , "is_passed": "yes"},
 "team_name": "MI"
},
{"p_name": "bravo",
  "skill": "bat",
 "dob": ISODate("1985-04-12"),
 "is_oversea_player": "yes",
 "medical_details": {"last_yoyo_date": ISODate("2020-09-12") , "is_passed": "yes"},
 "team_name": "MI"
},
{"p_name": "brvo",
  "skill": "bowl",
 "dob": ISODate("1998-04-12"),
 "is_oversea_player": "yes",
 "medical_details": {"last_yoyo_date": ISODate("2015-09-12") , "is_passed": "yes"},
 "team_name": "MI"
},
{"p_name": "gilly",
  "skill": "bat",
 "dob": ISODate("1993-12-12"),
 "is_oversea_player": "yes",
 "medical_details": {"last_yoyo_date": ISODate("2008-01-12") , "is_passed": "yes"},
 "team_name": "Rajasthan Royals"
}
]
);
db.players.drop()

db.createCollection("Teams")
db.Teams.find()
//Teams--> t_name,owner,budget, overseas_players(array which will contain overseas player)
db.Teams.insertOne(
{ "t_name" : "Rajasthan Royals",
    "owner" : "ACC Group",
    "Budget" : "9000",
    "overseas_players" : (["vk","rht","gayle","kevin"])
}
)

db.Teams.insertMany(
[
{ "t_name" : "Rajasthan Royals",
    "owner" : "ACC Group",
    "Budget" : "9000",
    "overseas_players" : (["vk","rht","gayle","kevin"])
},
{ "t_name" : "MI",
    "owner" : "R Group",
    "Budget" : "500000",
    "overseas_players" : (["plrd","archer","vittori","bravo"])
},
{ "t_name" : "CSK",
    "owner" : "CSK Group",
    "Budget" : "400",
    "overseas_players" : (["brvo","gilly","matt","messi"])
}
]
);

db.createCollection("scores")
//Scores --> p_name, skill, total_runs(if batting), total_wickets(if bowlers)
db.scores.insertMany(
[
    {"p_name": "brvo",
     "skill": "bowl",
     "total_wickets" : 100   
    },
       {"p_name": "gilly",
     "skill": "bowl",
     "total_runs" : 10000  
    },
       {"p_name": "matt",
     "skill": "bat",
     "total_runs" : 2000
    },
       {"p_name": "messi",
     "skill": "bat",
     "total_runs" : 500
    },
        {"p_name": "plrd",
     "skill": "bat",
     "total_runs" : 50000
    },
         {"p_name": "archer",
     "skill": "bowl",
     "total_wickets" : 100
    },
      {"p_name": "vittori",
     "skill": "bat",
     "total_runs" : 10000
    }    
]
);
//  Update all players total_runs who are batsman to 1000 runs
db.scores.updateMany({skill :"bowl"},{$set:{"total_runs": ""}})
db.scores.updateMany({skill :"bowl"},{$set: {"total_wickets": 1000}})
// update all players yoyo test passed status to failed
db.players.updateMany({"medical_details.is_passed" : "yes"},{$set: {"medical_details.is_passed" : "failed"} })
// add a new field named "category" to the Players collection with a default value of Outstanding
db.players.insertOne({"category": "Outstanding"})
// add a new field named "homeGround" to the Teams collection with the default value null
db.Teams.insertOne({"homeGround": null})
// for Delhi Capitals --> Delhi
// for Mumbai Indians --> Mumbai
// for Rajasthan Royals --> Rajasthan
db.Teams.updateOne({"t_name": "Rajasthan Royals"}, {$set :{"homeGround": "Jaipur"}})
db.Teams.updateOne({"t_name": "MI"}, {$set :{"homeGround": "Mumbai"}})
db.Teams.updateOne({"t_name": "CSK"}, {$set :{"homeGround": "Chennai"}})
// Add a new field "no_of_centuries"  with a default value of 5 to all batsman
db.players.updateMany({"skill":"bat"},{$set : {"no_of_centuries":5}})
// Add a new field "no_of_hatricks"  with a default value of 2 to all bowler
db.players.updateMany({"skill":"bowl"},{$set : {"no_of_hatricks":2}})
// delete all players that belong to 'MI'
db.players.deleteMany({"team_name":"MI"})
// -----------------delete players that were born before '01-12-1980'
db.players.deleteOne({"dob": {$lt: ISODate("1980-12-01T00:00:00.000+0000")}})
// delete any one player that belong to 'Mumbai Indians'
db.players.deleteOne({"team_name":"MI"});
// just adds value 1 to the budget
db.Teams.updateMany({},{$inc : {"Budget":1}})
// increase all the teams budget by 60
db.Teams.updateMany({},{$inc : {"Budget":60}})