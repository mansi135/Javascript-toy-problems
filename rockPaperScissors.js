/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],		r-> rr, rp, rs , pr, pp, ps, sr , sp, ss
*    ["rock", "rock", "paper"],		p-> pr,
*    ["rock", "rock", "scissors"],	s->	sr,
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function () {
  // TODO: your solution here
  var finalOutput = [];

  var outputs = ['rock' ,'paper', 'scissors'];
  


	for(var i = 0; i < 3; i++) {
		for (var j =0; j<3;j++) {
			for(var k=0; k<3; k++) {
				var arr = [];
				arr.push(outputs[i]);
				arr.push(outputs[j]);
				arr.push(outputs[k]);
				finalOutput.push(arr);
			}
		}
	}


  return finalOutput;

};
