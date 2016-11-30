/* openItv parseApi.js */

var path = require('path');
var ajv = require('ajv')();
var oa2js = require('openapi2js');

var swaggerSchema = require(path.resolve('./validation/swagger2Schema.json'));
var mercury = require(path.resolve('./mercury/swagger.json'));

console.log('Validating swagger spec...');
var validate = ajv.compile(swaggerSchema);
validate(mercury,{
	allErrors: true,
	verbose: true
});
var errors = validate.errors;
if (errors) {
	console.log(errors);
}
else {
    console.log('Valid swagger 2.0');
    console.log('Creating itvMercury.js API');
    oa2js.openAPI2js('./mercury/swagger.json','./mercury/itvMercury.js');
}
