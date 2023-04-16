import localStorageAPI from "./localStorageAPI";
import refs from "./refs";
export function renderNotes(){
const notesArr = localStorageAPI.getNotes()
 const markup = notesArr.map(item => `<li class="task-list-item">
     <button class="task-list-item-btn">Удалить</button>
     <h3>${item.taskName}</h3>
    <p>${item.taskText}</p>
</li>`)
refs.taskList.insertAdjacentHTML("beforeend", markup.join(""))
}
