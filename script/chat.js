// document.addEventListener('DOMContentLoaded', () => {
//     const sendBtn = document.getElementById('submit-btn');
//     const messageInput = document.getElementById('message-input');
//     const chatBox = document.getElementsByClassName('chat-box')[0];


//     sendBtn.addEventListener('click', () => {
//         sendMessage();
//     });

//     // 检查是否按下了enter键
    // messageInput.addEventListener('keypress', (e) => {
    //     if (e.key === 'Enter') {
    //         sendMessage();
    //     }
    // })

//     function sendMessage() {
//         const messageText = messageInput.value.trim();
//         if(messageText !== '') {
//             const messageElement = document.createElement('div');
//             messageElement.classList.add('chat-message', 'my_message');
            
//             const messageContent = document.createElement('p');
//             const timestamp = document.createElement('span');
//             const currentTime = new Date();
//             const formattedTime = currentTime.getHours().toString().padStart(2, '0') + ':' + currentTime.getMinutes().toString().padStart(2, '0');

//             messageContent.innerHTML = messageText.replace(/\n/g, '<br>');
//             timestamp.textContent = formattedTime;

//             messageContent.appendChild(document.createElement('br'));
//             messageContent.appendChild(timestamp);
//             messageElement.appendChild(messageContent);

//             chatBox.appendChild(messageElement);
//             // scrollTop返回元素上边缘到视图的距离  scrollHeight返回元素高度
//             chatBox.scrollTop = chatBox.scrollHeight;

//             messageInput.value = '';
//             // 将光标置于输入框
//             messageInput.focus();
//         }
//     }
// });


document.addEventListener('DOMContentLoaded', () => {
    const sendBtns = document.querySelectorAll('.submit-btn');
    const messageInputs = document.querySelectorAll(' .message-input');

    // 为每个 submit-btn 添加事件监听器
    sendBtns.forEach(sendBtn => {
        sendBtn.addEventListener('click', (event) => {
            const clickedBtn = event.target; // 获取点击的按钮元素
            const rightSide = clickedBtn.closest('.rightSide'); // 获取该按钮所在的 rightSide 元素
            sendMessage(rightSide);
        });
    });

    messageInputs.forEach(messageInput => {
        messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const rightSide = messageInput.closest('.rightSide'); // 获取该输入框所在的 rightSide 元素
                sendMessage(rightSide);
            }
        });
    });


    function sendMessage(rightSide) {
        const messageInput = rightSide.querySelector('.chatbox-input .message-input');
        const chatBox = rightSide.querySelector('.chat-box');
        const messageText = messageInput.value.trim();
        
        if (messageText !== '') {
            // 外部对话气泡
            const messageElement = document.createElement('div');
            messageElement.classList.add('chat-message', 'my_message');
            
            // 对话段落
            const messageContent = document.createElement('p');
            // 时间
            const timestamp = document.createElement('span');
            const currentTime = new Date();
            const formattedTime = currentTime.getHours().toString().padStart(2, '0') + ':' + currentTime.getMinutes().toString().padStart(2, '0');

            messageContent.innerHTML = messageText.replace(/\n/g, '<br>');
            timestamp.textContent = formattedTime;

            messageContent.appendChild(document.createElement('br'));
            messageContent.appendChild(timestamp);
            messageElement.appendChild(messageContent);

            chatBox.appendChild(messageElement);
            chatBox.scrollTop = chatBox.scrollHeight;

            messageInput.value = '';
            messageInput.focus();
        }
    }
});






