import storageAPI from './localStorageAPI';
import { createNote } from './createNote';

export function onFormSubmit(e) {
  e.preventDefault();
  storageAPI.addNote(createNote(e));
}
