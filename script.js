
const messageInput = document.getElementById('message-input');
//Loại bỏ khoảng trắng đầu và cuối của chuỗi, sau đó đếm số ký tự không phải khoảng trắng
messageInput.value = messageInput.value.trim();

const charCountElement = document.getElementById('char-count');
const charMaxCountElement = document.getElementById('char-max-count');
const charCountRow = document.getElementById('char-count-row');
const messageContainer = document.getElementById('message-container');
const messageWarning = document.getElementById('message-warning');

messageInput.addEventListener('input', () => {
    const text = messageInput.value;
    const charCount = text === '' ? 0: text.length;
    charCountElement.textContent = charCount;
    
    if (charCount >= 250) {
        charCountRow.style.color = 'red';
        messageContainer.style.borderColor ='red';

        messageWarning.classList.add('active');

    } else {
        charCountRow.style.color = 'black';
        messageContainer.style.borderColor ='black';
        messageWarning.classList.remove('active');
    }

})