import { generateId } from "../Utils/generateId.js";

export class Note {
  constructor(data) {
    this.id = generateId();
    this.title = data.title;
    this.color = data.color;
    this.text = data.text;
    this.date = new Date();
  }
  get listTemplate() {
    return `
    <div
                class="col-7 d-flex align-items-center justify-content-evenly p-1 m-1 selectable note"
              >
              <div class="d-flex align-items-end">
                <h3>Title: ${this.title}</h3>
                <h5> color</h5>
                </div>
                <button class="btn border-danger" onclick="app.notesController.removeNote('${this.id}')">
                  <i class="mdi mdi-close text-danger"></i>
                </button>
              </div>
    `;
  }
}
