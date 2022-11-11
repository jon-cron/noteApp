import { appState } from "../AppState.js";
import { notesService } from "../Services/notesService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML, setText } from "../Utils/Writer.js";
import { Pop } from "../Utils/Pop.js";
import { saveState } from "../Utils/Store.js";

function _drawNotes() {
  let template = "";
  let sortedNote = appState.notes.sort((a, b) => b.date - a.date);
  sortedNote.forEach((n) => (template += n.listTemplate));
  setHTML("noteList", template);
}
function _drawListTotal() {
  let template = "";
  template += appState.notes.length;
  setText("listTotal", template);
}
function _drawActiveNote() {
  let activeNote = appState.activeNote;
  if (activeNote != null) {
    document.getElementById("hidden").classList.remove("hidden");
    console.log(activeNote);
    setHTML("activeNote", appState.activeNote.ActiveTemplate);
  } else {
    document.getElementById("hidden").classList.add("hidden");
    setHTML("activeNote", "");
  }
}

export class NotesController {
  constructor() {
    _drawNotes();
    _drawListTotal();
    appState.on("notes", _drawNotes);
    appState.on("notes", _drawListTotal);
    appState.on("activeNote", _drawActiveNote);
    appState.on("activeNote", _drawNotes);
  }
  // removeNote(noteId) {
  //   notesService.removeNote(noteId);
  // }
  addNote() {
    window.event.preventDefault();
    const form = window.event.target;
    let noteData = getFormData(form);
    // console.log(noteData);
    notesService.addNote(noteData);
    form.reset();
  }
  async removeNote(noteId) {
    if (await Pop.confirm("Are you sure?")) {
      notesService.removeNote(noteId);
    }
  }
  activeNote(noteId) {
    // console.log(noteId);
    notesService.activeNote(noteId);
  }
  saveChanges() {
    let newNote = document.querySelector(".textSection");
    console.log(newNote.value);
    notesService.saveText(newNote.value);
    appState.emit("activeNote");
    saveState("notes", appState.notes);
  }
  closeActiveNote() {
    notesService.closeActive();
  }
}
