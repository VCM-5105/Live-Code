document.getElementById('sendBtn').addEventListener('click', function() {
    const messageInput = document.getElementById('chat-input');
    const message = messageInput.value;
    if (message) {
        const messagesDiv = document.getElementById('messages');
        const newMessage = document.createElement('div');
        newMessage.textContent = message;
        messagesDiv.appendChild(newMessage);
        messageInput.value = '';
        messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to the bottom
    }
});

// Placeholder for login and signup functionality
document.getElementById('loginBtn').addEventListener('click', function() {
    alert('Login functionality to be implemented.');
});

document.getElementById('signupBtn').addEventListener('click', function() {
    alert('Sign Up functionality to be implemented.');
});