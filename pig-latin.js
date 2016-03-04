// second version (remove the beginninng of the word (unshift)
// and add it to the end + ay (shift))
var pigLatin = {

	translate: function(string){

		var stringArray = string.split(' ');
		// array of individual arrays
		// each element is a string split character by character
		var wordSplit = 
			stringArray.map(function(element){
					return element.split('');
			});

		// RegExp Objects
			var consonant = new RegExp("^[^aeiou]","i")
			var vowel = new RegExp("^[aeiou]","i");
			var sh = new RegExp("^sh","i");
			var sch = new RegExp("^sch","i");
			var ch = new RegExp("^ch","i");
			var squ = new RegExp("^squ","i");
			var qu = new RegExp("^qu","i");
			var thr = new RegExp("^thr","i");
			var th = new RegExp("^th","i");

		var regexArray = [sh,sch,ch,squ,qu,thr,th,consonant];


		var shiftRight = function(array,num) {
			return array.map(function(element,index){
				return array[(index+num)%array.length];
			});
		}

			var answerArray = [];

	// what to do with vowels

			var answerArray = stringArray.map(function(element){
					for(var i=0;i<regexArray.length;i++){
						if(element.match(regexArray[i])){
							return shiftRight(element.split(''),(element.match(regexArray[i]).join('').length));
						}
					}
			});

			answerArray.map(function(element){
				element.push('ay');
				// element.push('y');
			});

			var tom = answerArray.map(function(element){
					return element.join('');
			});

			var answer = tom.reduce(function(accum, curr){
					return accum + " " + curr;
			});

			// answerArray.map(function(element){
			// 		return element.join('');
			// })
			// answerArray.reduce(function(accum,curr){return accum.concat(curr).join('')});

			// stringArray.map(function(element){
			// 		for(var i=0;i<regexArray.length;i++){
			// 			if(element.match(regexArray[i])){
			// 				answerArray.push(element.replace(regexArray[i],''));
			// 			}
			// 		}
			// })


			return answer;
		
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