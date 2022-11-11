import { appState } from "../AppState.js";
import { Note } from "../Models/note.js";
import { saveState } from "../Utils/Store.js";

class NotesService {
  removeNote(noteId) {
    let filetedArr = appState.notes.filter((n) => n.id != noteId);
    appState.notes = filetedArr;
    saveState("notes", appState.notes);
    appState.activeNote = null;
  }
  addNote(noteData) {
    const newNote = new Note(noteData);
    appState.notes = [...appState.notes, newNote];
    saveState("notes", appState.notes);
  }
  activeNote(noteId) {
    let selectedNote = appState.notes.find((n) => n.id == noteId);
    appState.activeNote = selectedNote;
  }
  saveText(newNote) {
    let activeNote = appState.activeNote;
    activeNote.text = newNote;
    console.log(appState.activeNote);
    activeNote.date = new Date().toLocaleDateString();
    appState.activeNote = null;
  }
  closeActive() {
    appState.activeNote = null;
  }
}

export const notesService = new NotesService();
