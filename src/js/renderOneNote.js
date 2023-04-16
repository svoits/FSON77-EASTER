import refs from './refs';
export function renderOneNote({taskName, taskText, id}){
console.log(id);
    const note =  `<li class="task-list-item">
     <button class="task-list-item-btn">Удалить</button>
     <h3>${taskName}</h3>
    <p>${taskText}</p>
</li>`;
refs.taskList.insertAdjacentHTML('beforeend', note);
}