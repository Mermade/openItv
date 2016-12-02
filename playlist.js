var crypto = require('crypto');
var http = require('http');
var https = require('https');

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
	console.log(productionId);
	//var prodId = productionId.split('_').join('/').split('.').join('#');
	var prodId = productionId.split('_').join('/').split('.').join('#');
	//var prodId = productionId;
	console.log(prodId);
	var salt = sharedKey[platform];
	if (!salt) salt = '';
	console.log('salt:'+salt);
	var saltedHash = salt + prodId;
	return sha1(saltedHash).toUpperCase();
}

if (process.argv.length > 3) {

	var platform = process.argv[2];
	var prodId = process.argv[3];

	var options = {};
	options.headers = {};
	options.headers.hmac = generate_hmac_token(prodId, platform);
	options.headers['Content-Type'] = 'application/json';

	prodId = prodId.split('/').join('_').split('#').join('.');
	options.path = '/playlist/itvonline/'+(platform.toLowerCase())+'/'+prodId;
	options.host = 'old-origin-api.itv.com';

	console.log(options.headers.hmac);

	https.get(options,function(res){
		var data = '';
		res.on('data',function(chunk){
			data += chunk;
		});
		res.on('error',function(err){
		});
		res.on('end',function(){
			console.log(res.statusCode+' '+res.statusMessage);
			console.log(JSON.stringify(res.headers,null,2));
			try {
				var obj = JSON.parse(data);
				console.log(JSON.stringify(obj,null,2));
				console.log();
				console.log(obj.Playlist.Video.Base+obj.Playlist.Video.MediaFiles[0].Href);
				console.log();
				console.log('ffmpeg -protocol_whitelist crypto -i {infile] {outfile}');
			}
			catch (ex) {
				console.log(ex.message);
				console.log(data);
			}

			//console.log('./ffmpeg.exe -protocol_whitelist file,http,https,tcp,tls,crypto -i https://itvandroidhls-vh.akamaihd.net/i/priority/Catchup/1/9855/0061/001/1-9855-0061-001_Almost-Naked-Animals--Series-2-_TX271116_BL,300,400,600,800,1200,_16X9.mp4.csmil/master.m3u8?hdnea=st=1480685195~exp=1480771595~acl=/*~hmac=e09522cf4a800cd23b863a1f0cdab11a5f17e22e2e64c817d5d0c7ef91cfd831 ~/test.ts');
		});
	});

}
else {
	console.log('Usage: playlist {platform} {productionId}');
	console.log('e.g. : playlist Samsung 1_9855_0061.001');
	console.log('or   : playlist Samsung 1/9855/0061#001');
}
