const Discord = require("discord.js");

    module.exports.run = async (bot, message, args) => {

        function random_rjoke(joke)
         {
    
         return joke[Math.floor(Math.random()*joke.length)];
       
         }
         const joke = [
 		"Did you hear about the restaurant on the moon? Great food, no atmosphere.",
 		"What do you call a fake noodle? An Impasta.",
 		"How many apples grow on a tree? All of them.",
 		"Want to hear a joke about paper? Nevermind it's tearable.",
 		"I just watched a program about beavers. It was the best dam program I've ever seen.",
 		"Why did the coffee file a police report? It got mugged.",
 		"How does a penguin build it's house? Igloos it together.",
 		"Dad, did you get a haircut? No I got them all cut.",
 		"What do you call a Mexican who has lost his car? Carlos.",
 		"Dad, can you put my shoes on? No, I don't think they'll fit me.",
 		"Why did the scarecrow win an award? Because he was outstanding in his field.",
 		"Why don't skeletons ever go trick or treating? Because they have no body to go with.",
 		"I’ll call you later. Don't call me later, call me Dad.",
 		"What do you call an elephant that doesn't matter? An irrelephant",
 		"Want to hear a joke about construction? I'm still working on it.",
 		"What do you call cheese that isn't yours? Nacho Cheese.",
 		"Why couldn't the bicycle stand up by itself? It was two tired.",
 		"What did the grape do when he got stepped on? He let out a little wine.",
 		"I wouldn't buy anything with velcro. It's a total rip-off.",
 		"The shovel was a ground-breaking invention.",
 		"Dad, can you put the cat out? I didn't know it was on fire.",
 		"This graveyard looks overcrowded. People must be dying to get in there.",
 		"Whenever the cashier at the grocery store asks my dad if he would like the milk in a bag he replies, No, just leave it in the carton!",
 		"5/4 of people admit that they’re bad with fractions.",
 		"Two goldfish are in a tank. One says to the other, do you know how to drive this thing?",
 		"What do you call a man with a rubber toe? Roberto.",
 		"What do you call a fat psychic? A four-chin teller.",
 		"I would avoid the sushi if I was you. It’s a little fishy.",
 		"To the man in the wheelchair that stole my camouflage jacket... You can hide but you can't run.",
 		"The rotation of earth really makes my day.",
 		"I thought about going on an all-almond diet. But that's just nuts",
 		"What's brown and sticky? A stick.",
 		"I’ve never gone to a gun range before. I decided to give it a shot!",
 		"Why do you never see elephants hiding in trees? Because they're so good at it.",
 		"Did you hear about the kidnapping at school? It's fine, he woke up.",
 		"A furniture store keeps calling me. All I wanted was one night stand.",
 		"I used to work in a shoe recycling shop. It was sole destroying.",
 		"Did I tell you the time I fell in love during a backflip? I was heels over head.",
 		"I don’t play soccer because I enjoy the sport. I’m just doing it for kicks.",
 		"People don’t like having to bend over to get their drinks. We really need to raise the bar.",
 		"Today at the bank, an old lady asked me to help check her balance. So I pushed her over.",
 		"I bought some shoes from a drug dealer. I don't know what he laced them with, but I've been tripping all day.",
 		"I told my girlfriend she drew her eyebrows too high. She seemed surprised.",
 		"My dog used to chase people on a bike a lot. It got so bad, finally I had to take his bike away.",
 		"I'm so good at sleeping. I can do it with my eyes closed.",
 		"My boss told me to have a good day.. so I went home.",
 		"Why is Peter Pan always flying? He neverlands.",
 		"A woman walks into a library and asked if they had any books about paranoia. The librarian says: They’re right behind you!",
 		"The other day, my wife asked me to pass her lipstick but I accidentally passed her a glue stick. She still isn't talking to me.",
 		"Why do blind people hate skydiving? It scares the hell out of their dogs.",
 		"When you look really closely, all mirrors look like eyeballs.",
 		"What do you call a guy with a rubber toe? Roberto.",
 		"What did the pirate say when he turned 80 years old? Aye matey.",
 		"My wife told me I had to stop acting like a flamingo. So I had to put my foot down.",
 		"I couldn't figure out why the baseball kept getting larger. Then it hit me.",
 		"Why did the old man fall in the well? Because he couldn't see that well.",
 		"I ate a clock yesterday, it was very time consuming.",
 		"What do you call a frenchman wearing sandals? Phillipe Phillope.",
 		"A blind man walks into a bar. And a table. And a chair.",
 		"I know a lot of jokes about unemployed people but none of them work.",
 		"What's orange and sounds like a parrot? A carrot.",
 		"Did you hear about the italian chef that died? He pasta way.",
 		"Why couldn't the bicycle stand up? Because it was two tired!",
 		"Parallel lines have so much in common. It’s a shame they’ll never meet.",
 		"My wife accused me of being immature. I told her to get out of my fort.",
 		"Where do you find a cow with no legs? Right where you left it.",
 		"When a deaf person sees someone yawn do they think it’s a scream?",
 		"As I suspected, someone has been adding soil to my garden. The plot thickens.",
 		"How do crazy people go through the forest? They take the physco path.",
 		"And the lord said unto John, Come forth and you will receive eternal life. John came fifth and won a toaster.",
 		"What did the traffic light say to the car? Don’t look! I’m about to change.",
 		"I just wrote a book on reverse psychology. Do *not* read it!",
 		"What did one hat say to the other? You stay here. I’ll go on ahead.",
 		"Why wouldn’t the shrimp share his treasure? Because he was a little shellfish."
 	 ];
 	  	message.channel.send(random_rjoke(joke));
 	 }
    
module.exports.help = {
    name: "joke" 
}