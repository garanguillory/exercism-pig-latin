var pigLatin = {

	swap: function(word,number){
		var shift = word.slice(0,number)
		var last = word.slice(number,word.length);
			return last + shift + 'ay';
	},

	translate: function(input){
		var array = input.split(' ');
		var answer = [];
		for(var i=array.length-1; i>=0; i--){
			if(array[i].match(/^[aeiou]/i)){
				answer.unshift(array[i]+'ay');
			} else if(array[i].match(/(^sch|^squ|^thr|^sh|^ch|^qu|^th)/i)) {
				var number = array[i].match(/(^sch|^squ|^thr|^sh|^ch|^qu|^th)/i)[0].length;
				answer.unshift(this.swap(array[i],number));
			} else {
				answer.unshift(this.swap(array[i],1));
			}
		}
		return answer.join(' ');
	}

};


module.exports = pigLatin;