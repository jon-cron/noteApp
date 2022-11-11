import { generateId } from "../Utils/generateId.js";

export class Note {
  constructor(data) {
    this.id = generateId();
    this.title = data.title;
    this.color = data.color;
    this.text = data.text || "";
    // this.change = new Date();
    this.date = data.date ? new Date(data.date) : new Date();
  }
  get listTemplate() {
    return `
    <div
                class="col-12 d-flex align-items-center justify-content-evenly p-1 m-1 selectable note" onclick="app.notesController.activeNote('${this.id}')">
              <div class="d-flex align-items-end">
                <h3>${this.title}</h3>
                <i style="color:${this.color}" class="mdi mdi-circle"></i>
                </div>
                <button class="btn border-danger" onclick="app.notesController.removeNote('${this.id}')">
                  <i class="mdi mdi-close text-danger"></i>
                </button>
              </div>
    `;
  }
  get ActiveTemplate() {
    return `
    <section class="row m-1 p-1 align-items-center">
              <div class="col-6">
                <h1 style="color:${this.color}" >${this.title}</h1>
                <h5>${this.date.toLocaleDateString()}</h5>
              </div>
              <div class="col-6 text-end">
                <button class="btn btn-primary" onclick="app.notesController.saveChanges()" >Save Changes</button>
                <button class="btn btn-danger" onclick="app.notesController.removeNote('${
                  this.id
                }')" >Delete</button>
                <button class="btn border-success" onclick="app.notesController.closeActiveNote()" >Close</button>
              </div>
            </section>
            <section class="row">
              <textarea class="textSection" placeholder="type..." name="text" id="text" cols="10" rows="25">${
                this.text
              }</textarea>
            </section>
    `;
  }
}
