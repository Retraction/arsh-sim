var day = 0;
var morning;
/*var breakfast;*/
var classmates;
var homeroom;
var warmup;
var night;
var gameover = false;
function $() {
	while (!gameover) {
		day += 1;
		morning = prompt("Would you like to [sleep in] or [wake up]?").toLowerCase();
		switch (morning) {
			case "sleep in":
				if (!gameover) {
					alert("Your dad comes and wakes you up.");
					alert("RUN RUN RUN");
					alert("You quickly brush your teeth and get ready. You run out the door.");
					alert("The bus has long gone.");
					alert("You come back inside and explain to your mom what happened.");
					alert("Your mom gives you a beating.");
					alert("GAME OVER");
					gameover = true;
				}
				break;
			case "wake up":
				if (!gameover) {
					alert("You wake up and slowly walk to the washroom, to brush your teeth and get ready.");
					alert("You walk downstairs.");
					breakfast = prompt("What do you eat for breakfast?\n[cereal]\n[bagel]\n[pancakes]\n[waffles]\n[bacon]\n[nothing]").toLowerCase();
					if (breakfast === "nothing") {
						alert("You skip breakfast.");
					} else if (breakfast === "cereal" || breakfast === "bagel" || breakfast === "pancakes" || breakfast === "waffles" || breakfast === "bacon") {
						alert("You finish your " + breakfast + " and go back upstairs to brush again.");
					} else {
						gameover = true;
					}
					if (!gameover) {
						alert("You walk outside and wait about five minutes.");
						alert("The bus arrives.");
						alert("You are at school. It was a boring bus ride.");
						switch (day) {
							case 1:
								//code
								gameover = true;
								break;
							case 2:
								gameover = true;
								break;
						}
						gameover = true;
					}
				}
				break;
			default:
				gameover = true;
		}
	}
	gameover = false;
	/*alert("*The alarm rings*");
	var morning1 = prompt("Would you like to [sleep in] or [wake up]?").toLowerCase();
	if (morning1 === "wake up") {
		alert("You wake up and slowly walk to the washroom, to brush your teeth and get ready.");
		alert("You walk downstairs.");
		var breakfast1 = prompt("What do you eat for breakfast?").toLowerCase();
		alert("You finish breakfast and go back upstairs to brush again.");
		alert("You walk outside and wait about five minutes.");
		alert("The bus arrives.");
		alert("You are at school. It was a boring bus ride.");
		alert("You put your stuff in a shared locker with your best friend. You walk inside to see the first two periods are math: your favourie subject!");
		alert("You easily finish the math and do some work on your laptop.");
		alert("RING RING RING!");
		alert("Second period, gym!");
		alert("You walk inside the boys changeroom and quickly get dressed for gym.");
		alert("\"LET'S GET INTO A LINE ON THE WALL! WE'RE DOING OUR WARMUP!\" says the gym teacher.");
		alert("During the warmup, do you...");
		var cheat1 = prompt("[Skip a few laps] or [do it all]?").toLowerCase();
		if (cheat1 === "do it all") {
			alert("You do all of the warmup");
			alert("HUFF PUFF HUFF PUFF HUFF PUFF");
			alert("The class plays a game of volleyball and you were the top player!");
			alert("You go back and put your normal clothes back on.");
			alert("RING RING RING!");
			alert("Ah, lunch time.");
			alert("You eat your food and play outside.");
			alert("The rest of the day goes on as usual, until you noticed the most hilarious thing.");
			alert("A girl called Ameeta steals tries taking a chair from Kulshan.");
			alert("Kulshan fails to save his chair, so he takes a chair from a boy named Tejas.");
			alert("Tejas pushes Kulshan off the chair, and gets his chair back.");
			alert("At that moment, Kulshan knew, he was chairless.");
			alert("When I went home, the day went normal. I watched some TV and played outside a bit.");
			alert("You go to sleep after eating dinner, do you...");
			var night1 = prompt("[Stay up] or [go to sleep]?").toLowerCase();
			if (night1 === "go to sleep") {
				alert("*The alarm rings*");
				var morning2 = prompt("Would you like to [sleep in] or [wake up]?").toLowerCase();
				if (morning2 === "sleep in") {
					alert("Your dad comes and wakes you up.");
					alert("RUN RUN RUN");
					alert("You quickly brush your teeth and get ready. You run out the door.");
					alert("You almost miss the bus. It's almost left, but you yell and the bus driver keeps the bus there for you.");
				} else if (morning2 === "wake up") {
					alert("You wake up and slowly walk to the washroom, to brush your teeth and get ready.");
					alert("You walk downstairs.");
					var breakfast2 = prompt("What do you eat for breakfast?").toLowerCase();
					alert("You finish breakfast and go back upstairs to brush again.");
					alert("You walk outside and wait about five minutes.");
					alert("The bus arrives.");
					alert("You are at school. It was yet again a boring bus ride.");
				}
				alert("It's Halloween. You put on your brilliant costume, a fedora and call yourself Winston Churchill.");
				var classmate2 = prompt("As you walk to the school building, you see some of your classmates. [Cameron] the Demon, [Daman] the Schoolkid, [Connor] the Leprechaun, and [Harshan] the Zombie.\nDo you greet them or [ignore] them? If you did greet them, which one do you greet?").toLowerCase();
				switch (classmate2) {
					case "daman":
						alert("You say, \"Hey Daman. Nice costume.\"");
						alert("He responds, \"I'm not wearing a costume, retard.\" He proceeds to lightly tap your shoulder in a joking way. Being Arshneet, this kills you.");
						alert("THE END");
						break;
					case "connor":
						alert("You say, \"Hey Connor. Nice costume.\"");
						alert("Connor responds \"WOW. OF COURSE YOU THINK THE LEPRECHAUN COSTUME IS GOOD. BECAUSE LEPRECHAUNS ARE SHORT AND IM SHORT.\"");
						alert("In his fit of height-insecure induced rage, Connor kills you.");
						break;
					case "cameron":
						alert("You say, \"Hey Cameron. Nice costume.\"");
						alert("Cameron responds, \"Thanks arshneet, what are you supposed to...be...\"");
						alert("He then has an asthma attack on the spot.");
						alert("The stress of Cameron's death kills you.");
						alert("GAME OVER");
						break;
					case "harshan":
						alert("You say, \"Hey Harshan. Wow, cool costume.\"");
						alert("He responds, \"Thanks fam. What are you going as when you trick or tre-\"");
						alert("He faints on the spot.");
						alert("The stress kills you.");
						alert("GAME OVER");
						break;
					case "ignore":
						alert("You ignore them. Good, since you're a loner anyway.");
						alert("You continue on your merry way to school.");
						alert("As you get to school, the bell rings. Made it just in time!");
						alert("Walking into homeroom, you look around at the assortment of colors and unique costumes.");
						alert("Regardless, you think your costume is the best. Good on you.");
						var homeroom2 = prompt("In homeroom, for the next two periods, do you [work], [fool around], or [play games]?").toLowerCase();
						switch (homeroom2) {
							case "fool around":
								alert("Rather than working, you fool around.");
								alert("You play catch with Arash, but you drop it multiple times and arash makes a joke about it.");
								var laugh2 = prompt("Do you laugh at the joke? ([yes] or [no])").toLowerCase();
								switch (laugh2) {
									case "yes":
										alert("Your satanic demon laugh invokes the rage of your classmates. They kill you.");
										alert("GAME OVER");
										break;
									case "no":
										alert("Arash gives you a look for not laughing, but other than that you continue on to Period 3.");
										break;
								}
								break;
							case "work":
								alert("You decide to actually work, like usual. Good.");
								alert("Class flies by, and all of a sudden it's Period 3.");
								break;
							case "play games":
								alert("You decide to play some Minecraft.");
								alert("What could go wrong?");
								alert("Suddenly, because you were so immersed in your minecraft game, you realize your teacher was watching the whole time.");
								alert("Your teacher sends you home as punishment, and your mom grounds you.");
								alert("GAME OVER");
								break;
						}
						break;
				}
			} else {
				alert("Your mom hears you making noises so she walks in your room.");
				alert("Your mom sees what you are doing so she makes you sleep in her room.");
				alert("GAME OVER");
			}
		} else if (cheat1 === "skip a few laps") {
			alert("Your teacher notices and yells at you for cheating. You now have to do 700 more laps.");
			alert("GAME OVER");
		} else {
			alert("Your teacher notices and yells at you for cheating. You now have to do 700 more laps.");
			alert("GAME OVER");
		}
	} else if (morning1 === "sleep in") {
		alert("Your dad comes and wakes you up.");
		alert("RUN RUN RUN");
		alert("You quickly brush your teeth and get ready. You run out the door.");
		alert("The bus has long gone.");
		alert("You come back inside and explain to your mom what happened.");
		alert("Your mom gives you a beating.");
		alert("GAME OVER");
	}*/
}