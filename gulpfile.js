var path = require('path'),
    gulp = require('gulp'),
    del = require('del'),
    seq = require('gulp-sequence'),
    webpack = require('webpack-stream'),
    plumber = require('gulp-plumber'),
    webpackConfig = require('./webpack.config.js'),
    gulpWebpack = require('gulp-webpack'),
    bs = require('browser-sync').create();//静态服务器

var SRC_ENTRY = 'src/modules/page_modules/entry/',
    NODE_MODULES = 'node_modules',
    FOLDER = 'temp',
    TEMPLATE = ['src/modules/**/*.html'],
    JSFILES = ['src/modules/**/*.js'],
    LESS = 'src/modules/**/*.less';

gulp.task('clean', function (cb) {
    return del('temp', cb);
});

gulp.task('pack', function(){
    return gulp.src([SRC_ENTRY + 'page.js'])
        .pipe(plumber())
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(FOLDER));
});

gulp.task('pack-vendor', function(){
    return gulp.src([
            NODE_MODULES + '/angular/angular.min.js',
            NODE_MODULES + '/angular-route/angular-route.min.js'
        ])
        .pipe(gulp.dest(FOLDER + '/libs'));
});

gulp.task('html', function(){
    return gulp.src(TEMPLATE)
        .pipe(gulp.dest(FOLDER));
});

gulp.task('reload', function(){
    bs.reload();
});

gulp.task('html-watch', seq('html', 'reload'));

//编译脚本
gulp.task('watch', ['default'], function(){
    gulp.watch(JSFILES, ['pack']);
    //gulp.watch(LESS, ['pack']);
    gulp.watch(TEMPLATE, ['html-watch']);
    gulp.watch('temp/**/*.js').on('change', function(event) {
        console.log('File ' + event.path + 'changed...');
        bs.reload();
    });
});


gulp.task('dev',function(){
    bs.init({
        server:'./'
    });
    gulp.run('watch');
});

//gulp.task('deploy',[''],function(){
//
//});

gulp.task('default', seq('clean', 'html', 'pack', 'pack-vendor'));