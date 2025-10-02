CREATE TABLE IF NOT EXISTS rather (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  question VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS comment (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  question_id INTEGER REFERENCES rather(id),
  name VARCHAR(255),
  comment VARCHAR(255)
);

INSERT INTO rather (question) VALUES
('Would you rather be the best player on a losing team or the worst player on a winning team?'),
('Would you rather have feet for hands or hands for feet?'),
('Would you rather shoot spaghetti out of your fingers or sneeze meatballs?'),
('Would you rather always have the same song stuck in your head or always have the same dream at night?'),
('Would you rather lose your sense of taste or your sense of smell?'),
('Would you rather have to eat a bowl full of crickets or a bowl full of worms?'),
('Would you rather have the power to never feel physical pain or never feel emotional pain?'),
('Would you rather only be able to whisper or only be able to shout?'),
('Would you rather be a professional athlete in a sport you hate or have your dream job but work for a terrible boss?'),
('Would you rather live in a world with no technology or a world with advanced technology but no personal privacy?'),
('Would you rather watch a sunrise together or stargaze under a moonlit sky?'),
('Would you rather smell like cheese (which has been left in the sun) or a hamster cage (which hasnt been cleaned for a fortnight)?'),
('Would you rather have arms as long as Mr. Tickle or legs as short as E.T?'),
('Would you rather drink soup out of a farmers welly or from a binmans sock?'),
('Would you rather know how you die or know when you die?'),
('Would you rather go without shampoo for the rest of your life or toothpaste for the rest of your life?'),
('Would you rather wear a constantly changing outfit or a constantly changing hairstyle?'),
('Would you rather have a third ear or a third eye?'),
('Would you rather swim in a pool full of Nutella or a pool full of maple syrup?'),
('Would you rather sleep in a graveyard or a haunted house?');

INSERT INTO comment (question_id, name, comment) VALUES
(13, 'Jimmy', 'I think I would pick to have arms as long as Mr. Tickle then i could reach anything i wanted'),
(8, 'Ben', 'Whisper then i would get a mic to make me talk normally'),
(9, 'Jess', 'This is a hard one but id pick professional athlete least it will be easy money'),
(20, 'Sam', 'Id take either one but at least with the haunted house you would have a roof over your head'),
(1, 'Frank', 'Id be the best player on a losing team and hope I get scouted from a better team.'),
(6, 'Emma', 'Crickets! I knew someone who used to eat worms.'),
(3, 'Amy', 'To shoot spaghetti out of my fingers, I feel like sneezing a meatball out of my nose would KILL!!!'),
(7, 'Hannah', 'Never feel emotional pain again. Goodbye, emotional baggage.'),
(3, 'will', 'Spaghetti out of fingers any day of the week I imagine sneezing a meatball would be like trying to pass a kidney stone'),
(3, 'Gabby', 'sneezing meatballs sounds painful so im going to pick shooting spaghetti out of my fingers'),
(2, 'Not Sam', 'Both are good answers. If I had feet for hands, I could run on all fours, and if I had hands for feet, I could live with the monkeys and climb trees all day.'),
(4, 'Mia', 'Always have the same dream, as long as it isnt a nightmare.'),
(5, 'Quinn', 'Smell I like my food too much.'),
(10, 'Frankie', 'Live in a world with no technology. The government already knows too much about me.'),
(11, 'Dustin', 'stargaze under a moonlit sky'),
(12, 'Dayton', 'hamster cage I feel like this would be the better option'),
(14, 'Carly', 'WELLY!!!!'),
(15, 'Abel', 'Id rather know how than when. That way, I feel like I could change my death.'),
(16, 'Selena', 'Shampoo will just use mints for my bad breath'),
(17, 'Gunnar', 'Outfit i like my hair to much'),
(18, 'Mac', 'Third eye id look sooooooo cool'),
(19, 'Joel', 'Maple syrup');