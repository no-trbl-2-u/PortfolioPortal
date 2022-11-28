# Roadmap

## **Portfolio Ideas (sort later)**

### _Euterpea -- MIDI/Audio Generator_

- Use my Haskell Euterpea code to create MIDI files for people (even if it's just basic scales)

  - The "infinite" stuff will be trickier.
  - Containerize the entire Haskell project w/ a port that either sends out live MIDI (to paint on screen and heard) or live Audio to be listened to.
    - If the entire Haskell environment can be containerized, then we can just run the Haskell code via JS funcs that translate to unix/bash funcs to run the Haskell Code a specific way. (Maybe make an AWS/Netlify Serverless func or gateway for this?)

### _My Music_

- Include my music from Soundcloud (Sweet Villain) and music from BandCamp (PN143) BUT spin up my own audio player to some degree and play the music through that. This way, I have code to show for it also.

## **portfolio-frontend**

### **Minimum**

> - Contact information, including relevant social media accounts
> - Short bio and your photo
> - Relevant experience and skills with context
> - Personal projects
> - Documented source code
> - Education
> - Awards/recognition
> - Downloadable web developer resume

### _All places_

- Have the font-ligatures leveraging Fire-Code for ALL font!

### _Home_

- "Welcome" will be the first thing people see, it'll draw itself, as well as, the corners (not full 100% width/height). After the draw animation, fade out, while a basic "About Me" type deal fades in.
  - MAYBE have a photo/drawing of me in the center (circular) and have all the options surround the image for the user to choose from.

### _About Me_

- _Figure it out!_

### _Resume_

- Display (maybe even animate?!) AND be downloadable

## **portfolio-backend (if-needed)**

- Potentially an API gateway to a number of lambda functions?
  - This way I can write server functions in Typescript, Haskell, Python, or whatever?
  - This will only be necessary if I have demos/projects to leverage the backend for.
