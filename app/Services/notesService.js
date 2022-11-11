import { appState } from "../AppState.js";
import { Note } from "../Models/note.js";
import { saveState } from "../Utils/Store.js";

class NotesService {
  removeNote(noteId) {
    let filetedArr = appState.notes.filter((n) => n.id != noteId);
    appState.notes = filetedArr;
    saveState("notes", appState.notes);
  }
  addNote(noteData) {
    const newNote = new Note(noteData);
    appState.notes = [...appState.notes, newNote];
    saveState("notes", appState.notes);
  }
}

export const notesService = new NotesService();
