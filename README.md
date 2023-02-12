# Frontend Mentor - Fylo dark theme landing page solution

This is a solution to the [Fylo dark theme landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/solutions/fylo-dark-theme-landing-page-T-bQoEtZJ-)
- Live Site URL: [Add live site URL here](https://jjalbuenacabuyao.github.io/fem-fylo-landing-page/dist/)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind CSS
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

React is a popular JavaScript library for building user interfaces. Components are the building blocks of a React application and allow you to split your UI into reusable, isolated pieces. In my project, I learned how to use components in React to create a modular and maintainable codebase.

To create a React component, you can write a JavaScript function that returns a React element. The function can take in props, which are data passed down from a parent component, and use them to render the UI.

```js
import React from 'react';

function Heading({ text }) {
  return <h1>{text}</h1>;
}
}
```

Tailwind is a utility-first CSS framework that provides a set of pre-defined CSS classes for rapid styling. I learned how to use Tailwind with React by installing the tailwindcss and @tailwindcss/react packages and setting up the CSS in my project.

Tailwind makes it easy to add styling to your components by using classes in the HTML elements.

Responsiveness is an important aspect of modern web design, and it refers to the ability of a website to adapt to different screen sizes. I learned how to make a website responsive by using the clamp CSS function.

The clamp function allows you to set a range of font sizes for a given element, and it will choose the appropriate font size based on the available space. For example, you can set the font size to be between 12 and 18 pixels:

```css
.text-responsive {
  font-size: clamp(12px, 4vw, 18px);
}
```

In this project, I learned several important concepts in web development, such as using components in React, using Tailwind with React, and using responsive fonts and spacing. By applying these learnings in your projects, you can build fast, scalable, and maintainable web applications.

## Author

- Frontend Mentor - [@jjalbuenacabuyao](https://www.frontendmentor.io/profile/jjalbuenacabuyao)
