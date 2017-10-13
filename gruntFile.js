// const gulp = require('gulp');
// const sass= require('gulp-sass');
// gulp.registerTask('sass', ()=>{
//   return gulp.src('sass/*.scss')
//     .pipe(sass())
//     .pipe(gulp.dest('build'))
// })
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
  sass: {                              // Task
    dist: {                            // Target
      options: {                       // Target options
        style: 'expanded'
      },
      files: {                         // Dictionary of files
        'build/css/main.css' : 'scss/app.scss',       // 'destination': 'source'
      }
    }
  },
  watch: {
  scripts: {
    files: ['js/*.js','scss/*.scss'],
    tasks: ['concat','sass']

  },

}
  // uglify: {
  //   my_target: {
  //     files: {
  //       'build/js/output.min.js': ['js/functions.js']
  //     }
  //   }
  // }
});
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('default', ['sass']);

};
