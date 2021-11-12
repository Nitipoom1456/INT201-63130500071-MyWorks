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

function addProduct(event) {
    alert(`event target: ${event.target}
        event current target : ${event.currentTarget} 
        event target id: ${event.target.id} 
        event phase: ${event.eventPhase}
        event type: ${event.type}`);
};
  
const divBtnPanel = document.querySelector('#divButtonPanel');
divBtnPanel.addEventListener('click', (event) => {
    alert(`click on div panel was fired!, event target: ${event.target}
        event current target : ${event.currentTarget} 
        event target id: ${event.target.id} 
        event phase: ${event.eventPhase}
        event type: ${event.type}`);
    },
    true
);


