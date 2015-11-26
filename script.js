//This is the source code of the arshneet simulator. It's completely text based. Feel free to muck around, 
//then submit a pull request. Even if it doesn't belong in the main game, we might keep it in a fork if we like it.
alert("The point of this game is to get through life without failing.");
if (confirm("Would you like to play this game?")) {
    alert("*The alarm rings*");
    var morning1 = prompt("Would you like to [sleep in] or [wake up]?").toLowerCase();
    if (morning1 === "wake up") {
        alert("You wake up and slowly walk to the washroom, to brush your teeth and get ready.");
        alert("You walk downstairs.");
        var breakfast1 = prompt("What do you eat for breakfast?").toLowerCase();
<<<<<<< HEAD
        alert("You finish breakfast and go back upstairs to brush again.");
        alert("You walk outside and wait about 5 minutes.");
        alert("The bus arrives.");
        alert("You are at school. It was a boring bus ride but you smelt a cow take a poop on the way.");
        alert("You put your stuff in a shared locker with your best friend. You walk inside to see the first two periods ar math! Your favourie subject.");
        alert("You easily finish the math and do some work on your laptop.");
        alert("RING RING RING!");
        alert("Second period, gym!");
        alert("You walk inside the boys changeroom and quickly get dressed for gym.");
        alert("\"LET'S GET INTO A LINE ON THE WALL! WER'E DOING OUR WARMUP!\" says the gym teacher.");
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
                alert("You wake up the next day.");
                alert("THE END (for now)");
            } else {
                alert("Your mom hears you making noises so she walks in your room.");
                alert("Your mom sees what you are doing so she makes you sleep in her room");
                alert("GAME OVER");
            }
        } else if (cheat1 === "skip a few laps") {
            alert("Your teacher notices and yells at you for cheating. You now have to do 700 more laps.");
            alert("GAME OVER");
        } else {
            alert("Your teacher notices you are doing not doing the exercise so she yells at you and now you have to do 700 more laps.");
=======
        if (breakfast1 === "cereal") {
            alert("You finish breakfast and go back upstairs to brush again.");
            alert("You walk outside and wait about 5 minutes.");
            alert("The bus arrives.");
            alert("You are at school. It was a boring bus ride but you smelt a cow take a poop on the way.");
            alert("You put your stuff in a shared locker with your best friend. You walk inside to see the first two periods ar math! Your favourie subject.");
            alert("You easily finish the math and do some work on your laptop.");
            alert("RING RING RING!");
            alert("Third period, gym!");
            alert("You walk inside the boys changeroom and quickly get dressed for gym.");
            alert("LETS GO IN A LINE ON THE WALL. WERE DOING OUR WARMUP! say the gym teacher.");
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
                var night1 = prompt("Stay Up or Go to sleep?");
                if (night1 === "go to sleep") {
                    alert("You wake up the next day.");
                    alert("THE END (for now)");
                } else {
                    alert("Your mom hears you making noises so she walks in your room.");
                    alert("Your mom sees what you are doing so she makes you sleep in her room");
                    alert("GAME OVER");
                }
            } else if (cheat1 === "skip a few laps") {
                alert("Your teacher notices and yells at you for cheating. You now have to do 700 more laps.");
                alert("GAME OVER");
            } else {
                alert("Your teacher notices you are doing not doing the exercise so she yells at you and now you have to do 700 more laps.");
                alert("GAME OVER");
            }
        } else if (breakfast1 === "waffles") {
            alert("You finish breakfast and go back upstairs to brush again.");
            alert("You walk outside and wait about 5 minutes.");
            alert("The bus arrives.");
            alert("You are at school. It was a boring bus ride but you smelt a cow take a poop on the way.");
            alert("You put your stuff in a shared locker with your best friend. You walk inside to see the first two periods are math! Your favourie subject.");
            alert("You easily finish the math and do some work on your laptop.");
            alert("RING RING RING!");
            alert("Third period, gym!");
            alert("You walk inside the boys changeroom and quickly get dressed for gym.");
            alert("LETS GO IN A LINE ON THE WALL. WERE DOING OUR WARMUP! say the gym teacher.");
            alert("During the warmup, do you...");
            var cheat1 = prompt("Skip a few laps or Do it all?");
            if (cheat1 === "Do it all") {
                alert("You do all of the warmup");
                alert("HUFF PUFF HUFF PUFF HUFF PUFF");
                alert("The class plays a game of volleyball and you were the top player!");
                alert("You go back and put your normal clothes back on.");
                alert("RING RING RING!");
                alert("Ah, lunch time.");
                alert("You eat your food and play outside.");
                alert("The rest of the day goes on as usual, until you noticed the most hilarious thing.");
                alert("A girl called Ameeta tries taking a chair from Kulshan.");
                alert("Kulshan fails to save his chair, so he takes a chair from a boy named Tejas.");
                alert("Tejas pushes Kulshan off the chair, and gets his chair back.");
                alert("At that moment, Kulshan knew, he was chairless.");
                alert("When I  home, the day went normal. I watched some TV and played outside a bit.");
                alert("You go to sleep after eating dinner, do you...");
                var night1 = prompt("Stay Up or Go to sleep?");
                if (night1 === "Go to sleep") {
                    alert("You wake up the next day.");
                    alert("It's halloween. You put on your genius costume, a fedora and call yourself Winston Churchill.");
                    alert("As you walk to school, you see some of your classmates. Cameron the demon, Daman the schoolkid, and Connor the leprechaun.");
                    var classmates = prompt("Which one do you greet?");
                    switch (classmates) {
                        case "Daman":
                            
                        alert("You say, 'Hey daman. Nice costume.'");
                        alert("He responds, 'I'm not wearing a costume, retard.' He proceeds to lightly tap your shoulder in a joking way. Being arshneet, this kills you.");
                        alert("THE END");
                            break; 
                            


                    
                        case "Connor":
                        alert("You say, 'Hey connor. Nice costume.'");
                        alert("Connor responds 'WOW. OF COURSE YOU THINK THE LEPRECHAUN COSTUME IS GOOD. BECAUSE LEPRECHAUNS ARE SHORT AND IM SHORT.'");
                        alert("In his fit of height-insecure induced rage, connor kills you.");
                        alert("THE END");
                        
                    }
                    alert("THE END");
                }
            }
        } else if (breakfast1 === "pancakes") {
            alert("You finish breakfast and go back upstairs to brush again.");
            alert("You walk outside and wait about 5 minutes.");
            alert("The bus arrives.");
            alert("You are at school. It was a boring bus ride but you smelt a cow take a poop on the way.");
            alert("You put your stuff in a shared locker with your best friend. You walk inside to see the first two periods ar math! Your favourie subject.");
            alert("You easily finish the math and do some work on your laptop.");
            alert("RING RING RING!");
            alert("Third period, gym!");
            alert("You walk inside the boys changeroom and quickly get dressed for gym.");
            alert("LETS GO IN A LINE ON THE WALL. WERE DOING OUR WARMUP! say the gym teacher.");
            alert("During the warmup, do you...");
            var cheat1 = prompt("Skip a few laps or Do it all?");
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
                    alert("You wake up the next day.");
                    alert("THE END (for now)");
                } else if (breakfast1 === "food") {
                    breakfast1 = ("No, I mean what do you want?");
                    if (breakfast1 === "cereal") {
                        alert("You finish breakfast and go back upstairs to brush again.");
                        alert("You walk outside and wait about 5 minutes.");
                        alert("The bus arrives.");
                        alert("You are at school. It was a boring bus ride but you smelt a cow take a poop on the way.");
                        alert("You put your stuff in a shared locker with your best friend. You walk inside to see the first two periods ar math! Your favourie subject.");
                        alert("You easily finish the math and do some work on your laptop.");
                        alert("RING RING RING!");
                        alert("Third period, gym!");
                        alert("You walk inside the boys changeroom and quickly get dressed for gym.");
                        alert("LETS GO IN A LINE ON THE WALL. WERE DOING OUR WARMUP! say the gym teacher.");
                        alert("During the warmup, do you...");
                        var cheat1 = prompt("Skip a few laps or Do it all?");
                        if (cheat1 === "Do it all") {
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
                            var night1 = prompt("Stay Up or Go to sleep?");
                            if (night1 === "Go to sleep") {
                                alert("You wake up the next day.");
                                alert("THE END (for now)");
                            } else {
                                alert("Your mom hears you making noises so she walks in your room.");
                                alert("Your mom sees what you are doing so she makes you sleep in her room");
                                alert("GAME OVER");
                            }
                        } else if (cheat1 === "Skip a few laps") {
                            alert("Your teacher notices and yells at you for cheating. You now have to do 700 more laps.");
                            alert("GAME OVER");
                        } else {
                            alert("Your teacher notices you are doing not doing the exercise so she yells at you and now you have to do 700 more laps.");
                            alert("GAME OVER");
                        }
                    } else if (breakfast1 === "pancakes") {
                        alert("You finish breakfast and go back upstairs to brush again.");
                        alert("You walk outside and wait about 5 minutes.");
                        alert("The bus arrives.");
                        alert("You are at school. It was a boring bus ride but you smelt a cow take a poop on the way.");
                        alert("You put your stuff in a shared locker with your best friend. You walk inside to see the first two periods ar math! Your favourie subject.");
                        alert("You easily finish the math and do some work on your laptop.");
                        alert("RING RING RING!");
                        alert("Third period, gym!");
                        alert("You walk inside the boys changeroom and quickly get dressed for gym.");
                        alert("LETS GO IN A LINE ON THE WALL. WERE DOING OUR WARMUP! say the gym teacher.");
                        alert("During the warmup, do you...");
                        var cheat1 = prompt("Skip a few laps or Do it all?");
                        if (cheat1 === "Do it all") {
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
                            var night1 = prompt("Stay Up or Go to sleep?");
                            if (night1 === "Go to sleep") {
                                alert("You wake up the next day.");
                                alert("THE END (for now)");
                            } else {
                                alert("Your mom hears you making noises so she walks in your room.");
                                alert("Your mom sees what you are doing so she makes you sleep in her room");
                                alert("GAME OVER");
                            }
                        } else if (cheat1 === "Skip a few laps") {
                            alert("Your teacher notices and yells at you for cheating. You now have to do 700 more laps.");
                            alert("GAME OVER");
                        } else {
                            alert("Your teacher notices you are doing not doing the exercise so she yells at you and now you have to do 700 more laps.");
                            alert("GAME OVER");
                        }
                    } else if (breakfast1 === "waffles") {
                        alert("You finish breakfast and go back upstairs to brush again.");
                        alert("You walk outside and wait about 5 minutes.");
                        alert("The bus arrives.");
                        alert("You are at school. It was a boring bus ride but you smelt a cow take a poop on the way.");
                        alert("You put your stuff in a shared locker with your best friend. You walk inside to see the first two periods ar math! Your favourie subject.");
                        alert("You easily finish the math and do some work on your laptop.");
                        alert("RING RING RING!");
                        alert("Third period, gym!");
                        alert("You walk inside the boys changeroom and quickly get dressed for gym.");
                        alert("LETS GO IN A LINE ON THE WALL. WERE DOING OUR WARMUP! say the gym teacher.");
                        alert("During the warmup, do you...");
                        var cheat1 = prompt("Skip a few laps or Do it all?");
                        if (cheat1 === "Do it all") {
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
                            var night1 = prompt("Stay Up or Go to sleep?");
                            if (night1 === "Go to sleep") {
                                alert("You wake up the next day.");
                                alert("THE END (for now)");
                            } else {
                                alert("Your mom hears you making noises so she walks in your room.");
                                alert("Your mom sees what you are doing so she makes you sleep in her room");
                                alert("GAME OVER");
                            }
                        } else if (cheat1 === "Skip a few laps") {
                            alert("Your teacher notices and yells at you for cheating. You now have to do 700 more laps.");
                            alert("GAME OVER");
                        } else {
                            alert("Your teacher notices you are doing not doing the exercise so she yells at you and now you have to do 700 more laps.");
                            alert("GAME OVER");
                        }
                    } else if (breakfast1 === "food") {
                        alert("Go feed yourself!");
                        alert("GAME OVER");
                    } else {
                        alert("Go to the store and buy it yourself!");
                        alert("GAME OVER");
                    }
                } else {
                    alert("Sorry we do not have that...");
                    breakfast1 = ("What do you eat for breakfast?");
                }
            }
        } else {
            alert("What are you trying to do?");
>>>>>>> origin/gh-pages
            alert("GAME OVER");
        }
    } else if (morning1 === "sleep in") {
            alert("Your dad comes and wakes you up.");
            alert("RUN RUN RUN");
            alert("You quickly brush your teeth and get ready.");
            alert("You run downstairs to scarf on your breakfast.");
            alert("You run back upstairs to brush your teeth again and run back downstairs. You run out the door.");
            alert("The bus has long gone.");
            alert("You come back inside and explain to your mom what happened.");
            alert("Your mom gives you a beating.");
            alert("GAME OVER");
    }
} else {
    alert("Ok then...");
}
