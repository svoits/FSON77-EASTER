const STORAGE_KEY = 'note';

function addNote(note) {
  const notes = getNotes();
  notes.push(note);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

function getNotes(){
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}
export default { addNote, getNotes };
