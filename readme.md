# Bisleri Water Bottle Game

A fun browser-based game originally created for Bisleri, where users race against the clock to "fill" a Bisleri water bottle by running!

## Project Background

This game was developed for Bisleri and integrated with load sensors to detect running motion. It was designed as an interactive experience for marathon runners at an expo event. As participants ran in place, the load sensors detected their motion and filled the virtual water bottle on the screen, making the game both engaging and physically interactive.

## Features

- Animated countdown before the game starts
- Stopwatch timer with a 30-second limit
- Interactive bottle fill mechanic using keyboard input (or load sensors in event setup)
- Personalized greeting with your name on win/lose
- Automatic page refresh after each round

## How to Play

1. Open `index.html` in your web browser.
2. Enter your name in the input field.
3. Click the **Start** button.
4. Wait for the countdown to finish.
5. Press any key repeatedly to fill the bottle before time runs out (or run in place if using load sensors).
6. Win by filling the bottle to the top before the timer reaches zero!

## Project Structure

- [`index.html`](index.html): Main HTML file for the game UI.
- [`styles.css`](styles.css): Styling for the game elements.
- [`script.js`](script.js): Game logic and interactivity.
- `bottle2.png`, `bisleriWrapper.jpeg`, `stopwatch.png`: Image assets for the game.

## Customization

- You can change the initial timer by modifying the `timeLeft` variable in [`script.js`](script.js).
- Update images in the project folder to change the bottle or stopwatch appearance.

## Requirements

- Modern web browser (Chrome, Firefox, Edge, etc.)
- No installation required.

## License

This project is for educational and personal use.

---

Enjoy the Bisleri Water Bottle Game!