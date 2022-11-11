import { appState } from "../AppState.js";
import { Note } from "../Models/note.js";

class NotesService {
  removeNote(noteId) {
    let filetedArr = appState.notes.filter((n) => n.id != noteId);
    appState.notes = filetedArr;
    console.log("service", appState.notes);
  }
  addNote(noteData) {
    const newNote = new Note(noteData);
    appState.notes = [...appState.notes, newNote];
  }
}

export const notesService = new NotesService();
