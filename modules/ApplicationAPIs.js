//Type your code here

var objCategory;
var objEmployee;
var objExpense;
var objEmployeeExpense;

var objSvcTeamExpense;

function setup() {
  frmLoginKA.flxMainKA.setVisibility(false);
  frmLoginKA.flxPopupKA.setVisibility(true);
  
  //Enable logger..
  kony.logger.activatePersistors(kony.logger.consolePersistor);
  kony.logger.currentLogLevel = kony.logger.logLevel.TRACE;
  
  var setupSuccess = function() {
    frmLoginKA.flxMainKA.setVisibility(true);
    frmLoginKA.flxPopupKA.setVisibility(false);
    
    try {
      objSvcTeamExpense = new kony.sdk.KNYObjSvc("ExpenseTrackerOS");
      
      objCategory = objSvcTeamExpense.getSdkObjectByName("category");
      objEmployee = objSvcTeamExpense.getSdkObjectByName("employee");
      objExpense = objSvcTeamExpense.getSdkObjectByName("expense");
      objEmployeeExpense = objSvcTeamExpense.getSdkObjectByName("employee_expense");
      syncExpenseOS();
      frmDashboardKA.show();
      
    } catch (exp) {
      kony.print("Exception in creating the object or object service.");
    }
  };
  
  var setupFailure = function(error) {
    kony.print("Setup failure! Error : " + JSON.stringify(error));
  };
  
  kony.sdk.currentInstance.OfflineObjects.setup({}, setupSuccess, setupFailure);
}


function drop() {
  
  var dropSuccess = function() {
    kony.print("Drop success!");
    
    objExpense = null;
    objCategory = null;
    objEmployee = null;
    objEmployeeExpense = null;
    objSvcTeamExpense = null;
  };
  
  var dropFailure = function(error) {
    kony.print("Drop failure! Error : " + JSON.stringify(error));
  };
  
  kony.sdk.currentInstance.OfflineObjects.drop({}, dropSuccess, dropFailure);
}


function reset() {
  
  var resetSuccess = function() {
    kony.print("Reset success!");
    
    try {
      objSvcTeamExpense = new kony.sdk.KNYObjSvc("ExpenseTrackerOS");
      
      objCategory = objSvcTeamExpense.getSdkObjectByName("category");
      objEmployee = objSvcTeamExpense.getSdkObjectByName("employee");
      objExpense = objSvcTeamExpense.getSdkObjectByName("expense");
      objEmployeeExpense = objSvcTeamExpense.getSdkObjectByName("employee_expense");
      syncExpenseOS();
      
    } catch (exp) {
      kony.print("Exception in creating the object or object service.");
    }
  };
  
  var resetFailure = function(error) {
    kony.print("Reset failure! Error : " + JSON.stringify(error));
  };
  
  kony.sdk.currentInstance.OfflineObjects.reset({}, resetSuccess, resetFailure);
}

function syncExpenseOS() {
  var syncSuccess = function(records) {
    populateDataInDashboardForm();
  };
  
  var syncFailure = function(err) {
    
  };
  
  var syncProgress = function(err) {
    
  };
  
  objSvcTeamExpense.startSync({}, syncSuccess, syncFailure, syncProgress);
}