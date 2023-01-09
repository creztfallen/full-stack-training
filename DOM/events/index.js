const button = document.getElementById("register-button");

function register(ev) {
  console.log(ev);
  const sectionElement = ev.currentTarget.parentNode;
  const username = sectionElement.children.username.value;
  const password = sectionElement.children.password.value;
  const passwordConfirmation =
    sectionElement.children.passwordConfirmation.value;

  if (password === passwordConfirmation) {
    alert(`Usuário ${username} registrado!`);
  } else {
    alert(`As senhas não conferem`);
  }
}

button.addEventListener("click", register);

const remove = document.getElementById("remove-button");

remove.addEventListener("click", () => {
  button.removeEventListener("click", register);
  alert("Evento removido!");
});
