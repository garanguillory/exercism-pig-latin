var pigLatin = {

	vowelmatch: function(word){
		var wordArray = String(word).split('');
			if(wordArray[0].match(/^[aeiou]/i)){
				return true;
			}
	},

	swap: function(word,number){
		var shift = word.slice(0,number)
		var last = word.slice(number,word.length);
			return last + shift + 'ay';
	},

	translate: function(input){
		var array = input.split(' ');
		var answer = [];
		for(var i=0; i<array.length; i++){
			if(this.vowelmatch(array[i])){
				answer.push(array[i]+'ay');
			} else if(array[i].match(/(^sch|^squ|^thr)/i)) {
				answer.push(this.swap(array[i],3));
			} else if(array[i].match(/(^sh|^ch|^qu|^th)/i)) {
				answer.push(this.swap(array[i],2));
			} else {
				answer.push(this.swap(array[i],1));
			}
		}
		return answer.join(' ');
	}

};


module.exports = pigLatin;