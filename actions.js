//ALEKSEY MAKSIMENKO 2016 (c)
function begin() {

	confcreate.onclick = function() {
		var vlan = document.getElementById('vlan');
		var ip = document.getElementById('ip');
		var mask = document.getElementById('mask');
		var config = document.getElementById('config');
		var template = config_template;
		template = template.replace(new RegExp('{{VLAN}}','g'),vlan.value);
		template = template.replace(new RegExp('{{IP_ADDR}}','g'),ip.value);
		template = template.replace(new RegExp('{{MASK}}','g'),mask.value);
		config.innerHTML = template;	
	};

	download.onclick = function() {
		downloadInnerText('cisco_config.txt', 'config','text/plain');
	};

	function downloadInnerText(filename, elId, mimeType) {
		var el = document.getElementById(elId);
		var link = document.createElement('a');
		mimeType = mimeType || 'text/plain';
		link.setAttribute('download', filename);
		link.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(el.innerText));
		link.click(); 
	}	
};
document.addEventListener("DOMContentLoaded", begin);
