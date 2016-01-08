# easy-styles

This package include:
  - stylus
  - autoprefixer
  - postCSS
  - postCSS lost grid system

# Installation
    $ npm install easy-styles
    
# Usage 
```js
gulp.task('default', function () {
    return styles("src/styles.styl","dest")
            .pipe(/*your gulp plugin*/);
});
```


