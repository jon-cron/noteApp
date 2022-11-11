import { appState } from "../AppState.js";

class NotesService {
  removeNote(noteId) {
    let filetedArr = appState.notes.filter((n) => n.id != noteId);
    appState.notes = filetedArr;
    console.log("service", appState.notes);
  }
}

export const notesService = new NotesService();
