define([],function(){
	var mappings = {
		"CreatedBy" : "CreatedBy",
		"CreatedDateTime" : "CreatedDateTime",
		"id" : "id",
		"isAdmin" : "isAdmin",
		"LastUpdatedBy" : "LastUpdatedBy",
		"LastUpdatedDateTime" : "LastUpdatedDateTime",
		"name" : "name",
		"SoftDeleteFlag" : "SoftDeleteFlag",
	};
	Object.freeze(mappings);
	
	var typings = {
		"CreatedBy" : "string",
		"CreatedDateTime" : "date",
		"id" : "string",
		"isAdmin" : "boolean",
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
		tableName : "employee"
	};
	Object.freeze(config);
	
	return config;
})
