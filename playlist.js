var crypto = require('crypto');
var http = require('http');

function sha1(s) {
	var shasum = crypto.createHash('sha1');
	shasum.update(s);
	return shasum.digest('hex');
}

var sharedKey = {
   Samsung : 'aeaKuegnnadnau',
   Android : 'eKoShKddidoeAn',
   DotCom : '',
   Mobile : '',
   YouView : '',
   Freesat : '',
   PS3 : ''
}

function generate_hmac_token(productionId, platform) {
	console.log(platform);
	var prodId = productionId.split('/').join('-').split('#').join('_');
	console.log(prodId);
	console.log('salt:'+sharedKey[platform]);
	var saltedHash = sharedKey[platform] + prodId;
	return sha1(saltedHash).toUpperCase();
}

if (process.argv.length > 3) {

	var platform = process.argv[2];
	var prodId = process.argv[3];

	var options = {};
	options.headers = {};
	options.headers.hmac = generate_hmac_token(prodId, platform);
	options.headers['Content-Type'] = 'application/json';

	//prodId = prodId.split('/').join('_').split('#').join('.');

	options.path = '/playlist/itvonline/samsung/'+prodId;
	options.host = 'old-origin-api.itv.com';

	console.log(options.headers.hmac);

	http.get(options,function(res){
		var data = '';
		res.on('data',function(chunk){
			data += chunk;
		});
		res.on('error',function(err){
		});
		res.on('end',function(){
			console.log(data);
			console.log(JSON.stringify(res.headers,null,2));
			console.log(res.statusCode+' '+res.statusMessage);
		});
	});

}
else {
	console.log('Usage: playlist {platform} {productionId}');
}
