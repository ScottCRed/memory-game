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

### Header
- Title

### Footer
- Info

### GameContainer
- function ShuffleId > should shuffle list of id numbers

### PictureCard
- props = id, imgSource, imgLabel

### ScoreBoard
- states > currentScore