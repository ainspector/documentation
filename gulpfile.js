var gulp = require('gulp'),
  nunjucksRender = require('gulp-nunjucks-render'),
  sass = require('gulp-sass'),
  marked = require('marked'),
  markdown = require('nunjucks-markdown');

var markedOptions = {
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pendantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
};

var nunjucksConfig = {
  lstripBlocks: true,
  trimBlocks: true,
  watch: false
};

gulp.task('default', function () {
  var env = nunjucksRender.nunjucks.configure(['templates/'], nunjucksConfig);
  marked.setOptions(markedOptions);
  markdown.register(env, marked);

  gulp.src('src/*.html')
    .pipe(nunjucksRender())
    .pipe(gulp.dest('build'));

  gulp.src('src/images/*')
    .pipe(gulp.dest('build/images'));

  gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/css'));
});
