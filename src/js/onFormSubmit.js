import storageAPI from './localStorageAPI';
import { createNote } from './createNote';
import { renderOneNote } from './renderOneNote';
export function onFormSubmit(e) {
  e.preventDefault();
  const newNote = createNote(e)
  storageAPI.addNote(newNote);
  renderOneNote(newNote);
}
