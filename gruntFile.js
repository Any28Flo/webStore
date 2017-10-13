module.exports = function(grunt){
// grunt.registerTask('speak',function(){
//   console.log("Hello from grunt");
// })
// Project configuration.
grunt.initConfig({
  concat: {
    js: {
      src: ['js/app.js', 'js/functions.js'],
      dest: 'build/js/app.min.js',
    },
  },
  uglify: {
    my_target: {
      files: {
        'build/js/appMain.js': ['js/functions']
      }
    }
  }
});
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');


};
