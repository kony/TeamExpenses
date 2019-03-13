define([],function(){
	var mappings = {
		"categoryID" : "categoryID",
		"CreatedBy" : "CreatedBy",
		"CreatedDateTime" : "CreatedDateTime",
		"expenditure" : "expenditure",
		"id" : "id",
		"LastUpdatedBy" : "LastUpdatedBy",
		"LastUpdatedDateTime" : "LastUpdatedDateTime",
		"name" : "name",
		"SoftDeleteFlag" : "SoftDeleteFlag",
	};
	Object.freeze(mappings);
	
	var typings = {
		"categoryID" : "number",
		"CreatedBy" : "string",
		"CreatedDateTime" : "date",
		"expenditure" : "number",
		"id" : "number",
		"LastUpdatedBy" : "string",
		"LastUpdatedDateTime" : "date",
		"name" : "string",
		"SoftDeleteFlag" : "boolean",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"id",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "ExpenseTrackerOS",
		tableName : "expense"
	};
	Object.freeze(config);
	
	return config;
})
