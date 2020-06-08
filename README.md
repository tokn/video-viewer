# video-app

## Project rationale
This submission is focused on producing a clear UI and hitting specific constraints on layout and style. I've added in an example feature called theatre-mode which dims the styles surrounding the video player on playback.

I also hooked onto events from the carousel plugin to add a class which dims video posters that aren't fully visible on the page.

## Technologies
This app is built as an SPA using Vue.router. It also includes state management through Vuex - perhaps overkill for the size of the project but I thought it'd be interesting to try it out. I've added axios to call the API. I've used Swiper as the carousel plugin and video.js to control and skin the video player. Styles are written in SCSS.

## To run this app
The app is scaffolded on Vue CLI.

Run
```
npm install
```
And then to serve the app locally, run
```
npm run serve
```
