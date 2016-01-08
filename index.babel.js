
import gulp from "gulp";
var $ = require("gulp-load-plugins")();

import lost from 'lost';

class Styles{
    constructor(src,dest){

        this.src = src;
        this.dest = dest;

        this.autoprefixer = [
            'ie >= 10',
            'ie_mob >= 10',
            'ff >= 30',
            'chrome >= 34',
            'safari >= 7',
            'opera >= 23',
            'ios >= 7',
            'android >= 4.4',
            'bb >= 10'
        ];

        this.postcssPlugins = [
            lost()
        ]
    }
    compile() {
        return gulp.src(this.src)
            .pipe($.changed(this.dest, {extension: '.css'}))
            .pipe($.stylus())
            .pipe($.autoprefixer(this.autoprefixer))
            .pipe($.postcss(this.postcssPlugins))

            .pipe(gulp.dest(this.dest))

            .pipe($.size({title: "Styles were compiled!"}))
            .pipe($.livereload());
    }
}


export default function(src,dest){
    var styles = new Styles(src,dest);
    return styles.compile();
}
