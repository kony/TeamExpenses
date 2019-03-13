function createExpense(recordExpense, successCB, failureCB) {
  
  var createExpensesSuccess = function(record) {
    kony.print("Expense '" + record.name + "' successfully created!");
    successCB(record);
  };
  
  var createExpenseFailure = function(error) {
    kony.print("Couldn't create expense. Error : " + JSON.stringify(error));
    failureCB(error);
  };
  
  objExpense.create(recordExpense, {}, createExpensesSuccess, createExpenseFailure);
}

function updateExpense(record, options, successCallback, failureCallback) {
  
  var updateExpenseSuccess = function(updated) {
    kony.print("Expense successfully updated!");
    successCallback(true);
  };
  
  var updateExpenseFailure = function(error) {
     kony.print("Couldn't update record. Error : " + JSON.stringify(error));
    failureCallback(true);

  };
  
  objExpense.updateByPK(record, options, updateExpenseSuccess, updateExpenseFailure);
}

function deleteExpense(record, successCallback, failureCallback) {
  
  var deleteExpenseSuccess = function(deleted) {
    kony.print("Expense '" + record.id + "' successfully deleted!");
    successCallback(true);

  };
  
  var deleteExpenseFailure = function(error) {
    kony.print("Couldn't delete record. Error : " + JSON.stringify(error));
    failureCallback(true);
  };
  
  var primaryKeys = {};
  primaryKeys["id"] = record.id;
  var options = {};
  options["primaryKeys"] = primaryKeys; 
  objExpense.deleteByPK(options, deleteExpenseSuccess, deleteExpenseFailure);
}

/*
 * Method to fetch just expense records.
 */
function getExpenseRecords(options, successCallback, failureCallback) {
  
  var readExpenseSuccess = function(records) {
    kony.print("Expense records successfully fetched!");
    successCallback(records);
  };
  
  var readExpenseFailure = function(error) {
    kony.print("Couldn't fetch records. Error : " + JSON.stringify(error));
    failureCallback(error);
  };
  
  objExpense.get(options, readExpenseSuccess, readExpenseFailure);
}

/*
 * Method to fetch the category name and the associated expenditure.
 */
function getCategoryExpenseObject(successCallback, failureCallback) {
  
  var expenseRecords;
  var categoryRecords;
  
  var buildCategoryExpenseObject = function(expenseRecords, categoryRecords) {
    var categoryExpenseObj = [];
    var index = 0;
    
    for(var j = 0; j < expenseRecords.length; j++) {
      
      for(var i = 0; i < categoryRecords.length; i++) {
        var expenseRecord = expenseRecords[j];
        var categoryRecord = categoryRecords[i];
        
        if(expenseRecord.categoryID === categoryRecord.id) {
          categoryExpenseObj[index] = {};
          
          categoryExpenseObj[index].image = "wallet.png";
          categoryExpenseObj[index].expenseID = expenseRecord.id;
          categoryExpenseObj[index].expenseName = expenseRecord.name;
          categoryExpenseObj[index].categoryName = categoryRecord.name;
          categoryExpenseObj[index].categoryID = categoryRecord.id;
      	  categoryExpenseObj[index].expenditure = "₹" + expenseRecord.expenditure;
          
          var date = new Date(expenseRecord.CreatedDateTime);
          date = date.toISOString().substring(0, 10);
          categoryExpenseObj[index].date = date;
          
          index++;
        }
      }
    }
    
    successCallback(categoryExpenseObj);
  };
  
  var getCategorySuccess = function(records) {
    categoryRecords = records;
    buildCategoryExpenseObject(expenseRecords, categoryRecords);
  };
  
  var getCategoryFailure = function(error) {
    failureCallback(null);
  };
  
  var getExpenseSuccess = function(records) {
    expenseRecords = records;
    getCategoryRecords(getCategorySuccess, getCategoryFailure);
  };
  
  var getExpenseFailure = function(error) {
    failureCallback(null);
  };
  
  getExpenseRecords({}, getExpenseSuccess, getExpenseFailure);
}

/*
 * Method to fetch total expenses for each category
 */
function getTotalExpenseForEachCategory(successCallback, failureCallback){
  
  var expenseRecords;
  var categoryRecords;
  
  var buildExpenseForEachCategory = function(expenseRecords, categoryRecords){

    var expenseForCategory = [];
  
    for(var i = 0; i < categoryRecords.length; i++) {
        
      var totalExpense = 0;
      
      for(var j = 0; j < expenseRecords.length; j++) {
        
        var categoryRecord = categoryRecords[i];
        var expenseRecord = expenseRecords[j];
      
        if(categoryRecord.id === expenseRecord.categoryID) {
            totalExpense += expenseRecord.expenditure;
        }
      }
      
      expenseForCategory[i] = {};
      expenseForCategory[i].categoryName = categoryRecords[i].name;
      expenseForCategory[i].totalExpense = totalExpense;
    }
    
    successCallback(expenseForCategory);
  }
  
  var getExpenseSuccess = function(records){
    expenseRecords = records;
    buildExpenseForEachCategory(expenseRecords, categoryRecords);
  };
  
  var getExpenseFailure = function(error){
    failureCallback(null);
  };
  
  var getCategoryRecordsSuccess = function(records){
    categoryRecords = records;
    getExpenseRecords({}, getExpenseSuccess, getExpenseFailure);
  };
  
  var getCategoryRecordsFailure = function(error){
    failureCallback(null);
  };
  
  getCategoryRecords(getCategoryRecordsSuccess, getCategoryRecordsFailure);
}
