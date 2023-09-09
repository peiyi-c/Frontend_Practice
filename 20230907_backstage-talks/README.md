# Frontend Practice - Backstage Talks Replica

This is a re-creation of the website [Backstage Talks - Magazine Archive](https://www.frontendpractice.com/projects/backstage-talks), a Level-1 challenge on Frontend Practice.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the magazine archive.

Special effects:

- Body background color changes along with the current magazine issue in viewport.
- The website url reflects the current magazine issue number.
- By clikcing on links in footer, the page scrolls smoothly to the desired section.

### Screenshot

![Screenshot 2023-09-09 at 18-04-09 Backstage Talks Magazine](https://github.com/peiyi-c/Frontend_Practice/assets/73789013/b95ffbaa-96c1-441d-8c2a-13d6a2409bd5)


### Links

- Solution URL: [Backstage Talks Website](https://backstagetalks.com/)
- Live Site URL: [My deployment on surge](https://envious-kittens.surge.sh/)

## My process

### Built with

- Semantic HTML5 markup
- CSS Flexbox and Grid
- SCSS
- [React](https://reactjs.org/) - JS library

### What I learned

- <code>react-scroll</code>: To enable the scroll effect in footer links I installed the package [react-scroll](https://www.npmjs.com/package/react-scroll). This package allows developers to define a more detailed scroll than the built in <code>scroll-behavior: smooth</code> in CSS.

- <code>scroll-snap-\* </code>: The [original page: Backstage Talks](https://www.frontendpractice.com/projects/backstage-talks) uses [fullpage.js](https://alvarotrigo.com/fullPage/) to create a whole page scroll effect. I use CSS <code>scroll-snap-\*</code> properties to create a similar effect for desktop users.




