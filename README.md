# Outline
- Create a memory game in which the user is presented with a number of similar themed pictures. 
- The user must click on a picture which they have not clicked on before.
- If the User succesfully clicks on a new picture all the pictures are shuffled and 1 point is added to theri score.
- For the initial basic game the end game state will occur when the User succesfully collects the maximum number of points.

## Design
- Header and footer with basic information.
- Main page contains the picture cards which user can click.
- Main page displays max score and current score.
- Color pallette to be decided on.

## Components

### Main
- states > currentScore, maxScore, bestScore
- Header
- GameContainer
- Footer

### Header
- Title
- ScoreBoard

### Footer
- Info

### GameContainer
- wrapper for Cards component

### Card
- props = id, src, name, onClick

### Cards
- Randomise function >> randomCards state >> Fisher-Yates algorithm 
- newBest function >> set state of best score
- checkClick function >> check if the current clicked card has been clicked already. If not then adds id to clickedCards state. If it has then reset current score and clickedCards
- return >> maps over randomCards and returns Card component for each one

### ScoreBoard
- states > currentScore, bestScore

## Images
https://gamerant.com/demon-slayer-every-character-age-height-birthday/
https://villains.fandom.com/wiki/Category:Demon_Slayer_Villains

## Bonus objectives
- 2 sets of cards >> button to switch between
- Welcome page asking for user name >> routed to main page and user name displayed
- Win state for max score 