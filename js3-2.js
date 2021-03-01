'use strict'
const addBtn = document.getElementById('addBtn');

//テーブル要素取得
const doList = document.getElementById('doList');

//配列。後に追加される
const list = [];
//入力内容取得
const input = document.getElementById('input');
//追加
const addTask = () => {
    const inputValue =input.value; 
    list.push({task:inputValue,status:'作業中'});
}
const test = () => {
    return function () {
         const tLength = doList.rows;
        for(let num = 0; num < tLength.length;num++){
            console.log(tLength[num].rowIndex);
      }
    }
}
//ボタン生成
const makeWorkBtn = () => {//状態　作業中
    const workBtn = document.createElement('button');
    const workContent = document.createTextNode('作業中');
    workBtn.appendChild(workContent);
    //workBtn.onclick = 関数
    return workBtn;
}

const makeDelBtn = () => {//状態　消去
    const deleteBtn = document.createElement('button');
    const workContent = document.createTextNode('消去');
    deleteBtn.appendChild(workContent);
    deleteBtn.onclick = test();
    return deleteBtn;
}

//ToDoリスト作成
const toDoShow = () => {
    doList.innerText = '';
    addTask();
    list.forEach((job, index) => {
        const tr = document.createElement('tr');
        //<th>ID
        const tdId = document.createElement('td');
        tdId.textContent = index;//ID
        //<th>コメント
        const tdComment = document.createElement('td');
        tdComment.textContent = job.task;//コメント

        tr.appendChild(tdId);
        tr.appendChild(tdComment);
        tr.appendChild(makeWorkBtn());
        tr.appendChild(makeDelBtn());
        doList.appendChild(tr);
    });
}
// const row_list = doList.rows;
// console.log(row_list);

//実行
addBtn.addEventListener('click', ()=> {
    toDoShow();
    input.value = ''//入力後、前の入力内容を消す
    
});

//