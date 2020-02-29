class UserController {
  constructor(formIdCreate, formIdUpdate, tableId) {
    this.formEl = document.getElementById(formIdCreate);
    this.formUpdateEl = document.getElementById(formIdUpdate);
    this.tableEl = document.getElementById(tableId);
    this.onSubmit();
    this.onEdit();
  }
  onEdit() {}

  onSubmit() {
    this.formEl.addEventListener("submit", event => {
      event.preventDefault();

      let btn = this.formEl.querySelector("[type=submit]");
      btn.disabled = true;

      let values = this.getValues(this.formEl);
      if (!values) return false;

      this.getPhoto(this.formEl).then(
        content => {
          values.foto = content;
          this.addLine(values);
          this.formEl.reset();
          btn.disabled = false;
        },
        e => {
          console.error(e);
        }
      );
    });
  }

  getPhoto(formEl) {
    return new Promise((resolve, reject) => {
      let fileReader = new FileReader();
      let elements = [...formEl.elements].filter(item => {
        if (item.name === "foto") {
          return item;
        }
      });
      let file = elements[0].files[0];
      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = e => {
        reject(e);
      };
    });
  }

  getValues(formEl) {}

  addLine(dataUser) {}

  adEventsTr(tr) {}

  showPanelCreate() {}

  showPanelUpdate() {}

  updateCount() {}
}
