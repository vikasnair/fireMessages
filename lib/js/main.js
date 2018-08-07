const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("message");
const button = document.getElementById("submitButton");
button.addEventListener("click", updateDB);

//Set database object here

const db = firebase.database().ref();

/**
 * Updates the database with the username and message.
 */
function updateDB(event){
    event.preventDefault();
    const username = usernameElement.value;
    const message = messageElement.value;

    usernameElement.value = "";
    messageElement.value  = "";

    console.log(username + " : " + message);

    //Update database here

    const newMessage = {
    	'username' : username,
    	'message' : message
    };

    db.push(newMessage);
}

function updateUI(data) {
	const allMessagesDiv = document.getElementById('allMessages');
	const messageDiv = document.createElement('p');
	messageDiv.innerText = data['username'] + ': ' + data['message'];
	allMessagesDiv.appendChild(messageDiv);
}

// Set database "child_added" event listener here

db.on('child_added', function(dataRef) {
	const data = dataRef.val();
	updateUI(data);
});


