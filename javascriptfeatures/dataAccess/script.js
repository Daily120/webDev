var database = [{
        username: "andrei",
        password: "supersecret"
    },
    {
        username: "John",
        password: "123456"
    }
];

var newsFeed = [{
        username: "Bobby",
        timeline: "So tired from all that learning"
    },
    {
        username: "Sally",
        timeline: "Javascript is so cooool!"
    }
]

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isValidUser(username, password) {
    for (var i = 0; i < database.length; i++)
        if (database[i].username === username && database[i].password === password) {
            return true;
        }
    return false;
}

function signIn(username, password) {
    if (isValidUser(username, password)) {
        alert("Successfully signed in!")
        showFeed();
    } else {
        alert("Wrong username and password!");
    }
}

function showFeed() {
    newsFeed.forEach(item => {
        console.log(item.username + " said: " + item.timeline);
    })
}

signIn(userNamePrompt, passwordPrompt);