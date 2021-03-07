'use strict'
const addBtn = document.getElementById('addBtn');

//テーブル要素取得
const doList = document.getElementById('doList');

//配列。後に追加される
const lists = [];
//入力内容取得
const input = document.getElementById('input');


//ボタン生成
const makeWorkBtn = () => {//状態　作業中
    const workBtn = document.createElement('button');
    const workContent = document.createTextNode('作業中');
    workBtn.appendChild(workContent);
    //workBtn.addEventlisner();
    return workBtn;
}

const makeDelBtn = (tr) => {//状態　消去
    const deleteBtn = document.createElement('button');
    const workContent = document.createTextNode('消去');
    deleteBtn.appendChild(workContent);
    deleteBtn.addEventListener('click', () => {
        const index = tr.rowIndex - 1;
        lists.splice(index, 1);
        console.log(lists);
        toDoShow();
    });
    return deleteBtn;
}

//ToDoリスト作成
const toDoShow = () => {
    doList.innerText = '';

    lists.forEach((job, index) => {
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
        tr.appendChild(makeDelBtn(tr));
        doList.appendChild(tr);
    });
}

//実行
addBtn.addEventListener('click', () => {
    const inputValue = input.value;
    const list = ({ task: inputValue, status: '作業中' });
    lists.push(list);
    toDoShow();
    input.value = ''//入力後、前の入力内容を消す

}); 'use strict'
const addBtn = document.getElementById('addBtn');

//テーブル要素取得
const doList = document.getElementById('doList');

//配列。後に追加される
const lists = [];
//入力内容取得
const input = document.getElementById('input');


//ボタン生成
const makeWorkBtn = () => {//状態　作業中
    const workBtn = document.createElement('button');
    const workContent = document.createTextNode('作業中');
    workBtn.appendChild(workContent);
    return workBtn;
}

const makeDelBtn = (tr) => {//状態　消去
    const deleteBtn = document.createElement('button');
    const workContent = document.createTextNode('消去');
    deleteBtn.appendChild(workContent);
    deleteBtn.addEventListener('click', () => {
        const index = tr.rowIndex - 1;
        lists.splice(index, 1);
        toDoShow();
    });
    return deleteBtn;
}

//ToDoリスト作成
const toDoShow = () => {
    doList.innerText = '';

    lists.forEach((job, index) => {
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
        tr.appendChild(makeDelBtn(tr));
        doList.appendChild(tr);
    });
}

//実行
addBtn.addEventListener('click', () => {
    const inputValue = input.value;
    const list = ({ task: inputValue, status: '作業中' });
    lists.push(list);
    toDoShow();
    input.value = ''//入力後、前の入力内容を消す

});