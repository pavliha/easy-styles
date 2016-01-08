/*
 Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */


// Include Gulp & tools we'll use
import  gulp from 'gulp';
var $ = require('gulp-load-plugins')();


import styles from "./index.babel";



gulp.task('default', function () {
    return styles("test/src/*.styl","test/dest");
});
gulp.task('watch', function () {
    $.livereload.listen({host: null});
    gulp.start(['style']);
    gulp.watch("test/src/*.styl", ['style']);
});
