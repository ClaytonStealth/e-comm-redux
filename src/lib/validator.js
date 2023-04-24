import React from "react";
const checker = (key, element) => {
  //false= no error
  //true = error
  switch (key) {
    case "firstname":
      console.log(element);
      return false;
    case "lastname":
      console.log(element);
      return false;
    case "username":
      console.log(element);
      return false;
    case "email":
        console.log(element);
      return false;
    case "password":
      console.log(element);
      return false;
    default:
      break;
  }
};
export const validator = (props) => {
  for (const key in props) {
    const element = props[key];
    checker(key, element);
  }

  return true;
};
