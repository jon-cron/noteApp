import { appState } from "../AppState.js";
import { notesService } from "../Services/notesService.js";
import { setHTML } from "../Utils/Writer.js";

function _drawNotes() {
  let template = "";
  appState.notes.forEach((n) => (template += n.listTemplate));
  setHTML("noteList", template);
}

export class NotesController {
  constructor() {
    _drawNotes();
  }
}
