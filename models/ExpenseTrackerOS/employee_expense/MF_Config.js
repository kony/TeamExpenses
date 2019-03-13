define([],function(){
	var mappings = {
		"comment" : "comment",
		"CreatedBy" : "CreatedBy",
		"CreatedDateTime" : "CreatedDateTime",
		"employeeID" : "employeeID",
		"employeeShare" : "employeeShare",
		"expenseID" : "expenseID",
		"LastUpdatedBy" : "LastUpdatedBy",
		"LastUpdatedDateTime" : "LastUpdatedDateTime",
		"SoftDeleteFlag" : "SoftDeleteFlag",
		"status" : "status",
	};
	Object.freeze(mappings);
	
	var typings = {
		"comment" : "string",
		"CreatedBy" : "string",
		"CreatedDateTime" : "date",
		"employeeID" : "string",
		"employeeShare" : "number",
		"expenseID" : "number",
		"LastUpdatedBy" : "string",
		"LastUpdatedDateTime" : "date",
		"SoftDeleteFlag" : "boolean",
		"status" : "boolean",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"expenseID",
					"employeeID",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "ExpenseTrackerOS",
		tableName : "employee_expense"
	};
	Object.freeze(config);
	
	return config;
})
