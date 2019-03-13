define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "expense", "objectService" : "ExpenseTrackerOS"};
	
	var setterFunctions = {
		categoryID : function(val, state){
			context["field"]  = "categoryID";
			context["metadata"] = (objectMetadata ? objectMetadata["categoryID"] : null);
			state['categoryID'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
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
		expenditure : function(val, state){
			context["field"]  = "expenditure";
			context["metadata"] = (objectMetadata ? objectMetadata["expenditure"] : null);
			state['expenditure'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		id : function(val, state){
			context["field"]  = "id";
			context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
			state['id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
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
		name : function(val, state){
			context["field"]  = "name";
			context["metadata"] = (objectMetadata ? objectMetadata["name"] : null);
			state['name'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		SoftDeleteFlag : function(val, state){
			context["field"]  = "SoftDeleteFlag";
			context["metadata"] = (objectMetadata ? objectMetadata["SoftDeleteFlag"] : null);
			state['SoftDeleteFlag'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
	};
	
	
	//Create the Model Class
	function expense(defaultValues){
		var privateState = {};
			context["field"]  = "categoryID";
			context["metadata"] = (objectMetadata ? objectMetadata["categoryID"] : null);
			privateState.categoryID = defaultValues?(defaultValues["categoryID"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["categoryID"], context):null):null;
			context["field"]  = "CreatedBy";
			context["metadata"] = (objectMetadata ? objectMetadata["CreatedBy"] : null);
			privateState.CreatedBy = defaultValues?(defaultValues["CreatedBy"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["CreatedBy"], context):null):null;
			context["field"]  = "CreatedDateTime";
			context["metadata"] = (objectMetadata ? objectMetadata["CreatedDateTime"] : null);
			privateState.CreatedDateTime = defaultValues?(defaultValues["CreatedDateTime"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["CreatedDateTime"], context):null):null;
			context["field"]  = "expenditure";
			context["metadata"] = (objectMetadata ? objectMetadata["expenditure"] : null);
			privateState.expenditure = defaultValues?(defaultValues["expenditure"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["expenditure"], context):null):null;
			context["field"]  = "id";
			context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
			privateState.id = defaultValues?(defaultValues["id"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["id"], context):null):null;
			context["field"]  = "LastUpdatedBy";
			context["metadata"] = (objectMetadata ? objectMetadata["LastUpdatedBy"] : null);
			privateState.LastUpdatedBy = defaultValues?(defaultValues["LastUpdatedBy"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["LastUpdatedBy"], context):null):null;
			context["field"]  = "LastUpdatedDateTime";
			context["metadata"] = (objectMetadata ? objectMetadata["LastUpdatedDateTime"] : null);
			privateState.LastUpdatedDateTime = defaultValues?(defaultValues["LastUpdatedDateTime"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["LastUpdatedDateTime"], context):null):null;
			context["field"]  = "name";
			context["metadata"] = (objectMetadata ? objectMetadata["name"] : null);
			privateState.name = defaultValues?(defaultValues["name"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["name"], context):null):null;
			context["field"]  = "SoftDeleteFlag";
			context["metadata"] = (objectMetadata ? objectMetadata["SoftDeleteFlag"] : null);
			privateState.SoftDeleteFlag = defaultValues?(defaultValues["SoftDeleteFlag"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["SoftDeleteFlag"], context):null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"categoryID" : {
					get : function(){
						context["field"]  = "categoryID";
			        	context["metadata"] = (objectMetadata ? objectMetadata["categoryID"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.categoryID, context);},
					set : function(val){
						setterFunctions['categoryID'].call(this,val,privateState);
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
				"expenditure" : {
					get : function(){
						context["field"]  = "expenditure";
			        	context["metadata"] = (objectMetadata ? objectMetadata["expenditure"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.expenditure, context);},
					set : function(val){
						setterFunctions['expenditure'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"id" : {
					get : function(){
						context["field"]  = "id";
			        	context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.id, context);},
					set : function(val){throw Error("id cannot be changed."); },
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
				"name" : {
					get : function(){
						context["field"]  = "name";
			        	context["metadata"] = (objectMetadata ? objectMetadata["name"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.name, context);},
					set : function(val){
						setterFunctions['name'].call(this,val,privateState);
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
			});
			
			//converts model object to json object.
			this.toJsonInternal = function() {
				return Object.assign({}, privateState);
			};

			//overwrites object state with provided json value in argument.
			this.fromJsonInternal = function(value) {
									privateState.categoryID = value?(value["categoryID"]?value["categoryID"]:null):null;
					privateState.CreatedBy = value?(value["CreatedBy"]?value["CreatedBy"]:null):null;
					privateState.CreatedDateTime = value?(value["CreatedDateTime"]?value["CreatedDateTime"]:null):null;
					privateState.expenditure = value?(value["expenditure"]?value["expenditure"]:null):null;
					privateState.id = value?(value["id"]?value["id"]:null):null;
					privateState.LastUpdatedBy = value?(value["LastUpdatedBy"]?value["LastUpdatedBy"]:null):null;
					privateState.LastUpdatedDateTime = value?(value["LastUpdatedDateTime"]?value["LastUpdatedDateTime"]:null):null;
					privateState.name = value?(value["name"]?value["name"]:null):null;
					privateState.SoftDeleteFlag = value?(value["SoftDeleteFlag"]?value["SoftDeleteFlag"]:null):null;
			};

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(expense);
	
	//Create new class level validator object
	BaseModel.Validator.call(expense);
	
	var registerValidatorBackup = expense.registerValidator;
	
	expense.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( expense.isValid(this, propName, val) ){
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
				{
					name : "expense_employee_expense",
					targetObject : "employee_expense",
					type : "OneToMany",
					cascade : "false",
					relationFields : [
						{
							sourceField : "id",
							targetField : "expenseID"
						},
					]
				},
	];
	
	expense.relations = relations;
	
	expense.prototype.isValid = function(){
		return expense.isValid(this);
	};
	
	expense.prototype.objModelName = "expense";
	
	/*This API allows registration of preprocessors and postprocessors for model.
	 *It also fetches object metadata for object. 
	 *Options Supported
	 *preProcessor  - preprocessor function for use with setters.
	 *postProcessor - post processor callback for use with getters.
	 *getFromServer - value set to true will fetch metadata from network else from cache.
	 */
	expense.registerProcessors = function(options, successCallback, failureCallback) {
	
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
		
		kony.mvc.util.ProcessorUtils.getMetadataForObject("ExpenseTrackerOS", "expense", options, metaDataSuccess, metaDataFailure);
	};
	
	//clone the object provided in argument.
	expense.clone = function(objectToClone) {
		var clonedObj = new expense();
		clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
		return clonedObj;
	};
	
	return expense;
});