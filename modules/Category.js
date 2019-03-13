//Type your code here

function createCategory() {
  
  var createCategorySuccess = function(record) {
    kony.print("Category '" + record.name + "' successfully created!");
    frmAddExpenseKA.show();
  };
  
  var createCategoryFailure = function(error) {
    kony.print("Couldn't create category. Error : " + JSON.stringify(error));
    frmAddExpenseKA.show();
  };
  
  var recordCategory = {};
  recordCategory.name = frmAddCategoryKA.tbxCategoryName.text;
  recordCategory.description = frmAddCategoryKA.tbxCategoryDesc.text;
  
  objCategory.create(recordCategory, {}, createCategorySuccess, createCategoryFailure);
}

function updateCategory(record) {
  
  var updateCategorySuccess = function(updated) {
    kony.print("Category '" + record.name + "' successfully updated!");
  };
  
  var updateCategoryFailure = function(error) {
    kony.print("Couldn't update record. Error : " + JSON.stringify(error));
  };
  
  var recordCategory = {};
  if(form1.txtCategoryName.text) {
    recordCategory.name = form1.txtCategoryName.text;
  }
  
  if(form1.txtCategoryDescription.text) {
    recordCategory.description = form1.txtCategoryDescription.text;
  }
  
  objCategory.updateByPK(recordCategory, {"primaryKeys" : record.id}, updateCategorySuccess, updateCategoryFailure);
}

function deleteCategory(record) {
  
  var deleteCategorySuccess = function(deleted) {
    kony.print("Category '" + record.name + "' successfully deleted!");
  };
  
  var deleteCategoryFailure = function(error) {
    kony.print("Couldn't delete record. Error : " + JSON.stringify(error));
  };
  
  objCategory.deleteByPK({"primaryKeys" : record.id}, deleteCategorySuccess, deleteCategoryFailure);
}

function getCategoryRecords(successCallback, failureCallback) {
  
  var readCategorySuccess = function(records) {
    kony.print("Category records successfully fetched!");
    successCallback(records);
  };
  
  var readCategoryFailure = function(error) {
    kony.print("Couldn't fetch records. Error : " + JSON.stringify(error));
    failureCallback(error);
  };
  
  objCategory.get({}, readCategorySuccess, readCategoryFailure);
}