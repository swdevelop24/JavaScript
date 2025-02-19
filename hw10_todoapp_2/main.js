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

taskInput.addEventListener("focus", function(){
    taskInput.value="";
});


function addTask(){
    // console.log("clicked");
    let task={
        id:randomIDGenerate(), 
        taskContent:taskInput.value,
        isComplete:false,
    }
    taskList.push(task);
    console.log(taskList);
    render();
}

function randomIDGenerate(id){
    return '_' + Math.random().toString(36).substr(2, 9);
}

function render(){
    let resultHTML = ''; 
    for(let i=0; i<taskList.length; i++){
        if(taskList[i].isComplete == true){
            resultHTML+= `<div class="task task-complete">
                        <div class="task-done">${taskList[i].taskContent}</div>
                        <div>
                            <i class="fa-solid fa-rotate-left icon-return" onclick="toggleComplete('${taskList[i].id}')""></i>
                            <i class="fa-solid fa-trash-can icon-delete" onclick="deleteTask('${taskList[i].id}')"></i>
                        </div>
                    </div>`;
        }else{
            
                resultHTML+=`<div class="task">
                            <div>${taskList[i].taskContent}</div>
                            <div>
                                <i class="fa-solid fa-check icon-check" onclick="toggleComplete('${taskList[i].id}')""></i>
                                <i class="fa-solid fa-trash-can icon-delete" onclick="deleteTask('${taskList[i].id}')"></i>
                            </div>
                        </div>`;
        
        }
    }
   

    document.getElementById("task-board").innerHTML =resultHTML;

}

function toggleComplete(id){
    console.log("id:", id);
    for(let i=0; i<taskList.length; i++){
        if(taskList[i].id == id){
            taskList[i].isComplete=!taskList[i].isComplete; //현재 가지고 있는 값의 반대값 넣어주기 
            break;
        }
    }

   

    render();
    console.log(taskList);
}


function deleteTask(id){
    // console.log("삭제하다!", id);
    for(let i =0; i<taskList.length; i++){
        if(taskList[i].id == id){
            taskList.splice(i, 1); 
            break; 
        }
    } //값이 업데이트 되었음.. 아직까지 ui는 업데이트 안함.. 
    //ui 엡데이트를 위해 render 함수 호출
    render();

    console.log(taskList);
}

