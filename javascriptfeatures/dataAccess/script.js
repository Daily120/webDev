var database = [{
    username: "andrei",
    password: "supersecret"
}];

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

function signIn(username, password) {
    database.forEach(item => {
        if (item.username == username && item.password === password) {
            alert("Successfully signed in!")
            showFeed();
        } else {
            alert("Wrong username and password!");
        }
    });
}

function showFeed() {
    newsFeed.forEach(item => {
        console.log(item.username + " said: " + item.timeline);
    })
}
signIn(userNamePrompt, passwordPrompt);
