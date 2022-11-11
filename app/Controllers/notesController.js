import { appState } from "../AppState.js";
import { notesService } from "../Services/notesService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML, setText } from "../Utils/Writer.js";
import { Pop } from "../Utils/Pop.js";

function _drawNotes() {
  let template = "";
  appState.notes.forEach((n) => (template += n.listTemplate));
  setHTML("noteList", template);
}
function _drawListTotal() {
  let template = "";
  template += appState.notes.length;
  setText("listTotal", template);
}

export class NotesController {
  constructor() {
    _drawNotes();
    _drawListTotal();
    appState.on("notes", _drawNotes);
    appState.on("notes", _drawListTotal);
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
  }
  async removeNote(noteId) {
    if (await Pop.confirm("Are you sure?")) {
      notesService.removeNote(noteId);
    }
  }
}
