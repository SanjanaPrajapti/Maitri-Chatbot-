


document.addEventListener('DOMContentLoaded', function () {
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
   // const micIcon = document.querySelector('.mic-icon');

    sendButton.addEventListener('click', function () {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            // Display the user's message
            appendMessage('user', userMessage);

            // TODO: Send the user's message to your chatbot backend for processing
            // and retrieve the bot's response.

            // For demonstration purposes, a bot response is simulated here.
            const botResponse = 'This is a sample response from the chatbot.';

            // Display the bot's response
            appendMessage('bot', botResponse);

            // Clear the user input field
            userInput.value = '';
        }
    });

 //   micIcon.addEventListener('click', function () {
        // Implement voice input functionality in future if desired
    });

    function appendMessage(sender, message) {
        const messageContainer = document.createElement('div');
        messageContainer.classList.add(sender);
        messageContainer.textContent = message;
        chatMessages.appendChild(messageContainer);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

