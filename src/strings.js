const sayHello = (name) => {
  return 'Hello, ' + name + '!';
};

const uppercase = (name) => {
  return name.toUpperCase();
};

const lowercase = (name) => {
  return name.toLowerCase();
};

const countCharacters = (name) => {
  return name.length;
};

const firstCharacter = (name) => {
  return name.charAt(0);
};

const firstCharacters = (name) => {
  return name.substring(0,4)
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
