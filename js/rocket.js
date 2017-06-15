var timer = null;
var countDownNumber = 10;
var changeState = function(state)
{
	document.body.className = 'body-state' + state;
	clearInterval(timer);
	countDownNumber = 10;
	document.getElementById('countdown').innerHTML = countDownNumber;

	//countdown
	if(state == 2) {
		//The setInterval() method repeats a given function at every given time-interval.
		 timer = setInterval(function(){
		 	countDownNumber = countDownNumber - 1;
		 	document.getElementById('countdown').innerHTML = countDownNumber;

		 	if(countDownNumber > 3 && countDownNumber <= 6) {
		 		//can't wait
		 		document.getElementById('nervous').className = 'nervous show';
		 	}
		 		else{
		 			document.getElementById('nervous').className = 'nervous';
		 		}
		 	
		 	if(countDownNumber > 1 && countDownNumber <= 3) {
		 		//be nervous
		 		document.getElementById('cant-wait').className = 'cant-wait show';
		 	}
		 		else{
		 			document.getElementById('cant-wait').className = 'cant-wait';
		 		}

			if(countDownNumber <= 0)
			{				
				changeState(3);
			}
		 }
		 ,500);
		} else if (state == 3) {
		var success = setTimeout(function () {
				var randomNumber = Math.round(Math.random()*10);

				console.log('randomNumber:', randomNumber)

				// succes
				if (randomNumber > 4) {
					changeState(4);

				} else {
					changeState(5); // oh no!
				}
		}, 2000);
	};
}

