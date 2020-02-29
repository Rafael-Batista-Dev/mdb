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

      if (file) {
        fileReader.readAsDataURL(file);
      } else {
        resolve("dist/img/avatar.png");
      }
    });
  }

  getValues(formEl) {
    let user = {};
    let isValid = true;

    [...formEl.elements].forEach(function(field, index) {
      if (
        ["nome", "email", "senha", "cep"].indexOf(field.name) > -1 &&
        !field.value
      ) {
        field.parentElement.classList.add("has-error");
        isValid = false;
      }

      if (field.name == "genero") {
        if (field.checked) {
          user[field.name] = field.value;
        }
      } else if (field.name == "admin") {
        user[field.name] = field.checked;
      } else {
        user[field.name] = field.value;
      }
    });

    if (!isValid) {
      return false;
    }

    return new User(
      user.nome,
      user.nascimento,
      user.celular,
      user.email,
      user.cep,
      user.logradouro,
      user.bairro,
      user.cidade,
      user.estado,
      user.numeroEnd,
      user.senha,
      user.genero,
      user.admin,
      user.tipo,
      user.foto
    );
  }

  addLine(dataUser) {
    let tr = document.createElement("tr");
    tr.dataset.user = JSON.stringify(dataUser);
    tr.innerHTML = `<td>
    <img
      src="${dataUser.foto}"
      alt="User Image"
      class="img-circle img-sm"
    />
  </td>
  <td>${dataUser.nome}</td>
  <td>${dataUser.email}</td>
  <td>${dataUser.status}</td>
  <td>${Utils.dateFormat(dataUser.register)}</td>
  <td>
    <div
      class="btn-group btn-group-sm"
      role="group"
      aria-label="Basic example"
    >
      <button
        type="button"
        class="btn btn-primary btn-sm btn-edit"
      >
        <i class="fa fa-edit"></i>
      </button>
      <button
        type="button"
        class="btn btn-danger btn-sm btn-delete"
      >
        <i class="fa fa-trash"></i>
      </button>
    </div>
  </td>`;

    this.addEventsTr(tr);

    this.tableEl.appendChild(tr);

    this.updateCount();
  }

  addEventsTr(tr) {
    tr.querySelector(".btn-delete").addEventListener("click", e => {
      if (contirm("Deseja realmente excluir?")) {
        tr.remove();
        this.updateCount();
      }
    });

    tr.querySelector(".btn-edit").addEventListener("click", e => {
      let json = JSON.parse(tr.dataset.user);
      this.formUpdateEl.dataset.trIndex = tr.sectionRowIndex;

      for (let name in json) {
        let field = this.formUpdateEl.querySelector(
          "[name=" + name.replace("_", "") + "]"
        );

        if (field) {
          switch (field.type) {
            case "file":
              continue;
              break;

            case "radio":
              field = this.formUpdateEl.querySelector(
                "[name=" + name.replace("_", "") + "][value=" + json[name] + "]"
              );
              field.checked = true;
              break;

            case "checkbox":
              field.checked = json[name];
              break;

            default:
              field.value = json[name];
          }
        }
      }
      this.formUpdateEl.querySelector(".foto").src = json._foto;
      this.showPanelUpdate();
    });
  }

  showPanelCreate() {
    document.querySelector("#box-user-create").style.display = "block";
    document.querySelector("#box-user-update").style.display = "none";
  }

  showPanelUpdate() {
    document.querySelector("#box-user-create").style.display = "none";
    document.querySelector("#box-user-update").style.display = "block";
  }

  updateCount() {
    let numberUsers = 0;
    let numberAdmin = 0;

    [...this.tableEl.children].forEach(tr => {
      numberUsers++;
      let user = JSON.parse(tr.dataset.user);
      if (user._admin) numberAdmin++;
    });
    document.querySelector("#number-users").innerHTML = numberUsers;
    document.querySelector("#number-users-admin").innerHTML = numberAdmin;
  }
}
