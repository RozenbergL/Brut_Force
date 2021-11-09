let fs = require('fs');
let arg = process.argv;
string = fs.readFileSync('string.txt');
string = string.toString();
substring = fs.readFileSync('substring.txt');
substring = substring.toString();


let hash_substr = 0;
for (i = 0; i < substring.length; i++){
	hash_substr = hash_substr + substring.charCodeAt(i);
}

let hash_str = 0;
str = string.slice(0, substring.length);
for (i = 0; i < str.length; i++){
	hash_str = hash_str + str.charCodeAt(i);
}

for (i = 0; i < string.length - substring.length + 1; i++){
	str = string.slice(i, i + substring.length);
	/*console.log(str);*/
	if (hash_str == hash_substr){
		if (str == substring){
			console.log(i + 1);
		}
	}
	hash_str = hash_str - string.charCodeAt(i) + string.charCodeAt(i + substring.length);
}
