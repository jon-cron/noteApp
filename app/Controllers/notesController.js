import { appState } from "../AppState.js";
import { notesService } from "../Services/notesService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";

function _drawNotes() {
  let template = "";
  appState.notes.forEach((n) => (template += n.listTemplate));
  setHTML("noteList", template);
}

export class NotesController {
  constructor() {
    _drawNotes();
    appState.on("notes", _drawNotes);
  }
  removeNote(noteId) {
    notesService.removeNote(noteId);
  }
  addNote() {
    window.event.preventDefault();
    const form = window.event.target;
    let noteData = getFormData(form);
    // console.log(noteData);
    notesService.addNote(noteData);
  }
}
