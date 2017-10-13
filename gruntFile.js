const gulp = require('gulp');
const sass= require('gulp-sass');
gulp.registerTask('sass', ()=>{
  return gulp.src('sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('build'))
})
module.exports = (grunt)=>{
// grunt.registerTask('speak',function(){
//   console.log("Hello from grunt");
// })
// Project configuration.

grunt.initConfig({
  concat: {
    js: {
      src: ['js/app.js', 'js/functions.js'],
      dest: 'build/js/app.min.js'
    },
  },
  watch: {
  scripts: {
    files: ['js/*.js'],
    tasks: ['concat']

  },
},
  // uglify: {
  //   my_target: {
  //     files: {
  //       'build/js/output.min.js': ['js/functions.js']
  //     }
  //   }
  // }
});
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-watch');
gulp.task('default',['sass']);
};
