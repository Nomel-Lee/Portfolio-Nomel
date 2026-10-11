const form = document.querySelector("#form-contact");
const zoneMessage = document.querySelector("#form-message");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // empêche le rechargement de la page

  const nom = document.querySelector("#nom").value.trim();

  // on lit le nom AVANT form.reset(), sinon il serait vidé
  zoneMessage.textContent = `Merci ${nom}, votre message a bien été envoyé !`;
  zoneMessage.classList.add("succes");

  form.reset(); // vide le formulaire
});