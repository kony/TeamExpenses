define([],function(){
	var mappings = {
		"CreatedBy" : "CreatedBy",
		"CreatedDateTime" : "CreatedDateTime",
		"description" : "description",
		"id" : "id",
		"LastUpdatedBy" : "LastUpdatedBy",
		"LastUpdatedDateTime" : "LastUpdatedDateTime",
		"name" : "name",
		"SoftDeleteFlag" : "SoftDeleteFlag",
	};
	Object.freeze(mappings);
	
	var typings = {
		"CreatedBy" : "string",
		"CreatedDateTime" : "date",
		"description" : "string",
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
		tableName : "category"
	};
	Object.freeze(config);
	
	return config;
})
