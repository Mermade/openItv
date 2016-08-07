var itv = require('./openItv.js');
var nitro = require('bbcparse/nitroSdk.js');
var xml2j = require('jgexml/xml2json.js');

var query = nitro.newQuery();
query.add(itv.commonBroadcasterItv)
	.add(itv.commonScreensizeBig);

var options = {};
options.Accept = 'application/xml';
nitro.make_request(itv.host,itv.getApi(itv.commonTargetXml,itv.commonPlatformMobile),'',query,options,function(obj){
	var json = xml2j.xml2json(obj);
	console.log(JSON.stringify(json,null,2));
});