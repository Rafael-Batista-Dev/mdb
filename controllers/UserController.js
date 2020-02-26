class UserController {
  constructor(formIdCreate, formIdUpdate, tableId) {
    this.formEl = document.getElementById(formIdCreate);
    this.formUpdateEl = document.getElementById(formIdUpdate);
    this.tableEl = document.getElementById(tableId);
    this.onSubmit();
    this.onEdit();
  }
  onEdit() {}

  onSubmit() {}

  getPhoto(formEl) {}

  getValues(formEl) {}

  addLine(dataUser) {}

  adEventsTr(tr) {}

  showPanelCreate() {}

  showPanelUpdate() {}

  updateCount() {}
}
