document.addEventListener('DOMContentLoaded', () => {
    const sendBtn = document.getElementById('submit-btn');
    const messageInput = document.getElementById('message-input');
    const chatBox = document.getElementsByClassName('chat-box')[0];


    sendBtn.addEventListener('click', () => {
        sendMessage();
    });

    // 检查是否按下了enter键
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    })

    function sendMessage() {
        const messageText = messageInput.value.trim();
        if(messageText !== '') {
            const messageElement = document.createElement('div');
            messageElement.classList.add('chat-message', 'my_message');
            
            const messageContent = document.createElement('p');
            const timestamp = document.createElement('span');
            const currentTime = new Date();
            const formattedTime = currentTime.getHours().toString().padStart(2, '0') + ':' + currentTime.getMinutes().toString().padStart(2, '0');

            messageContent.innerHTML = messageText.replace(/\n/g, '<br>');
            timestamp.textContent = formattedTime;

            messageContent.appendChild(document.createElement('br'));
            messageContent.appendChild(timestamp);
            messageElement.appendChild(messageContent);

            chatBox.appendChild(messageElement);
            // scrollTop返回元素上边缘到视图的距离  scrollHeight返回元素高度
            chatBox.scrollTop = chatBox.scrollHeight;

            messageInput.value = '';
            // 将光标置于输入框
            messageInput.focus();
        }
    }
});