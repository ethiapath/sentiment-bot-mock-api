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
    var surveys = []
    var sentSurveys = []
    var responses = []
    var feelings = []

    //Generate Users
    for(var id = 0; id < 200; id++) {

        //User Attributes
        var firstName = faker.name.firstName();
        var lastName = faker.name.lastName();
        var password = faker.user.password();
        var email = faker.internet.email();
        var image = faker.image.people();

        users.push({
            "id": id,
            "firstName": firstName,
            "lastName": lastName,
            "password": password,
            "image": image,
            "teamId": getRandomInt(0, 500)
        });
    }
    //Generate Teams
    for(var id = 0; id < 500; id++) { 

        //Team Attributes
        var teamName = faker.lorem.word();

        teams.push({
            "id": id,
            "teamName": teamName,
            "code": getRandomFiveDigitCode(),
            "userId":  getRandomInt(0, 200)
        });
    }

        //Generate Feelings
        for(var id = 0; id < 100; id++) { 

            //Feelings Attributes
            var emoji = emojis[Math.floor(Math.random()*emojis.length)]
            var mood = faker.lorem.word();
            
            feelings.push({
                "id": id,
                "mood": mood,
                "emoji": emoji,
                "surveyId": getRandomInt(0, 600),
                "responseId": getRandomInt(0, 600)
            });
        }

        //Generate Surveys
        for(var id = 0; id < 600; id++) { 

            var question = faker.lorem.words(5);
            var date = faker.date.recent()
            //Feelzies Attribute
            surveys.push({
                "id": id,
                "schedule": "",
                "question": question,
                "teamId":  getRandomInt(0, 500)
            });

            sentSurveys.push({
                "id": id,
                "date": date,
                "userId": getRandomInt(0, 200),
                "surveyId": getRandomInt(0, 600),
                "teamId":  getRandomInt(0, 500)
            });
        }

        //Generate Responses
        for(var id = 0; id < 600; id++) { 

            //Response Attribute
            var date = faker.date.recent();
            var longitude = faker.address.longitude()
            var latitude = faker.address.latitude()
            var image = faker.image.people()
            responses.push({
                "id": id,
                "date": date,
                "longitude": "-73.935242",
                "latitude": "40.730610",
                "image": image,
                "userId":  getRandomInt(0, 200),
                "surveyId": getRandomInt(0, 600)
            });
        }

    return { "users": users, "teams": teams, "responses": responses, "surveys": surveys, "sentSurveys": sentSurveys, "feelings": feelings }
}

module.exports = seedData;
