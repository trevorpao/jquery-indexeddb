var DB = {
	NAME : "dbName",
	OBJECT_STORE_1 : "objectStore1",
	OBJECT_STORE_2 : "objectStore2",
	OBJECT_STORE_3 : "objectStore3",
	OBJECT_STORE_4 : "objectStore4",
	INDEX1_ON_OBJECT_STORE_1 : "Index1_ObjectStore1",
	INDEX1_ON_OBJECT_STORE_2 : "Index1_ObjectStore2"
};

var sample = (function() {

	var takenValues = {};
	return {
		obj : function() {
			return {
				"String" : "Sample " + new Date(),
				"Int" : this.integer(),
				"Float" : Math.random(),
				"Boolean" : true
			};
		},
		integer : function(arg) {
			var res;
			do {
				res = parseInt(Math.random() * (arg || 1000), 10);
			} while (takenValues[res]);
			takenValues[res] = true;
			return res;
		}
	};
}());
