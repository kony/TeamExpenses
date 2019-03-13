//Type your code here

function createEmployeeExpense(recordEmployeeExpense, successCB, failureCB) {
  
  var createEmployeeExpenseSuccess = function(record) {
    kony.print("Employee expense '" + record.expenseID + "' successfully created!");
    successCB(record);
  };
  
  var createEmployeeExpenseFailure = function(error) {
    kony.print("Couldn't create Employee expense. Error : " + JSON.stringify(error));
    failureCB(error);
  };
  
  objEmployeeExpense.create(recordEmployeeExpense, {}, createEmployeeExpenseSuccess, createEmployeeExpenseFailure);
}

function updateEmployeeExpense(updationMap, options, successCB, failureCB) {

  var updateEmployeeExpenseSuccess = function(updated) {
    kony.print("Couldn't update record. Error : " + JSON.stringify(updated));
    successCB(updated);
  };
  
  
  var updateEmployeeExpenseFailure = function(error) {
    kony.print("Couldn't update record: " + JSON.stringify(error));
    failureCB();
  };
  
  objEmployeeExpense.updateByPK(updationMap, options, updateEmployeeExpenseSuccess, updateEmployeeExpenseFailure);
}

function deleteEmployeeExpense(record,numberOfEmployees,successCallback,failureCallback) {
  
  var countSuccess = 0;
  var deleteEmployeeExpenseSuccess = function(deleted) {
    kony.print("Employee expense with expense ID '" + record.expenseID + "' successfully deleted!");
    countSuccess ++;
    if(countSuccess === numberOfEmployees){
        successCallback(true);
    }
  };
  
  var deleteEmployeeExpenseFailure = function(error) {
    kony.print("Couldn't delete record. Error : " + JSON.stringify(error));
  };
  
  var options = {};
  options.primaryKeys = {"expenseID" : record.expenseID, "employeeID" : record.employeeID};
  
  objEmployeeExpense.deleteByPK(options, deleteEmployeeExpenseSuccess, deleteEmployeeExpenseFailure);
}

function getEmployeeExpenseRecords(options, successCallback, failureCallback) {
  
  var readEmployeeExpenseSuccess = function(records) {
    kony.print("Employee expense records successfully fetched!");
    successCallback(records);
  };
  
  var readEmployeeExpenseFailure = function(error) {
    kony.print("Couldn't fetch records. Error : " + JSON.stringify(error));
    failureCallback(error);
  };
  
  objEmployeeExpense.get(options, readEmployeeExpenseSuccess, readEmployeeExpenseFailure);
}

function getEmployeeExpenseObject(successCallback, failurCallback) {
  
  var employeeRecords;
  var employeeExpenseRecords = [];
  
  var buildEmployeeExpenseObject = function(employeeRecords, employeeExpenseRecords) {
    var employeeExpenseObj = [];
    
    for(var j = 0; j < employeeExpenseRecords.length; j++) {
      
      for(var i = 0; i < employeeRecords.length; i++) {
        var employeeRecord = employeeRecords[i];
        var employeeExpenseRecord = employeeExpenseRecords[j];
        
        if(employeeExpenseRecord.employeeID === employeeRecord.id) {
          employeeExpenseObj[j] = {};
          employeeExpenseObj[j].name = employeeRecord.name;
          employeeExpenseObj[j].employeeID = employeeExpenseRecord.employeeID;
      	  employeeExpenseObj[j].employeeShare = employeeExpenseRecord.employeeShare;
          break;
        }
      }
    }
    
    successCallback(employeeExpenseObj);
  };
  
  var getEmployeeExpenseSuccess = function(records) {
    //Remove this logic when where condition supports boolean..
    //Add options in getEmployeeSuccess() method..
    //employeeExpenseRecords = records;
    
    for(var i = records.length - 1; i >=0; i--) {
      if(records[i].status !== true) {
        employeeExpenseRecords.push(records[i]);
      }
    }
    buildEmployeeExpenseObject(employeeRecords, employeeExpenseRecords);
  };
  
  var getEmployeeExpenseFailure = function(error) {
     failurCallback(error);
  };
  
  var getEmployeeSuccess = function(records) {
    employeeRecords = records;
    getEmployeeExpenseRecords({}, getEmployeeExpenseSuccess, getEmployeeExpenseFailure);
  };
  
  var getEmployeeFailure = function(error) {
     failurCallback(error);
  };
  
  getEmployeeRecords(getEmployeeSuccess, getEmployeeFailure); 
}

/*
 * Get total share of each employee
 */
function getSumOfEmployeeShare(successCallback, failureCallback) {
  
  var getEmployeeExpenseObjectSuccess = function(employeeExpenseObj) {
    
    var sumOfEmployeeShare = {};
    
    for(var i = employeeExpenseObj.length -1; i >= 0; i--) {
      var employeeExpenseRecord = employeeExpenseObj[i];
      
      if(!(Object.keys(sumOfEmployeeShare).includes(employeeExpenseRecord.employeeID))){
        sumOfEmployeeShare[employeeExpenseRecord.employeeID] = employeeExpenseRecord.employeeShare;
      } else {
        sumOfEmployeeShare[employeeExpenseRecord.employeeID] += employeeExpenseRecord.employeeShare;
      }
    }
    
    var sumOfEmployeeShareArray = [];
    var amountOwed = 0;
    
    for(var key in sumOfEmployeeShare) {
      for(var x = 0; x < employeeExpenseObj.length; x++) {
        if(key === employeeExpenseObj[x].employeeID) {
          amountOwed += parseInt(sumOfEmployeeShare[key]);
          sumOfEmployeeShareArray.push({"name": employeeExpenseObj[x].name, 
                                        "employeeShare": "₹" + sumOfEmployeeShare[key], 
                                        "btnPay": "Settle Up", 
                                        "employeeID" : employeeExpenseObj[x].employeeID});
          break;
        } 
      } 
    }
    
    //Calculate the amount Haritha gets back
    frmDashboardKA.lblMoneyOwed.text = "Gets back: ₹" + amountOwed;
    
    successCallback(sumOfEmployeeShareArray);
  };
  
  var getEmployeeExpenseObjectFailure = function(error) {
    failureCallback(null);
  };
  
  getEmployeeExpenseObject(getEmployeeExpenseObjectSuccess, getEmployeeExpenseObjectFailure);
}