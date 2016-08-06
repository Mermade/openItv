/* checkSwagger.js */

var path = require('path');
var validator = require('is-my-json-valid');
var oa2js = require('openapi2js');

var swaggerSchema = require(path.resolve('./validation/swagger2Schema.json'));
var swagger = require(path.resolve('./swagger.json'));

console.log('Validating swagger spec...');
var validate = validator(swaggerSchema);
validate(swagger,{
	greedy: true,
	verbose: true
});
var errors = validate.errors;
if (errors) {
	console.log(errors);
}
else {
    console.log('Valid swagger 2.0');
    oa2js.openAPI2js('./swagger.json','./openItv.js');
}
