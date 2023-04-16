const STORAGE_KEY = 'note';

function addNote(note) {
  const notes = getNotes();
  notes.push(note);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

function getNotes() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function removeNote(id) {
  const notes = getNotes();
  const updatedNotes = notes.filter(item => item.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedNotes));
}

export default { addNote, getNotes, removeNote };
