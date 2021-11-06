const cancelBtn = document.querySelector('#cancel');
// cancelBtn.onclick = showMsg;

// function showMsg(){
//     alert('you are click cancel');
// }

// cancelBtn.onclick = function () {
//     alert('you click on cancel button now!');
// };
cancelBtn.onclick = function (event) {
    alert(`you click on cancel button now!: ${event.target.id}`);
};


const okBtn = document.querySelector('#submitOK');
okBtn.addEventListener('click', addProduct);
okBtn.removeEventListener('click', addProduct);



