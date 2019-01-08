var faker = require('faker')

var emojis = ['😄','😃','😀','😊','☺','😉','😍','😘','😚','😗','😙','😜','😝','😛','😳','😁','😔','😌','😒','😞','😣','😢','😂','😭','😪','😥','😰','😅','😓','😩','😫','😨','😱','😠','😡','😤','😖','😆','😋','😷','😎','😴','😵','😲','😟','😦','😧','😮','😬','😐','😕','😯','😶','😇','😏','😑']

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFiveDigitCode() {
    return Math.floor(Math.random()*90000) + 10000;
}

function seedData() {
    var users = []
    var teams = []
    var feelings = []
    var responses = []

    //Generate Users
    for(var id = 0; id < 200; id++) {

        //User Attributes
        var firstName = faker.name.firstName();
        var lastName = faker.name.lastName();
        var email = faker.internet.email();
        var image = faker.image.people();

        users.push({
            "id": id,
            "firstName": firstName,
            "lastName": lastName,
            "image": image,
            "teamId": getRandomInt(0, 50)
        });
    }
    //Generate Teams
    for(var id = 0; id < 50; id++) { 

        //Team Attributes
        var teamName = faker.lorem.word();

        teams.push({
            "id": id,
            "teamName": teamName,
            "code": getRandomFiveDigitCode(),
            "userId":  getRandomInt(0, 100)
        });
    }

    //Generate Feelings
    for(var id = 0; id < 500; id++) { 

        //Feelings Attribute
        var date = faker.date.recent();
        var emoji = emojis[Math.floor(Math.random()*emojis.length)]
        var feelingName = faker.lorem.word();
        feelings.push({
            "id": id,
            "feeling": emoji,
            "feelingName": feelingName,
            "date": date,
            "userId":  getRandomInt(0, 100)
        });
    }

    return { "users": users, "teams": teams, "feelings": feelings }
}


module.exports = seedData;