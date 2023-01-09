const show = () => {
  const contactList = document.getElementById("contact-list");
  alert(contactList);

  const listElements = document.getElementsByTagName("li");
  alert(listElements);

  const contactInputs = document.getElementsByClassName("contact-input");
  alert(contactInputs);

  const contacts = document.querySelectorAll("#contact-list > li > label");
  alert(contacts);

  const contact1 = document.getElementsByName("contact1");
  alert(contact1);

  const firstContact = document.querySelector("#contact-list > li > label");
  alert(firstContact);
};
