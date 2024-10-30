
<h1 align="center">
  <br>
  
  ![screenshot](https://raw.githubusercontent.com/Leandro-Amorim/buzzvel-fe-test/main/assets/screenshot1.png)

  Buzzvel 2024 Dev Team Test
  <br>
</h1>

<h4 align="center">A frontend project made in <a href="https://nextjs.org/" target="_blank">Next.js</a> for the Buzzvel 2024 developer test. You can see a working example at <a href="https://buzzvel-fe-test.vercel.app/" target="_blank">buzzvel-fe-test.vercel.app/</a>.</h4>

<p align="center">
  <a href="#overview">Overview</a> •
  <a href="#technologies">Technologies</a> •
  <a href="#setup">Setup</a> •
  <a href="#performance-and-seo">Performance and SEO</a>
</p>

## Overview

This project is a conversion of the Figma design provided by Buzzvel into a functional website using Next.js.
<br>
Emphasis was placed on ensuring a seamless experience across devices, with attention to responsive design methodologies.
<br>
Additionally, the Framer Motion library was used to create animations that enhances the user experience without hindering the use of the website.

## Technologies

- [React](https://react.dev/)
- [Next.js](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Class Variance Authority](https://cva.style/)

## Setup

### Prerequisites

Make sure you have a working installation of [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/).

### Step by step

* From your command line:

```bash
# Clone this repository
$ git clone https://github.com/Leandro-Amorim/buzzvel-fe-test

# Go into the repository
$ cd buzzvel-fe-test

# Install dependencies
$ npm install
```

* You can then run the project in developer mode using:

```bash
# Run the app
$ npm run dev
```

## Performance and SEO

This application leverages several Next.js features to optimize both performance and SEO, resulting in near-perfect scores on Google Lighthouse. The slight reduction in accessibility scores is due to specific color choices in the design.

### Google Lighthouse Scores

  >Lighthouse Desktop

  ![Lighthouse Desktop](https://raw.githubusercontent.com/Leandro-Amorim/buzzvel-fe-test/main/assets/lighthouse_desktop.png)

  >Lighthouse Mobile

  ![Lighthouse Mobile](https://raw.githubusercontent.com/Leandro-Amorim/buzzvel-fe-test/main/assets/lighthouse_mobile.png)



### SEO Optimizations

To enhance SEO, the application incorporates:

* **Metatags**: Standard and Open Graph metatags to improve social sharing and search visibility.
* **Structured Data**: JSON-LD format for search engine clarity and better indexing.
* **Semantic HTML**: Structured HTML to enhance accessibility and SEO.
* **Sitemap & Robots.txt**: Generation of a Sitemap and robots.txt file for optimized crawling.

### Performance Enhancements
For performance, the application uses:

* **Auto-Optimized Images**: Leveraging Next.js's image optimization to reduce load times.
* **Lazy Loading**: Implemented via ``React.lazy`` and ``React.Suspense`` for asynchronous component loading, improving initial page load.