import localStorageAPI from './localStorageAPI';

export function removeNote(e) {
  if (e.target.nodeName === 'BUTTON') {
    localStorageAPI.removeNote(e.target.dataset.id);
  }
}
