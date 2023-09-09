# Frontend Practice - Backstage Talks Replica

This is a re-creation of the website [Backstage Talks - Magazine Archive ](https://www.frontendpractice.com/projects/backstage-talks), a Level-1 challenge on Frontend Practice.

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

![](./screenshot.jpg)

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

- <code>react-scroll: To enable the scroll effect in footer links I used <code>react-scroll</code>. This package allows me to define a more detailed scroll than <code>scroll-behavior: smooth</code> .

- <code>scroll-snap-\* </code>: The [original page]((https://www.frontendpractice.com/projects/backstage-talks) uses [fullpage.js](https://alvarotrigo.com/fullPage/) to create a whole page scroll effect. I use CSS <code>scroll-snap-\*</code> properties to create a similar effect.
