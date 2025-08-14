// Problem no-2 : Valid Bangladeshi Number

// Nagetive approach

function validContact(contact) {
  if (typeof contact !== "string") {
    return false;
  }
  if (contact.length != 11) {
    return false;
  }
  //   if (contact.includes("01") != true) {
  if (contact.startsWith("01") != true) {
    return false;
  }
  if (contact.includes(" ") == true) {
    return false;
  }
  return true;
}

console.log(validContact("01992089543"));
