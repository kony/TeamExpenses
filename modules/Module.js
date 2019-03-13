function addExpense() {
  var expenseName = frmAddExpenseKA.tbxExpenseName.text;
  var expenditure = !isNaN(parseFloat(frmAddExpenseKA.tbxAmount.text)) ? parseFloat(frmAddExpenseKA.tbxAmount.text) : 0;  
  var expenseCategory = frmAddExpenseKA.lbxSelectCategory.selectedKey;
  var listOfEmployees = frmAddExpenseKA.cbxEmpList.selectedKeys;
  var expenseComment = frmAddExpenseKA.tbxDescriptionNew.text;
  var calData = frmAddExpenseKA.calDateOfPurchanse.dateComponents;  

  if(expenditure === 0 || expenseName === '') 
  {
    alert("Please enter the mandatory feilds: expense name and amount");
  } 
  else 
  {
    //Logic to create expense record..
    var expenseRecord = {};
    expenseRecord.name = expenseName;
    expenseRecord.expenditure = expenditure;
    expenseRecord.categoryID = parseInt(expenseCategory);
    expenseRecord.CreatedDateTime = getDate(calData);

    var createExpenseSuccess = function(record) {

      //Logic to create employee-expense records..
      var numberOfEmployees = listOfEmployees.length;
      var individualShare = expenditure/numberOfEmployees;
      var count = 0;

      var createEmpExpenseSuccess = function() {
        count++;
        if(count == numberOfEmployees) {
          kony.print("Expense added successfully");
          frmLoginKA.flxMainKA.setVisibility(true);
    	  frmLoginKA.flxPopupKA.setVisibility(false);
          populateDataInDashboardForm();
          frmDashboardKA.show();
        }
      };

      var createEmpExpenseFailure = function() {
        count = -1;
      };

      for(var i = 0; i < numberOfEmployees; i++) {
        if(count == -1) {
          break;
        }
        var employeeExpenseRecord = {};
        employeeExpenseRecord.employeeID = listOfEmployees[i];
        employeeExpenseRecord.expenseID = parseInt(record.id);
        employeeExpenseRecord.employeeShare = individualShare;
        employeeExpenseRecord.comment = expenseComment;
        employeeExpenseRecord.status = false;
        createEmployeeExpense(employeeExpenseRecord, createEmpExpenseSuccess, createEmpExpenseFailure);
      }
    };

    var createExpenseFailure = function(error) {
      kony.print("Error in adding expense record.");
    };

    createExpense(expenseRecord, createExpenseSuccess, createExpenseFailure);
  }
}

function settleUp() {
  var employeeID = frmSettleupKA.lblID.text;
  var expenseID = parseInt(frmSettleupKA.lbxSelectExpense.selectedKey);
  
  var updationMap = {};
  updationMap.status = true;
  
  var primaryKeys = {};
  primaryKeys = {"employeeID": employeeID, "expenseID" : expenseID};

  var options = {};
  options.primaryKeys = primaryKeys;
  
  updateEmployeeExpense(updationMap, options, function updateEmployeeExpenseSuccess(result){
    kony.print("Successfully updated the employee expense record with result: " + result);
    populateDataInDashboardForm();
  },
  function updateEmployeeExpenseFailure(error){
    kony.print("Falied to update the employee expense record with error: " + error);
    populateDataInDashboardForm();
  });
}

function populateDataInDashboardForm() {
  populateSegExpenses();
  populateSegEmployees();
}

function populateSegExpenses() {
  frmDashboardKA.segExpenses.widgetDataMap = {
    "lblDate" : "date", 
    "lblToValue" : "expenseName", 
    "lblCategoryName" : "categoryName",
    "lblAmount" : "expenditure", 
    "imgCategory": "image",
    "lblID" : "categoryID"
  };

  var calculateAndPopulateTotalMoneyOwed = function(records) {
    if(records) {
      var totalMoneyOwed = 0;
      for(var i in records) {
        var expenditure = kony.sdk.isNullOrUndefined(records[i].expenditure) ? 0 : records[i].expenditure.substring(1, records[i].expenditure.length);
        totalMoneyOwed += isNaN(parseFloat(expenditure)) ? 0 : parseFloat(expenditure) ;
      }

      frmDashboardKA.lblDetails.text = "Amount Spent: ₹" + totalMoneyOwed;
    }
  };

  var successCallback = function(records) {
    calculateAndPopulateTotalMoneyOwed(records);
    frmDashboardKA.segExpenses.data = records;
    frmDashboardKA.show();
  };

  var failureCallback = function(records) {
    frmDashboardKA.segExpenses.data = [];
    frmDashboardKA.show();
  };

  getCategoryExpenseObject(successCallback, failureCallback);
}

function populateSegEmployees() {
  frmDashboardKA.segEmployees.widgetDataMap = {
    "lblCategory" : "name",
    "lblCategoryDesc" : "employeeShare", 
    "btnPay" : "btnPay",
    "lblID" : "employeeID"
  };

  var successCallback = function(records) {
    employeeExpenses = records;
    frmDashboardKA.segEmployees.data = records;
    frmDashboardKA.show();
  };

  var failureCallback = function(records) {
    frmDashboardKA.segEmployees.data = [];
    frmDashboardKA.show();
  };

  getSumOfEmployeeShare(successCallback, failureCallback);
}

function populateCategoryList(isUpdate) {
  var successCallback = function(records) {
    var result = [];
    var length = records.length;
    for(var i=0; i<length; i++) {
      var record = [];
      record.push(records[i].id);
      record.push(records[i].name);
      result.push(record);
    }

    if(!isUpdate) {
      frmAddExpenseKA.lbxSelectCategory.masterData = result;
    } else {
      frmUpdateExpenseKA.lbxSelectCategory.masterData = result;
    }
  };

  var failureCallback = function(records) {
  };

  getCategoryRecords(successCallback, failureCallback);
}

function populateEmployeesList(isUpdate) {
  var successCallback = function(records) {
    var result = [];
    var length = records.length;
    for(var i=0; i<length; i++) {
      var record = [];
      record.push(records[i].id);
      record.push(records[i].name);
      result.push(record);
    }

    if(!isUpdate) {
      frmAddExpenseKA.cbxEmpList.masterData = result;
    } else {
      frmUpdateExpenseKA.cbxEmpList.masterData = result;
    }
  };

  var failureCallback = function(records) {
  };

  getEmployeeRecords(successCallback, failureCallback);
}

function populateDataInAddExpenseForm() {
  populateEmployeesList(false);
  populateCategoryList(false);
}

function getDate(calData) {
  var dd = ('' + calData[0]).length == 1? ('0'+ calData[0]) : calData[0];
  var mm = ('' + calData[1]).length == 1? ('0'+ calData[1]) : calData[1];
  var yy = calData[2];
  var hh = ('' + calData[3]).length == 1? ('0'+ calData[3]) : calData[3];
  var min = ('' + calData[4]).length == 1? ('0'+ calData[4]) : calData[4];
  var ss = ('' + calData[5]).length == 1? ('0'+ calData[5]) : calData[5];
  var date = yy +'-'+ mm +'-'+ dd + 'T' + hh +':'+ min +':'+ ss +'Z';

  return date;
}

function populateDataInUpdateExpenseForm() {
  var rowData = frmDashboardKA.segExpenses.selectedRowItems[0];
  var expenseID = rowData.expenseID;
  var categoryID = rowData.categoryID;
  var expenditure = rowData.expenditure;
  var expenseName = rowData.expenseName;
  var calDate = new Date(rowData.date);
  
  function successCallback(records) {
    
    var employeeIDs = [];
    var length = records.length;
    for(var i=length-1 ; i>=0; i--) {
      employeeIDs.push(records[i].employeeID);
    }

     // TODO: Populate comments from employee-expense 
    
    frmUpdateExpenseKA.tbxExpenseName.text = expenseName;
    frmUpdateExpenseKA.tbxAmount.text = expenditure;
    frmUpdateExpenseKA.calDateOfPurchanse.dateComponents = [calDate.getDate(), calDate.getMonth(), calDate.getFullYear(), 0, 0, 0];
	
    populateEmployeesList(true);
    populateCategoryList(true);
    frmUpdateExpenseKA.lbxSelectCategory.selectedKey = categoryID;
    frmUpdateExpenseKA.cbxEmpList.selectedKeys = employeeIDs;
    frmUpdateExpenseKA.show();    
  }
  
  function failureCallback(error) {
    
  }
  
  var options = {};
  options.whereCondition = {};
  options.whereCondition.expenseID = expenseID;
  getEmployeeExpenseRecords(options, successCallback, failureCallback);
  
}

var shareOfEachExpense = [];

function populateDataInSettleupForm() {
  var rowData = frmDashboardKA.segEmployees.selectedRowItems[0];
  var employeeName = rowData.name;
  var employeeID = rowData.employeeID;
  var amount = rowData.employeeShare;
  amount = amount.slice(1,amount.length);
  var expenseIDs = [];
  
  // Populate data
  frmSettleupKA.tbxEmployee.setEnabled(false);
  frmSettleupKA.tbxEmployee.text = employeeName;
  frmSettleupKA.tbxTotalShare.setEnabled(false);
  frmSettleupKA.tbxTotalShare.text = amount;
  frmSettleupKA.lblID.text = employeeID;
  
  function failureCallback(error) {}
  
  function successCallback(records) {
    var length = 0;
    for(var i=records.length-1 ; i>=0; i--) {
      if(!records[i].status) {
        var ID = records[i].expenseID;
        var employeeShare = records[i].employeeShare;
		shareOfEachExpense.push([ID, employeeShare]);
        
        var getExpenseSuccessCallback = function(expenseRecords) {
          expenseIDs.push([expenseRecords[0].id, expenseRecords[0].name]);
          frmSettleupKA.lbxSelectExpense.masterData = expenseIDs;
          if(expenseIDs.length === length) {
            frmSettleupKA.tbxAmount.setEnabled(false);
            frmSettleupKA.tbxAmount.text = shareOfEachExpense[0][1];
            frmSettleupKA.show();
          }
        };

        var options = {}; 
        options.whereCondition = {};
        options.whereCondition.id = ID;
        getExpenseRecords(options, getExpenseSuccessCallback, failureCallback);
        length++;
      }
    }
  } 
  
  var options = {};
  options.whereCondition = {};
  options.whereCondition.employeeID = employeeID;
  getEmployeeExpenseRecords(options, successCallback, failureCallback);
}

function OnExpenseSelectionChanged() {
  var length = shareOfEachExpense.length;
  if(length > 0) {
    var key = frmSettleupKA.lbxSelectExpense.selectedKey;
    for(var i=0; i<length; i++) {
      if(shareOfEachExpense[i][0] === parseInt(key)){
		frmSettleupKA.tbxAmount.text = shareOfEachExpense[i][1];
        break;
      }
    }
  }
}

function resetAddExpenseForm() {
  frmAddExpenseKA.tbxExpenseName.text = '';
  frmAddExpenseKA.tbxAmount.text = ''; 
  frmAddExpenseKA.tbxDescriptionNew.text = '';
}

var select = "icon_radiobtn_active.png";
var unselect = "icon_radiobtn.png";

function selectAll() {

  if(frmAddExpenseKA.imgSelectAll.src === select) {
    frmAddExpenseKA.imgSelectAll.src = unselect;
    frmAddExpenseKA.imgClearAll.src = unselect;
  } 
  else 
  {
    frmAddExpenseKA.imgSelectAll.src = select;
    frmAddExpenseKA.imgClearAll.src = unselect;
  }
}

function clearAll() {

  if(frmAddExpenseKA.imgClearAll.src === select) {
    frmAddExpenseKA.imgSelectAll.src = unselect;
    frmAddExpenseKA.imgClearAll.src = unselect;
  } 
  else 
  {
    frmAddExpenseKA.imgSelectAll.src = unselect;
    frmAddExpenseKA.imgClearAll.src = select;
  }
}

function searchByEmployeeName() {
   
var employee = frmDashboardKA.txtSearchEmployee.text.toLowerCase();
var employeeData = frmDashboardKA.segEmployees.data;
var individualEmployeeData = [];

  for(var i = 0; i < employeeData.length; i++){
    if( (employeeData[i].name).toLowerCase() === employee || ((employeeData[i].name.toLowerCase()).indexOf(employee) >= 0 )) {
      frmDashboardKA.segEmployees.data = [];
      individualEmployeeData.push(employeeData[i]);
    }
  }
  frmDashboardKA.segEmployees.data = individualEmployeeData;
}

function clearSearchByEmployeeName() {
  frmDashboardKA.txtSearchEmployee.text = "";
  frmDashboardKA.segEmployees.data = employeeExpenses;
}



function deleteExpenseRecord() {
  var expenseName = frmUpdateExpenseKA.tbxExpenseName.text;
  var expenditure = parseInt(frmUpdateExpenseKA.tbxAmount.text.split("₹")[1]); 
  var expenseCategory = frmUpdateExpenseKA.lbxSelectCategory.selectedKey;
  var listOfEmployees = frmUpdateExpenseKA.cbxEmpList.selectedKeys;
  var expenseComment = frmUpdateExpenseKA.tbxDescriptionNew.text;
  var calData = frmUpdateExpenseKA.calDateOfPurchanse.dateComponents;  

  if(expenditure === 0 || expenseName === '') 
  {
    kony.print("[ERROR] Please enter the mandatory feilds: expense name and amount");
  } 
  else 
  {
    var options = {};
    var whereCondition = {};
    whereCondition["name"] = expenseName;
    whereCondition["expenditure"] = expenditure;
    whereCondition["categoryID"] = parseInt(expenseCategory);
    
    options["whereCondition"] = whereCondition;
    options["projectionColumns"] = ["id"];
    
    var deleteExpenseAssociatedWithEmployee = function(listOfEmployees, expenseID){
      var employeeRecord = {};
      employeeRecord.expenseID = expenseID;
      
      for(var i = 0; i < listOfEmployees.length; i++) {
        employeeRecord.employeeID = listOfEmployees[i];
        deleteEmployeeExpense(employeeRecord,listOfEmployees.length, exployeeExpenseDeletionsuccess, employeeExpenseDeletionFailure);
      }
    };
    
  
    var exployeeExpenseDeletionsuccess = function(deleted) {
      if(deleted === true){
        kony.print("Employee expense deleted successfully: " + deleted);
        var options = {};
        options.id = expenseID;
        deleteExpense(options,expenseDeletionSuccess,expenseDeletionFailure);
      }
    };
    
    var employeeExpenseDeletionFailure = function(error){
      kony.print("Employee expense deletion failed for expense id: " + expenseID + "Error: " + JSON.stringify(error)); 
    };
    
    var expenseDeletionSuccess = function(deleted) {
      kony.print("Expense deletion Successfully for expense id: " + expenseID); 
    };
    
    var expenseDeletionFailure = function(error){
      kony.print("Expense deletion failed for expense id :" + expenseID + "Error: " + JSON.stringify(error));
    };
    
    var getExpenseIDSuccess = function(record) {
        expenseID = record[0].id;
        kony.print("Records fetched successfully with expenseID!! :" + expenseID);
        deleteExpenseAssociatedWithEmployee(listOfEmployees,expenseID);
    };

    var getExpenseIDFailure = function(error) {
      kony.print("Couldn't fetch records with provided expenseID: " + JSON.stringify(error));
    };

    getExpenseRecords(options, getExpenseIDSuccess, getExpenseIDFailure);
  }
}



function updateExpenseRecord() {
  var expenseName = frmUpdateExpenseKA.tbxExpenseName.text;
  var expenditure = parseInt(frmUpdateExpenseKA.tbxAmount.text.split("₹")[1]); 
  var expenseCategory = frmUpdateExpenseKA.lbxSelectCategory.selectedKey;
  var listOfEmployees = frmUpdateExpenseKA.cbxEmpList.selectedKeys;
  var expenseComment = frmUpdateExpenseKA.tbxDescriptionNew.text;
  var calData = frmUpdateExpenseKA.calDateOfPurchanse.dateComponents;  

  if(expenditure === 0 || expenseName === '') 
  {
    kony.print(" [ERROR] Please enter the mandatory feilds: expense name and amount");
  } 
  else 
  {
    var updateSuccessCount = 0;
    var employeeExpense = [];
    var options = {};
    var whereCondition = {};
    whereCondition["name"] = expenseName;
    whereCondition["categoryID"] = parseInt(expenseCategory);
    
    options["whereCondition"] = whereCondition;
    options["projectionColumns"] = ["id"];
   
    
    var updateExpenseAndExpenseAssociatedWithEmployee = function(listOfEmployees, expenseId, amount){
      var options = {};
      var recordToUpdate = {};
      var employeeExpenseRecord = {};
     
      var individualShare = (amount/listOfEmployees.length);
      
      recordToUpdate["employeeShare"] = individualShare;
      
      var fetchOptions = {};
      var whereCondition = {};
      whereCondition["expenseID"] = expenseId;
      fetchOptions["whereCondition"] = whereCondition;
      fetchOptions["projectionColumns"] = ["employeeID"];
    
      getEmployeeExpenseRecords(fetchOptions,employeeExpenseFetchSuccess, exployeeExpenseFetchFailure);
      
      differUpdateOrCreateRecords = function(){
      
      for(var i = 0; i < listOfEmployees.length; i++){
        var shouldUpdateRecord = false;
        var employeeRecordToUpdate;
        
         for(var j = 0; j < employeeExpense.length; j++) {
            
             if(listOfEmployees[i] === employeeExpense[j]) {
               employeeRecordToUpdate = listOfEmployees[i];
               shouldUpdateRecord = true;
               break;
             }
         }
        
        if(shouldUpdateRecord) {
          updateSuccessCount ++;
          var primaryKeys = {};
          var options = {};
          primaryKeys["expenseID"] = expenseId;
          primaryKeys["employeeID"] = employeeRecordToUpdate;
          options["primaryKeys"] = primaryKeys;
          updateEmployeeExpense(recordToUpdate, options, exployeeExpenseUpdatesuccess, employeeExpenseUpdateFailure);
        } 
        else {
          updateSuccessCount ++;
           var employeeExpenseRecord = {};
           employeeExpenseRecord.employeeID = listOfEmployees[i];
           employeeExpenseRecord.expenseID = expenseId;
           employeeExpenseRecord.employeeShare = individualShare;
           employeeExpenseRecord.comment = expenseComment;
           employeeExpenseRecord.status = false;
          
           createEmployeeExpense(employeeExpenseRecord, employeeExpenseCreationSuccess, employeeExpenseCreationFailure);
        }
        }
        
        if( updateSuccessCount === listOfEmployees.length) {
          var record = {};
          record["expenditure"] = expenditure;
        
          var options = {};
          var primaryKeys =  {};
          primaryKeys["id"] = expenseId;
          options["primaryKeys"] = primaryKeys;
          updateExpense(record,options,expenseUpdationSuccess,expenseUpdationFailure);
        }
      }
    };
    
    
    var employeeExpenseCreationSuccess = function(records) {
      kony.print("Employee expense record created successfully!!" + JSON.stringify(records));
    };
    
    
    var employeeExpenseCreationFailure = function(error) {
      kony.print("Cound not create employee expsense record: " + JSON.stringify(error));
    };
    
   
    var employeeExpenseFetchSuccess = function(records) {
      kony.print("Employee expenses records fetched successfully!!");
      for(var i = 0; i < records.length; i++) {
        employeeExpense[i] = records[i].employeeID;
      }
      differUpdateOrCreateRecords();
    };
    
    var exployeeExpenseFetchFailure = function(error){
       kony.print("Employee expenses records fetched failed: " + JSON.stringify(error));
    }
  
    var exployeeExpenseUpdatesuccess = function(updated) {
      if(updated === true){
         kony.print("Employee expenses records updated successfully!!: " + updated);
      }
    };
    
    var employeeExpenseUpdateFailure = function(error){
      kony.print("Employee expense updatation failed for expense id:" + expenseId + "Error :" + JSON.stringiy(error)); 
    };
    
    var expenseUpdationSuccess = function(updated) {
      kony.print("Expense updated successfully for expenseID!! :" + expenseId);
    };
    
    var expenseUpdationFailure = function(error){
      kony.print("Failure in expense updation for expenseID: " + expenseId + "Error:" + JSON.stringiy(error));
    };
    
    var getExpenseIDSuccess = function(record) {
        expenseId = record[0].id;
        kony.print("Expense records fetched successfully for expenseID: " + expenseId);
        updateExpenseAndExpenseAssociatedWithEmployee(listOfEmployees,expenseId,expenditure);
    };

    var getExpenseIDFailure = function(error) {
      kony.print("Could not fetch expense records: " + JSON.stringify(error));
    };

    getExpenseRecords(options, getExpenseIDSuccess, getExpenseIDFailure);
  }
}