var t={form:document.querySelector("#task-form"),taskList:document.querySelector("#task-list")};function e(){return JSON.parse(localStorage.getItem("note"))||[]}var n={addNote:function(t){const n=e();n.push(t),localStorage.setItem("note",JSON.stringify(n))},getNotes:e,removeNote:function(t){const n=e().filter((e=>e.id!==t));localStorage.setItem("note",JSON.stringify(n))}};let a=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce(((t,e)=>t+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"),"");function o(t){const e={id:a()};return new FormData(t.currentTarget).forEach(((t,n)=>{e[n]=t})),e}function s({taskName:e,taskText:n,id:a}){const o=`<li class="task-list-item">\n     <button class="task-list-item-btn" data-id="${a}">Удалить</button>\n     <h3>${e}</h3>\n    <p>${n}</p>\n</li>`;t.taskList.insertAdjacentHTML("beforeend",o)}!function(){const e=n.getNotes().map((t=>`<li class="task-list-item">\n     <button class="task-list-item-btn" data-id="${t.id}">Удалить</button>\n     <h3>${t.taskName}</h3>\n    <p>${t.taskText}</p>\n</li>`));t.taskList.insertAdjacentHTML("beforeend",e.join(""))}(),t.form.addEventListener("submit",(function(t){t.preventDefault();const e=o(t);n.addNote(e),s(e)})),t.taskList.addEventListener("click",(function(t){"BUTTON"===t.target.nodeName&&n.removeNote(t.target.dataset.id)}));
//# sourceMappingURL=index.062e9d9c.js.map
