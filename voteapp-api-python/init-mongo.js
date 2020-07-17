
db = db.getSiblingDB('admin');
db.grantRolesToUser('admin',[{ role: "dbAdmin", db: "admin" }]);
db.grantRolesToUser('admin',[{ role: 'root', db: 'admin' }])


db = db.getSiblingDB('langdb');
db.createUser({
    user: "admin",
    pwd: "password",
    roles:[
        { role: "userAdmin" , db:"langdb" },
        { role: "read", db: "langdb" }
    ]
});


db.languages.insert({"name" : "go", "codedetail" : { "usecase" : "system, web, server-side", "rank" : 16, "compiled" : true, "homepage" : "https://golang.org", "download" : "https://golang.org/dl/", "votes" : 0}});
db.languages.insert({"name" : "java", "codedetail" : { "usecase" : "system, web, server-side", "rank" : 2, "compiled" : true, "homepage" : "https://www.java.com/en/", "download" : "https://www.java.com/en/download/", "votes" : 0}});
db.languages.insert({"name" : "nodejs", "codedetail" : { "usecase" : "system, web, server-side", "rank" : 30, "compiled" : false, "homepage" : "https://nodejs.org/en/", "download" : "https://nodejs.org/en/download/", "votes" : 0}});


db.grantRolesToUser('admin',[{ role: "userAdmin", db: "langdb" }]);
db.grantRolesToUser('admin',[{ role: "read", db: "langdb" }]);


