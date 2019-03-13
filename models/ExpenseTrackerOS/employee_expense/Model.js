define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "employee_expense", "objectService" : "ExpenseTrackerOS"};
	
	var setterFunctions = {
		comment : function(val, state){
			context["field"]  = "comment";
			context["metadata"] = (objectMetadata ? objectMetadata["comment"] : null);
			state['comment'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		CreatedBy : function(val, state){
			context["field"]  = "CreatedBy";
			context["metadata"] = (objectMetadata ? objectMetadata["CreatedBy"] : null);
			state['CreatedBy'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		CreatedDateTime : function(val, state){
			context["field"]  = "CreatedDateTime";
			context["metadata"] = (objectMetadata ? objectMetadata["CreatedDateTime"] : null);
			state['CreatedDateTime'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		employeeID : function(val, state){
			context["field"]  = "employeeID";
			context["metadata"] = (objectMetadata ? objectMetadata["employeeID"] : null);
			state['employeeID'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		employeeShare : function(val, state){
			context["field"]  = "employeeShare";
			context["metadata"] = (objectMetadata ? objectMetadata["employeeShare"] : null);
			state['employeeShare'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		expenseID : function(val, state){
			context["field"]  = "expenseID";
			context["metadata"] = (objectMetadata ? objectMetadata["expenseID"] : null);
			state['expenseID'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		LastUpdatedBy : function(val, state){
			context["field"]  = "LastUpdatedBy";
			context["metadata"] = (objectMetadata ? objectMetadata["LastUpdatedBy"] : null);
			state['LastUpdatedBy'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		LastUpdatedDateTime : function(val, state){
			context["field"]  = "LastUpdatedDateTime";
			context["metadata"] = (objectMetadata ? objectMetadata["LastUpdatedDateTime"] : null);
			state['LastUpdatedDateTime'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		SoftDeleteFlag : function(val, state){
			context["field"]  = "SoftDeleteFlag";
			context["metadata"] = (objectMetadata ? objectMetadata["SoftDeleteFlag"] : null);
			state['SoftDeleteFlag'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		status : function(val, state){
			context["field"]  = "status";
			context["metadata"] = (objectMetadata ? objectMetadata["status"] : null);
			state['status'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
	};
	
	
	//Create the Model Class
	function employee_expense(defaultValues){
		var privateState = {};
			context["field"]  = "comment";
			context["metadata"] = (objectMetadata ? objectMetadata["comment"] : null);
			privateState.comment = defaultValues?(defaultValues["comment"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["comment"], context):null):null;
			context["field"]  = "CreatedBy";
			context["metadata"] = (objectMetadata ? objectMetadata["CreatedBy"] : null);
			privateState.CreatedBy = defaultValues?(defaultValues["CreatedBy"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["CreatedBy"], context):null):null;
			context["field"]  = "CreatedDateTime";
			context["metadata"] = (objectMetadata ? objectMetadata["CreatedDateTime"] : null);
			privateState.CreatedDateTime = defaultValues?(defaultValues["CreatedDateTime"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["CreatedDateTime"], context):null):null;
			context["field"]  = "employeeID";
			context["metadata"] = (objectMetadata ? objectMetadata["employeeID"] : null);
			privateState.employeeID = defaultValues?(defaultValues["employeeID"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["employeeID"], context):null):null;
			context["field"]  = "employeeShare";
			context["metadata"] = (objectMetadata ? objectMetadata["employeeShare"] : null);
			privateState.employeeShare = defaultValues?(defaultValues["employeeShare"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["employeeShare"], context):null):null;
			context["field"]  = "expenseID";
			context["metadata"] = (objectMetadata ? objectMetadata["expenseID"] : null);
			privateState.expenseID = defaultValues?(defaultValues["expenseID"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["expenseID"], context):null):null;
			context["field"]  = "LastUpdatedBy";
			context["metadata"] = (objectMetadata ? objectMetadata["LastUpdatedBy"] : null);
			privateState.LastUpdatedBy = defaultValues?(defaultValues["LastUpdatedBy"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["LastUpdatedBy"], context):null):null;
			context["field"]  = "LastUpdatedDateTime";
			context["metadata"] = (objectMetadata ? objectMetadata["LastUpdatedDateTime"] : null);
			privateState.LastUpdatedDateTime = defaultValues?(defaultValues["LastUpdatedDateTime"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["LastUpdatedDateTime"], context):null):null;
			context["field"]  = "SoftDeleteFlag";
			context["metadata"] = (objectMetadata ? objectMetadata["SoftDeleteFlag"] : null);
			privateState.SoftDeleteFlag = defaultValues?(defaultValues["SoftDeleteFlag"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["SoftDeleteFlag"], context):null):null;
			context["field"]  = "status";
			context["metadata"] = (objectMetadata ? objectMetadata["status"] : null);
			privateState.status = defaultValues?(defaultValues["status"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["status"], context):null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"comment" : {
					get : function(){
						context["field"]  = "comment";
			        	context["metadata"] = (objectMetadata ? objectMetadata["comment"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.comment, context);},
					set : function(val){
						setterFunctions['comment'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"CreatedBy" : {
					get : function(){
						context["field"]  = "CreatedBy";
			        	context["metadata"] = (objectMetadata ? objectMetadata["CreatedBy"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.CreatedBy, context);},
					set : function(val){
						setterFunctions['CreatedBy'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"CreatedDateTime" : {
					get : function(){
						context["field"]  = "CreatedDateTime";
			        	context["metadata"] = (objectMetadata ? objectMetadata["CreatedDateTime"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.CreatedDateTime, context);},
					set : function(val){
						setterFunctions['CreatedDateTime'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"employeeID" : {
					get : function(){
						context["field"]  = "employeeID";
			        	context["metadata"] = (objectMetadata ? objectMetadata["employeeID"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.employeeID, context);},
					set : function(val){throw Error("employeeID cannot be changed."); },
					enumerable : true,
				},
				"employeeShare" : {
					get : function(){
						context["field"]  = "employeeShare";
			        	context["metadata"] = (objectMetadata ? objectMetadata["employeeShare"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.employeeShare, context);},
					set : function(val){
						setterFunctions['employeeShare'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"expenseID" : {
					get : function(){
						context["field"]  = "expenseID";
			        	context["metadata"] = (objectMetadata ? objectMetadata["expenseID"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.expenseID, context);},
					set : function(val){throw Error("expenseID cannot be changed."); },
					enumerable : true,
				},
				"LastUpdatedBy" : {
					get : function(){
						context["field"]  = "LastUpdatedBy";
			        	context["metadata"] = (objectMetadata ? objectMetadata["LastUpdatedBy"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.LastUpdatedBy, context);},
					set : function(val){
						setterFunctions['LastUpdatedBy'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"LastUpdatedDateTime" : {
					get : function(){
						context["field"]  = "LastUpdatedDateTime";
			        	context["metadata"] = (objectMetadata ? objectMetadata["LastUpdatedDateTime"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.LastUpdatedDateTime, context);},
					set : function(val){
						setterFunctions['LastUpdatedDateTime'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"SoftDeleteFlag" : {
					get : function(){
						context["field"]  = "SoftDeleteFlag";
			        	context["metadata"] = (objectMetadata ? objectMetadata["SoftDeleteFlag"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.SoftDeleteFlag, context);},
					set : function(val){
						setterFunctions['SoftDeleteFlag'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"status" : {
					get : function(){
						context["field"]  = "status";
			        	context["metadata"] = (objectMetadata ? objectMetadata["status"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.status, context);},
					set : function(val){
						setterFunctions['status'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});
			
			//converts model object to json object.
			this.toJsonInternal = function() {
				return Object.assign({}, privateState);
			};

			//overwrites object state with provided json value in argument.
			this.fromJsonInternal = function(value) {
									privateState.comment = value?(value["comment"]?value["comment"]:null):null;
					privateState.CreatedBy = value?(value["CreatedBy"]?value["CreatedBy"]:null):null;
					privateState.CreatedDateTime = value?(value["CreatedDateTime"]?value["CreatedDateTime"]:null):null;
					privateState.employeeID = value?(value["employeeID"]?value["employeeID"]:null):null;
					privateState.employeeShare = value?(value["employeeShare"]?value["employeeShare"]:null):null;
					privateState.expenseID = value?(value["expenseID"]?value["expenseID"]:null):null;
					privateState.LastUpdatedBy = value?(value["LastUpdatedBy"]?value["LastUpdatedBy"]:null):null;
					privateState.LastUpdatedDateTime = value?(value["LastUpdatedDateTime"]?value["LastUpdatedDateTime"]:null):null;
					privateState.SoftDeleteFlag = value?(value["SoftDeleteFlag"]?value["SoftDeleteFlag"]:null):null;
					privateState.status = value?(value["status"]?value["status"]:null):null;
			};

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(employee_expense);
	
	//Create new class level validator object
	BaseModel.Validator.call(employee_expense);
	
	var registerValidatorBackup = employee_expense.registerValidator;
	
	employee_expense.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( employee_expense.isValid(this, propName, val) ){
					return setterBackup.apply(null, arguments);
				}else{
					throw Error("Validation failed for "+ propName +" : "+val);
				}
			}
			setterFunctions[arguments[0]].changed = true;
		}
		return registerValidatorBackup.apply(null, arguments);
	}
	
	//Extending Model for custom operations
	
	var relations = [
	];
	
	employee_expense.relations = relations;
	
	employee_expense.prototype.isValid = function(){
		return employee_expense.isValid(this);
	};
	
	employee_expense.prototype.objModelName = "employee_expense";
	
	/*This API allows registration of preprocessors and postprocessors for model.
	 *It also fetches object metadata for object. 
	 *Options Supported
	 *preProcessor  - preprocessor function for use with setters.
	 *postProcessor - post processor callback for use with getters.
	 *getFromServer - value set to true will fetch metadata from network else from cache.
	 */
	employee_expense.registerProcessors = function(options, successCallback, failureCallback) {
	
		if(!options) {
			options = {};
		}
			
		if(options && ((options["preProcessor"] && typeof(options["preProcessor"]) === "function") || !options["preProcessor"])) {
			preProcessorCallback = options["preProcessor"];
		}
		
		if(options && ((options["postProcessor"] && typeof(options["postProcessor"]) === "function") || !options["postProcessor"])){
			postProcessorCallback = options["postProcessor"];
		}
		
		function metaDataSuccess(res) {
			objectMetadata = kony.mvc.util.ProcessorUtils.convertObjectMetadataToFieldMetadataMap(res);
			successCallback();
		}
		
		function metaDataFailure(err) {
			failureCallback(err);
		}
		
		kony.mvc.util.ProcessorUtils.getMetadataForObject("ExpenseTrackerOS", "employee_expense", options, metaDataSuccess, metaDataFailure);
	};
	
	//clone the object provided in argument.
	employee_expense.clone = function(objectToClone) {
		var clonedObj = new employee_expense();
		clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
		return clonedObj;
	};
	
	return employee_expense;
});