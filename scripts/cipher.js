var Cipher = {
	// Cipher
	to: function (type, string, key) {
		string = (typeof string === 'string') ? string : '';
		key = (typeof key === 'number' && key <= 26 && key >= 0) ? key : 3;
		switch (type) {
			case 'base64':
				return btoa(string);
				break;
			case 'atbash':
				return this.atbash(string);
				break;
			case 'caesar':
				return this.caesar(string, key);
				break;
			default:
				return false;
		}
	},
	// Decipher
	from: function (type, string, key) {
		string = (typeof string === 'string') ? string : '';
		key = (typeof key === 'number' && key <= 26 && key >= 0) ? key : 3;
		switch (type) {
			case 'base64':
				return atob(string);
				break;
			case 'atbash':
				return this.atbash(string);
				break;
			case 'caesar':
				return this.caesar(string, 26 - key);
				break;
			default:
				return false;
		}
	},
	// Atbash
	atbash: function (string) {
		var temp = [];
		string = string.toUpperCase();
		for (var i = 0;i < string.length;i++) {
			temp[i] = (this.alphabet.indexOf(string.charAt(i)) !== -1) ? this.alphabet.charAt(25 - this.alphabet.indexOf(string.charAt(i))) : string.charAt(i);
		}
		return temp.join('');
	},
	// Caesar
	caesar: function (string, key) {
		var temp = [];
		string = string.toUpperCase();
		for (var i = 0;i < string.length;i++) {
			temp[i] = (this.alphabet.indexOf(string.charAt(i)) !== -1) ? this.alphabet.charAt((key + this.alphabet.indexOf(string.charAt(i))) % 26) : string.charAt(i);
		}
		return temp.join('');
	},
	alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
};
