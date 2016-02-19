function arshsim() {
	var day = 0;
	var morning,
		breakfast,
		homeroom,
		warmup,
		classmate,
		laugh,
		damanserve,
		arshserve,
		readbook,
		frenchlaptop,
		frenchexcuse,
		dramapartner,
		sleep;
	var gameover = false;
	while (!gameover) {
		day++;
		alert("Day " + day);
		alert("*alarm rings*");
		morning = prompt("Would you like to [sleep in] or [wake up]?").toLowerCase();
		switch (morning) {
			case "sleep in":
				breakfast = "nothing";
				if (!gameover) {
					alert("Your dad comes and wakes you up.");
					alert("RUN RUN RUN");
					alert("You quickly brush your teeth and get ready. You run out the door.");
					if (Math.random() < 0.25) {
						alert("The bus has long gone.");
						alert("You come back inside and explain to your mom what happened.");
						alert("Your mom gives you a beating.");
						alert("GAME OVER");
						gameover = true;
					} else {
						alert("You reach the bus just in time.");
						alert("You are at school. It was a boring bus ride.");
					}
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
					}
				}
				break;
			default:
				gameover = true;
		}
		if (!gameover) {
			switch (day) {
				case 1:
					alert("You put your stuff in a shared locker with your best friend. You walk inside to see the first two periods are math: your favourie subject!");
					alert("You easily finish the math and do some work on your laptop.");
					alert("*bell rings*");
					alert("Second period, gym!");
					alert("You walk inside the boys changeroom and quickly get dressed for gym.");
					alert("\"LET'S GET INTO A LINE ON THE WALL! WE'RE DOING OUR WARMUP!\" says the gym teacher.");
					alert("During the warmup, do you...");
					warmup = prompt("...[skip some laps] or [do it all]?").toLowerCase();
					switch (warmup) {
						case "skip some laps":
							if (Math.random() < 0.75) {
								alert("Your teacher notices and yells at you for cheating. You now have to do a hundred more laps.");
								alert("GAME OVER");
								gameover = true;
							} else {
								alert("You get away with skipping a few laps.");
							}
							break;
						case "do it all":
							if (breakfast !== "nothing") {
								alert("You do all of the warmup.");
								alert("HUFF PUFF HUFF PUFF HUFF PUFF");
							} else {
								alert("Not having any food, you die of exhaustion.");
								gameover = true;
							}
							break;
						default:
							gameover = true;
					}
					if (!gameover) {
						alert("The class plays a game of volleyball and you were the top player!");
						alert("Just kidding, you suck at volleyball.");
						alert("You go back and put your normal clothes back on.");
						alert("*bell rings*");
						alert("Ah, lunch time.");
						alert("You eat your food and play outside.");
						alert("The rest of the day goes on as usual.");
						alert("You go home, you watched some TV and played outside a bit.");
					}
					break;
				case 2:
					alert("It's Halloween. You put on your brilliant costume, a fedora, and call yourself Winston Churchill.");
					classmate = prompt("As you walk to the school building, you see some of your classmates. [Cameron] the Demon, [Daman] the Schoolkid, [Connor] the Leprechaun, and [Harshan] the Zombie.\nDo you greet them or [ignore] them? If you did greet them, which one do you greet?").toLowerCase();
					switch (classmate) {
						case "daman":
							alert("You say, \"Hey Daman. Nice costume.\"");
							alert("He responds, \"I'm not wearing a costume, retard.\" He proceeds to lightly tap your shoulder in a joking way. Being Arshneet, this kills you.");
							alert("THE END");
							gameover = true;
							break;
						case "connor":
							alert("You say, \"Hey Connor. Nice costume.\"");
							alert("Connor responds \"WOW, OF COURSE YOU THINK THE LEPRECHAUN COSTUME IS GOOD: BECAUSE LEPRECHAUNS ARE SHORT AND I'M SHORT!\"");
							alert("In his fit of height-insecure induced rage, Connor kills you.");
							gameover = true;
							break;
						case "cameron":
							alert("You say, \"Hey Cameron. Nice costume.\"");
							alert("Cameron responds, \"Thanks Arshneet, what are you supposed to...be...\"");
							alert("He then has an asthma attack on the spot.");
							alert("The stress of Cameron's death kills you.");
							alert("GAME OVER");
							gameover = true;
							break;
						case "harshan":
							alert("You say, \"Hey Harshan. Wow, cool costume.\"");
							alert("He responds, \"Thanks fam. What are you going as when you trick or tre-\"");
							alert("He faints on the spot.");
							alert("The stress kills you.");
							alert("GAME OVER");
							gameover = true;
							break;
						case "ignore":
							alert("You ignore them. Good, since you're a loner anyway.");
							alert("You continue on your merry way to school.");
							alert("As you get to school, the bell rings. Made it just in time!");
							alert("Walking into homeroom, you look around at the assortment of colors and unique costumes.");
							alert("Regardless, you think your costume is the best. Good on you.");
							homeroom = prompt("In homeroom, for the next two periods, do you [work], [fool around], or [play games]?").toLowerCase();
							switch (homeroom) {
								case "fool around":
									alert("Rather than working, you fool around.");
									alert("You play catch with Arash but you drop the ball multiple times and arash makes a joke about it.");
									laugh = prompt("Do you laugh at the joke? ([yes] or [no])").toLowerCase();
									switch (laugh) {
										case "yes":
											alert("Your satanic demon laugh invokes the rage of your classmates. They kill you.");
											alert("GAME OVER");
											gameover = true;
											break;
										case "no":
											alert("Arash gives you a look for not laughing, but you still continue on to third period.");
											break;
									}
									break;
								case "work":
									alert("You decide to actually work, like usual. Good.");
									alert("Class flies by, and all of a sudden it's third period.");
									break;
								case "play games":
									alert("You decide to play some Minecraft.");
									alert("What could go wrong?");
									alert("Suddenly, because you were so immersed in your Minecraft game, you realize your teacher was watching the whole time.");
									alert("Your teacher sends you home as punishment, and your mom grounds you.");
									alert("GAME OVER");
									gameover = true;
									break;
								default:
									gameover = true;
							}
							if (!gameover) {
								alert("You enter the gymnasium once again. Warmup was skipped because the volleyball net was up.");
								alert("A game of volleyball begins. Daman's legendary overhand serve makes it over the net, with the ball coming straight at you.");
								damanserve = prompt("Will you [try to return it], [get out of the way] or [stand in the way]?").toLowerCase();
								switch (damanserve) {
									case "try to return it":
										alert("You wish. This is Daman's serve we're talking about.");
										alert("The ball dunks you with the force of 10,000 Shaquille O'Neals.");
										alert("GAME OVER");
										gameover = true;
										break;
									case "stand in the way":
										alert("Well, that wasn't a smart decision.");
										alert("The ball dunks you with the force of 10,000 Shaquille O'Neals.");
										alert("GAME OVER");
										gameover = true;
										break;
									case "get out of the way":
										alert("You try your very best to dodge.");
										alert("You fail though.");
										alert("Luckily, Harshan, thirsty for redemption after being out-served by Daman, jumps in the way and takes the full force of the hit.");
										alert("Point Daman's team.");
										alert("Daman serves again, but Aryaman returns it and scores your team a point.");
										alert("Your turn to serve.");
										alert("What technique do you use for your serve?");
										arshserve = prompt("The [Arshneet Sidewinder], [traditional], or the [Daman Punch]?").toLowerCase();
										switch (arshserve) {
											case "daman punch":
												alert("You try Daman's serve.");
												alert("You can't pull it off.");
												alert("You have been shamed and must commit seppuku.");
												alert("GAME OVER");
												gameover = true;
												break;
											case "traditional":
												alert("Arshneet? Doing traditional sports?");
												alert("Hah, good one.");
												alert("GAME OVER");
												gameover = true;
												break;
											case "arshneet sidewinder":
												alert("You use your signature technique, and get a ball over the net.");
												alert("Doesn't matter though, you still lose.");
												alert("You head home after some more boring work periods, but to you, it's just your normal every day life.");
												alert("You eat dinner as usual. No skipping it becuase your parents are watching. After all, you're starving. Boy, is volleyball tiring.");
										}
										break;
									default:
										gameover = true;
								}
							}
							break;
						default:
							gameover = true;
					}
					break;
				case 3:
					alert("You arrive at school.");
					alert("You have homeroom, then music, then French.");
					alert("You have some time to read a book.");
					readbook = prompt("What do you read?").toLowerCase();
					if (readbook === "nothing") {
						alert("You die of boredom before the 20 minutes are up.");
						alert("GAME OVER");
						gameover = true;
						break;
					} else {
						alert("After enjoying " + readbook + ", you go down to music.");
						alert("You have French after.");
						alert("You realize you might need your laptop for French.");
						alert("Do you...");
						frenchlaptop = prompt("...[bring it] or [Leave it]?").toLowerCase();
						if (frenchlaptop === "bring it") {
							alert("You take your laptop with you to music class.");
							alert("Since Jacob, who sits next to you, is away today, you put it on the chair next to you.");
							alert("The strong allure of the laptop is too much for you.");
							alert("You open it up and start playing minecraft...");
							alert("...only to realize the music teacher was watching the whole time!");
							alert("GAME OVER");
							gameover = true;
							break;
						} else if (frenchlaptop === "leave it") {
							alert("You leave it, telling yourself to deal with the repercussions later.");
							alert('You walk to music, and play the bass.');
							alert("Uh oh, time for French...");
							alert("You walk into French. Ms Sheppard notices your lack of device and starts steaming at the ears.");
							alert("What's your excuse?");
							frenchexcuse = prompt("[Battery's dead], [Forgot], or [Didn't think you needed it]").toLowerCase();
							switch (frenchexcuse) {
								case "battery's dead":
									alert("You tell her that the battery is dead.");
									alert("She asks why you didn't charge it.");
									alert("You say you forgot.");
									alert("She says okay, and continues on with class seemingly like normal.");
									alert("You then get an N on your learning skills.");
									alert("Your parents get mad.");
									alert("GAME OVER");
									gameover = true;
									break;
								case "forgot":
									alert("You say you forgot.");
									alert("She says okay, and continues on with class seemingly like normal.");
									alert("You then get an N on your learning skills.");
									alert("Your parents get mad.");
									alert("GAME OVER");
									gameover = true;
									break;
								case "didn't think you needed it":
									alert("You say you didn't think you needed it.");
									alert("She then commends you on being responsible enough to not have to take your laptop everywhere.");
									alert("You continue on your way.");
									alert("Final class of the day, Drama.");
									alert("You're picked for improv.");
									alert("Who do you choose as your group partner?");
									dramapartner = prompt("[Daman], [Harshan], or [Desmond]?").toLowerCase();
									switch (dramapartner) {
										case "daman":
											alert("You choose Daman.");
											alert("You come up with a decent, not good but not bad, presentation.");
											alert("Suddenly, Harshan trips.");
											alert("Daman bends over and says to him...");
											alert("Tu est rekter.");
											alert("He dies laughing.");
											alert("The teacher gets mad at both of you for fooling around.");
											alert("GAME OVER");
											gameover = true;
											break;
										case "harshan":
											alert("Really? What do you expect at this point?");
											alert("He faints.");
											alert("You get an F.");
											alert("GAME OVER");
											gameover = true;
											break;
										case "desmond":
											alert("I don't know why but you picked Desmond.");
											alert("Being himself, he screws around and gets you guys an F.");
											alert("The teacher feels bad for you and you get a B.");
											alert("Mission accomplished!");
											alert("You go home for the day.");
									}
							}
							gameover = true;
						}
					}
					alert("GAME OVER");
					gameover = true;
					break;
				case 4:
					//Day 4
                    alert("Welcome to school.");
					alert("You have 3 periods of work time. What do you do?");
					alert("Do you...")

					gameover = true;
					break;
			}
			if (!gameover) {
				alert("After eating dinner, do you...");
				sleep = prompt("...[stay up] or [go to sleep]?").toLowerCase();
				switch (sleep) {
					case "stay up":
						alert("You stay up and play video games.");
						while (!gameover) {
							alert("You hear your mother coming.");
							if (Math.random() < 0.75) {
								alert("You pretend to sleep.");
								alert("Your mother passes by without blinking an eye. You continue to play video games.");
							} else {
								alert("Your mother came before you could pretend to sleep.");
								alert("You get caught (obviously).");
								alert("GAME OVER");
								gameover = true;
							}
						}
						break;
					case "go to sleep":
						alert("You bathe, brush your teeth, and finally lie down in bed after a long day.");
						break;
					default:
						gameover = true;
				}
			}
		}
	}
}
