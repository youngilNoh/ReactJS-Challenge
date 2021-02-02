class ObjectUtilities {
    /* my codebox */
    static mergeObjects = (objectA, objectB) => ({ ...objectA, ...objectB });
    static removePassword = ({ password, ...rest }) => rest;
    static getOnlyProperties = obj => Object.keys(obj);
    static getOnlyValues = obj => Object.values(obj);
    static freezeObj = obj => Object.freeze(obj);
  }
  
  const objA = {
    name: "Nicolas",
    favFood: "Kimchi"
  };
  
  const objB = {
    password: "12345"
  };
  
  const user = ObjectUtilities.mergeObjects(objA, objB);
  console.log(user);
  /* {name: "Nicolas", favFood: "Kimchi", password: "12345"} */
  
  const cleanUser = ObjectUtilities.removePassword(user);
  console.log(cleanUser);
  /* {name: "Nicolas", favFood: "Kimchi"} */
  
  const frozenUser = ObjectUtilities.freezeObj(cleanUser);
  
  const onlyValues = ObjectUtilities.getOnlyValues(frozenUser);
  console.log(onlyValues);
  /* ["Nicolas", "Kimchi"] */
  
  const onlyProperties = ObjectUtilities.getOnlyProperties(frozenUser);
  console.log(onlyProperties);
  /* ["name", "favFood"] */
  
  frozenUser.name = "Hello!"; // This should show an error
  