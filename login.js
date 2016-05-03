function login (access) {

  if (access === "head office") {
    return 'head office backend';

  } else if (access === "accountant") {
    return 'accountant backend';

} else {
  return 'normal backend';
}
}
