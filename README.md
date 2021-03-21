# Pre-work - _BMO's Memory Adventure_

_BMO's Memory Adventure_ is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Gabriel Velasquez**

Time spent: **2.25** hours spent in total

Link to project: https://fir-chisel-waterfall.glitch.me

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [x] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Imported custom font to make the game more visually pleasing

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![] (PreWorkGabriel.gif)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

   [I used some Stack Overflow to get help on importing images and creating a randomized array in JS, got the images
   from Google Search and the font from Google Fonts.]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

   [I was struggling with setting the button to be an image and making it fit so I had to read up on some CSS attributes like 'background',
   'background-image' and 'background-size'. Eventually I figured it out. I also struggled getting to renadomize the array until
   I read more about Math.random. I then had some issues adding more buttons but proceeded to carefully make sure I updated the rest
   of the code to adapt to that change. At some point my three strikes implementation was breaking the functionality but that turned
   out to be simple syntax mistakes.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

   [I am lucky enough to already have some basic experience with these tools, including Glitch, which made the whole process faster and simpler.
   However, this was a very fun project to do, I learned something about every language I used and reminded me once more how honestly fun
   these type of projects can be. I ended up being hooked on making it 'Adventure Time' themed and more appealing, as well as smarter. This makes me eager
   to continue to learn about these languages, continue to develop and understand more projects like this.]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

   [I would try to do sound clips for every character instead of generic sound, make the whole website more thematic and provide some fun
   feedback, perhaps even use this to make a different, more elaborate program, like a choose your own adventure game or a platformer.]

## License

    Copyright Gabriel Velásquez, 2021

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
