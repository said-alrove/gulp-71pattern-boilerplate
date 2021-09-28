# [**gulp-71pattern-boilerplate**](https://www.npmjs.com/package/generator-gulp-71pattern-boilerplate)

![](README-banner.png)

This is a boilerplate of the structure that I'm currently using in my projects when choosing the 7-1 pattern architecture, this will be uploaded over time.

This project was possible thanks to [**Coder Coder**](https://www.youtube.com/c/TheCoderCoder/featured) with her video [Generate website starter files with just one command!](https://www.youtube.com/watch?v=NgaV7503dTk&t=480s&ab_channel=CoderCoder). If you'd like to check his boilerplate generator [check this out](https://github.com/thecodercoder/generator-gulp-sass-boilerplate).

## Installation
First, You'll need to install the **Yeoman** dependency globally by using the `npm install -g yo` command.

```
    npm install -g yo
```

Then, you should install this boilerplate globally by using the `npm install -g generator-gulp-71pattern-boilerplate` command.

``` 
    npm install -g generator-gulp-71pattern-boilerplate
```

And, as the last step, you have to go to the directory where you'd like to download this boilerplate and then use the `yo gulp-71pattern-boilerplate` command.

```
    yo gulp-71pattern-boilerplate
```

- In case that the package has been updated you can bring the new version to your machine by running the `npm update -g generator-gulp-71pattern-boilerplate` command.
    ```
        npm update -g generator-gulp-71pattern-boilerplate
    ```

* You also will need to install **Gulp CLI** in your machine **if it's your case that you don't have it already** by running the `npm install -g gulp-cli` command.

    ```
        npm install -g gulp-cli
    ```

* Once the boilerplate is generated, you'll have to run the `gulp` command every time you want to see your changes processed.

    - When running this command, Gulp will open a local server to see your changes in real-time.

> **Disclaimer:** I'm starting to learn how to use **Git/Github** correctly, therefore there'll be plenty of pull requests, commits and other stuff as tests in this repository, however, *this won't represent my way of working forever*, I'll learn more things along the way as always :D!.

![](https://kiranworkspace.com/wp-content/uploads/2020/08/sass-architecture-e1608461475183.jpg)

> **Note:** this boilerplate is automatically generated just by typing a command in the CL thanks to Yeoman.

To understand this boilerplate at all you'll need to have a slight notion about these technologies:

<a href="https://git-scm.com/">
    <img 
        src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
        style="
            width: 50px;
            height: 50px;
            margin-inline: 2.5px;"
        alt="Git logo">
</a>

<a href="https://gulpjs.com/">
    <img 
        src="https://devstickers.com/assets/img/pro/e1bm.png"
        style="
            width: 50px;
            height: 50px;
            margin-inline: 2.5px;"
        alt="Gulp.js logo">
</a>

<a href="https://en.wikipedia.org/wiki/HTML5">
    <img 
        src="https://cdn-icons-png.flaticon.com/512/1216/1216733.png"
        style="
            width: 50px;
            height: 50px;
            margin-inline: 2.5px;"
        alt="HTML5 logo">
</a>

<a href="https://en.wikipedia.org/wiki/CSS">
    <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/240px-CSS3_logo.svg.png"
        style="
            width: 50px;
            height: 50px;
            margin-inline: 2.5px;"
        alt="CSS3 logo">
</a>

<a href="https://www.javascript.com/">
    <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
        style="
            width: 50px;
            height: 50px;
            margin-inline: 2.5px;"
        alt="Javascript logo">
</a>

<a href="https://sass-lang.com/">
    <img 
        src="https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png"
        style="
            width: 50px;
            height: 50px;
            margin-inline: 2.5px;"
        alt="SASS logo">
</a>

<a href="https://www.netlify.com/">
    <img 
        src="https://cdn.worldvectorlogo.com/logos/netlify.svg"
        style="
            width: 50px;
            height: 50px;
            margin-inline: 2.5px;"
        alt="Netlify logo">
</a>

## **Table of contents**
- [What's Yeoman?](#whats-yeoman)
- [Guide](#guide)
    - [General](#general)
    - [7-1 pattern](#7-1-pattern)
    - [Icons](#icons)
    - [Netlify](#netlify)
    - [Gulp tasks](#gulp-tasks)

## **What's Yeoman?**
![](https://yeoman.io/static/tech_stack.987ffff448.png)

[**Yeoman**](https://yeoman.io/generators/) is an open source client-side scaffolding tool for web applications. Yeoman runs as a command-line interface written for Node.js and combines several functions into one place, such as generating a starter template, managing dependencies, running unit tests, providing a local development server, and optimizing production code for deployment.

## **Guide**
> **Note:** It's important to remember to update the submodules used to import vendors when starting using this boilerplate.

### **General**
* Don't worry about the unnecessary files that are added when updating the vendors such as the `README.md` file of lessier or the directory with the same name that's dedicated to saving the images needed for the `README.md` because this boilerplate already counts with those directories added to the .gitignore file, therefore they won't be reflected when pushing commits to upstream.

* The boilerplate includes the **src** and **public** directories already created because the **gulp** command was tested before uploading this boilerplate (that's the reason why there's an image and an icon in the **assets** directory just to see how the final result would be), but you can remove the **public** directory and the example assets that are in the **src** directory if you want, and then run the **gulp** command once you've put your own assets in the **src** directory to generate a new **public** directory.

    - In theory, it's totally unnecessary to leave the example assets in the uploaded version because their only use-case is for testing the generator before publishing it, but the problem is that **Npm** ignores empty directories, therefore I considered it better to leave those files there to avoid problems with empty folders.

* The project includes a **README boilerplate** for the final version that will be pushed to the Git repository. This boilerplate includes:

    - **Disclaimer** (this is personal, you can remove it if it's not your case that you're learning Git/Github).
    - **Table of contents** linked to all the headings in the README.
    - **What I learned** section to include everything you learned while creating that project.
    - **Preview** section to include the screenshot of your project as a preview of it.
    - **Reports** section to include the results of the reports (as screenshots) of services like [Lighthouse](https://developers.google.com/web/tools/lighthouse) or [GTmetrix](https://gtmetrix.com/).
    - **Open-graph** section to include the Open-graph cards of both Twitter and Facebook (you can remove it if it's the case that you didn't include the Open-graph tags in you project).

* Both, the public and the src directories will be included when pushing changes to upstream, but the public can be removed if you want just by adding the directory to the .gitignore file.

    > **Disclaimer:** be careful when removing the public directory from upstream, keep in mind that if you're hosting your files in Git itself, then, the optimized version of your project won't be visible for Netlify (or whatever deployment platform you're using) in case you have your site synchronized with the git repository of your project (otherwise you can just drop all the files and everything will be visible), therefore keep an eye on the absolute paths you're using in your files to avoid errors when loading the assets.

### **7-1 pattern**
* If you'd like to know more about what's each **SASS** directory about, you can check these articles for more information:

    - [Use the 7-1 pattern for a manageable codebase](https://openclassrooms.com/en/courses/5625786-produce-maintainable-css-with-sass/5723581-use-the-7-1-pattern-for-a-manageable-codebase)
    - [sass-7-1-pattern](https://gist.github.com/rveitch/84cea9650092119527bc)
    - [7-1 Sass Architecture](https://www.learnhowtoprogram.com/user-interfaces/building-layouts-preprocessors/7-1-sass-architecture)

> **Note:** the versions shown in those articles may vary from mine and it's ok, at the end of the day a project structure is different depending on the project needs and differs from person to person, from team to team, and even from companies to companies, therefore this is my own interpretation of a pattern that already exists, but feel free of modifying it if it's necessary.

### **Icons**
* Remember to use [Iconifier](https://iconifier.net/) to create all the icon-size versions of an image.

* All the images obtained with Iconifier must be put in the icons directory to work well with the Gulp images tasks.

### **Netlify**
* There's a basic Netlify config file to help you when deploying the project altogether with Netlify and Github.

    - The base directory is where Netlify will build the site from (if it's necessary). This directory is where's located all the Gulp tasks and package.json files.
    - The commands are basically those needed to build the site as I mentioned before.
    - The publish directory is where Netlify will put everything that was built with the commands mentioned above.

If you don't know anything about what I've mentioned before, I encourage you to leave the file as it's by default, it'll work just perfectly with the current project structure. In case you won't use Netlify to deploy the site you can remove it without problems.

### **Gulp tasks**
The plugins used by default are the following:

- **HTML tasks**

    - [gulp-htmlmin](https://www.npmjs.com/package/gulp-htmlmin)
    - [gulp-cache-bust](https://www.npmjs.com/package/gulp-cache-bust)
    - [gulp-plumber](https://www.npmjs.com/package/gulp-plumber)

- **Images tasks**

    - [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)
    - [imagemin-mozjpeg](https://www.npmjs.com/package/imagemin-mozjpeg)
    - [imagemin-optipng](https://www.npmjs.com/package/imagemin-optipng)
    - [gulp-webp](https://www.npmjs.com/package/gulp-webp)
    - [imagemin-webp](https://www.npmjs.com/package/imagemin-webp)
    - [gulp-avif](https://www.npmjs.com/package/gulp-avif)
    - [imagemin-avif](https://www.npmjs.com/package/imagemin-avif)

- **Javascript tasks**

    - [gulp-plumber](https://www.npmjs.com/package/gulp-plumber)
    - [gulp-concat](https://www.npmjs.com/package/gulp-concat)
    - [terser](https://www.npmjs.com/package/terser)

- **Styles tasks**
    - [gulp-sass](https://www.npmjs.com/package/gulp-sass)
    - [sass](https://www.npmjs.com/package/sass)
    - [gulp-purgecss](https://www.npmjs.com/package/gulp-purgecss)
    - [plumber](https://www.npmjs.com/package/gulp-plumber)
    - [gulppostcss](https://www.npmjs.com/package/gulp-postcss)
    - [autoprefixer](https://www.npmjs.com/package/autoprefixer)
    - [cssnano](https://www.npmjs.com/package/cssnano)

> **Note:** if you'd like to know more about what each plugin does you can click the links that send you to the **npm package** and then read the descriptions for more information.

> **Note:** remember that if you'd like to change the folders' names you'll have also to change them in the **Gulp tasks** paths that could be related to that directory.


* The task located in the scripts.js file have only 1 source, if you'd like to add more files or complete directories... feel free to do it!, just add new strings with the path to the file/directory of your preference (remember to add a comma after each string).

* In the tasks designated to the images optimization, the convertWebp and convertAvif already have the quality option set to 75, if you'd like to change that you can modify the qualityImages variable (the value must be a number between 1 and 100).

    - As an alternative, you can remove the imagesQuality variable and add an independent value to each config object located in the tasks but there's not much sense on don't preserve consistency in images quality.

* > **Important:** [**PurgeCSS**](https://www.npmjs.com/package/purgecss) is automatically connected with all the HTML files to help you avoid adding styles to elements or classes/ids that don't really exist, therefore if you write styles for an element that it's not included in any of your HTML files, those styles won't be included in the public version once they're processed by Gulp.

    - But, ***what happens when you're trying to inject a class/id from Javascript?*** In those cases you'll need to add those classes manually to an invisible helper element (that's already in the index file to give you a hand), that way PurgeCSS won't exclude the styles from the final result.

    - Due to everything mentioned before, the normalized file isn't totally compiled to the final result at the beginning, but everything should be included once you've finished your project and executed the Gulp tasks one more time.