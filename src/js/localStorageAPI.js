const STORAGE_KEY = 'note';

function addNote(note) {
  const notes = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  notes.push(note);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

export default { addNote };
