//Type your code here

function createEmployee() {
  
  var createEmployeeSuccess = function(record) {
    kony.print("Employee '" + record.id + "' successfully created!");
    frmDashboardKA.show();
  };
  
  var createEmployeeFailure = function(error) {
    kony.print("Couldn't create Employee. Error : " + JSON.stringify(error));
    frmDashboardKA.show();
  };
  
  var recordEmployee = {};
  recordEmployee.id = frmAddEmployeeKA.tbxEmployeeID.text;
  recordEmployee.name = frmAddEmployeeKA.tbxEmployeeName.text; 
  var selectedValue = frmAddEmployeeKA.radiobtnIsAdmin.selectedKey;
  var isEmployeeAdmin = (selectedValue === 0) ? true : false;
  
  recordEmployee.isAdmin = isEmployeeAdmin;
  
  objEmployee.create(recordEmployee, {}, createEmployeeSuccess, createEmployeeFailure);
}

function updateEmployee(record) {
  
  var updateEmployeeSuccess = function(updated) {
    kony.print("Employee '" + record.id + "' successfully updated!");
  };
  
  var updateEmployeeFailure = function(error) {
    kony.print("Couldn't update record. Error : " + JSON.stringify(error));
  };
  
  var recordEmployee = {};
  if(form1.txtEmployeeName.text) {
    recordEmployee.name = form1.txtEmployeeName.text;
  }
  
  if(form1.txtEmployeeID.text) {
    recordEmployee.description = form1.txtEmployeeID.text;
  }
  
  objEmployee.updateByPK(recordEmployee, {"primaryKeys" : record.id}, updateEmployeeSuccess, updateEmployeeFailure);
}

function deleteEmployee(record) {
  
  var deleteEmployeeSuccess = function(deleted) {
    kony.print("Employee '" + record.id + "' successfully deleted!");
  };
  
  var deleteEmployeeFailure = function(error) {
    kony.print("Couldn't delete record. Error : " + JSON.stringify(error));
  };
  
  objEmployee.deleteByPK({"primaryKeys" : record.id}, deleteEmployeeSuccess, deleteEmployeeFailure);
}

function getEmployeeRecords(successCallback, failureCallback) {
  
  var readEmployeeSuccess = function(records) {
    kony.print("Employee records successfully fetched!");
    successCallback(records);
  };
  
  var readEmployeeFailure = function(error) {
    kony.print("Couldn't fetch records. Error : " + JSON.stringify(error));
    failureCallback(error);
  };
  
  objEmployee.get({}, readEmployeeSuccess, readEmployeeFailure);
}