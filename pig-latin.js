// second version (remove the beginninng of the word (unshift)
// and add it to the end + ay (shift))
var pigLatin = {

	translate: function(string){
		var stringArray = string.split(' ');

		var vowelMatch = function(array){
				return array.map(function(element){
						return element.charAt(0).match(/[aeiou]/ig) ? true : false;
				});
		};

		var shiftRight = function(array,num) {
			return array.map(function(element,index){
				return array[(index+num)%array.length];
			});
		}
		// edit to match just qu
		var quMatch = function(array){
				return array.map(function(element){
						if(element.charAt(0).match(/q/ig) && element.charAt(1).match(/u/ig) || 
							element.charAt(0).match(/[^aeiou]/ig) && element.charAt(1).match(/q/ig) && element.charAt(2).match(/u/ig)){
								return true;
						} else {
								return false;
						}
				});
		};
		// edit to match consonant + qu
		var conQuMatch = function(array){
				return array.map(function(element){
						if(element.charAt(0).match(/q/ig) && element.charAt(1).match(/u/ig) || 
							element.charAt(0).match(/[^aeiou]/ig) && element.charAt(1).match(/q/ig) && element.charAt(2).match(/u/ig)){
								return true;
						} else {
								return false;
						}
				});
		};

		var thMatch = function(array){
				return array.map(function(element){
						if(element.charAt(0).match(/t/ig) && element.charAt(1).match(/h/ig) || 
							element.charAt(0).match(/t/ig) && element.charAt(1).match(/h/ig) && element.charAt(2).match(/[^aeiou]/ig)){
								return true;
						} else {
								return false;
						}
				});
		};

		var chMatch = function(array){
				return array.map(function(element){
						if(element.charAt(0).match(/c/ig) && element.charAt(1).match(/h/ig) || 
							element.charAt(0).match(/s/ig) && element.charAt(1).match(/c/ig) && element.charAt(2).match(/h/ig)){
								return true;
						} else {
								return false;
						}
				});
		};

		// SHIFT RIGHT FUNCTION (num is how many letters you want chop off
		// the beginning of the array and add to the end)
			// function shiftRight (array,num) {
			// 	return array.map(function(element,index){
			// 		return array[(index+num)%array.length];
			// 	});
			// }

	// is consonantMatch necessary???
		// var consonantMatch = function(array){
		// 		return array.map(function(element){
		// 				return element.charAt(0).match(/[^aeiou]/ig) ? true : false;
		// 		});
		// };

			// for(var i=0; i<stringArray.length; i++){
			// 		if(vowelMatch(stringArray[i])){
			// 			// do something
			// 		} else if(quMatch(stringArray[i])){
			// 			// do something
			// 		} else if (quMatch(stringArray[i]))
			// }

			return chMatch(stringArray);
	}

};

// if word begins with 'a' || 'e'
// keep the word and
// add 'ay' to the end of the word

// - **Rule 1**: If a word begins with a vowel sound, add an "ay" sound to
//   the end of the word.
// - **Rule 2**: If a word begins with a consonant sound, move it to the
//   end of the word, and then add an "ay" sound to the end of the word.

// 'qu' words 'queen' || 'question' && consonant + 'qu' words i.e. 'squish'
// 'th' words 'thick' && 'thr' words 'throw'
// 'sh' words 'shit'
// 'sch' words 'school' || 'schedule'

module.exports = pigLatin;