import { nanoid } from 'nanoid';

export function createNote(e) {
  const note = { id: nanoid() };

  new FormData(e.currentTarget).forEach((value, name) => {
    note[name] = value;
  });

  return note;
}
