// 유저가 값을 입력한다
// +버튼을 누르면 할일이 추가됨
//delete버튼 누르면 할일 삭제됨
//check버튼 누르면 할일이 끝나면서 가운데 줄이 그어짐
//진행중 끝남탭을 누르면 언더바 이동
//끝남탭은 끝난 아이템만, 진행중탭은 진행중인 아이템만
//전체탭 누르면 다시 전체 아이템

let taskInput = document.getElementById("task-input");
// console.log(taskInput);

let addButton =document.getElementById("add-button"); 
let taskList=[];  

addButton.addEventListener("click", addTask); 

function addTask(){
    // console.log("clicked");
    let taskContent = taskInput.value ;
    taskList.push(taskContent);
    console.log(taskList);
    render();
}

function render(){
    let resultHTML = ''; 
    for(let i=0; i<taskList.length; i++){
        resultHTML+=`<div class="task">
                    <div>${taskList[i]}</div>
                    <div>
                        <button>Check</button>
                        <button>Delete</button>
                    </div>
                </div>`;
    }

    document.getElementById("task-board").innerHTML =resultHTML;

}

