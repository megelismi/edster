# Edster

Edster is about making learning a new language an engaging experience by allowing users to track their progress over time and practice on unmastered words. 

## How To Use Edster

Once users are authenticated through their Google accounts, they can log in and start practicing their French vocabulary by typing the English word below it.

[screenshot of flashcard page]

Users can click on My Progress to see a list of words that they have mastered and not mastered. 

[screenshot of progress report]

## Spaced Repetition

Edster uses a spaced repetition algorithm on the server side. According to Wikipedia, "Spaced repetition is a learning technique that incorporates increasing intervals of time between subsequent review of previously learned material in order to exploit the psychological spacing effect." Our basic algorithm was written with this concept in mind. If a user answers a word incorrectly, they will re-encounter it sooner in their review than a word that they answer correctly. 

[snapshot of algorithm]

## Technical 

* Frontend: React, Redux, CSS
* Backend: Node.js, Express
* Database: MongoDB

## Live Demo

http://edster.herokuapp.com/
