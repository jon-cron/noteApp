import { NotesController } from "./Controllers/notesController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  notesController = new NotesController();
}

window["app"] = new App();
