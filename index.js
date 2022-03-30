const employee = {
  name : 'Woinshet',
  streetAddress : '123 Address, United States'
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
 return Object.assign({}, employee, {[key]:value});
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key]=value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  return Object.assign({}, employee, {[key]:undefined});
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}