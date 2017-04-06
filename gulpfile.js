var gulp = require('gulp'),
    main = require('gulp-main-bower-files'),
    eliminar = require('del'),
    filtro = require('gulp-filter');

gulp.task('default',['limpiar'], function () {
    var filtroJS = filtro('**/*.js', { restore: true });
    return gulp.src('bower.json')
     .pipe(main({
         
         overrides: {
             admintle:{
                 main: [
                 'bootstrap/css/bootstrap.min.css',
                 'bootstrap/css/bootstrap.css.map',
                 'bootstrap/js/bootstrap.min.js',
                 'bootstrap/fonts/*.*',
                 'dist/css/AdminLTE.min.css',
                 'dist/css/skins/_all-skins.min.css',
                 'plugins/jvectormap/jquery-jvectormap-1.2.2.css',
                 'dist/js/app.min.js',
                 'plugins/jQuery/*.*',
                 'plugins/slimScroll/jquery.slimscroll.min.js',
                 'plugins/fastclick/fastclick.js',
                 'plugins/jvectormap/jquery-jvectormap-1.2.2.min.js',
                 'plugins/jvectormap/jquery-jvectormap-world-mill-en.js',
                 'plugins/sparkline/jquery.sparkline.min.js',
                 'plugins/chartjs/Chart.min.js',
                 'dist/img/*.*' 
                 ]
             }
         }


     }     )  )
     .pipe(filterJS)
     .pipe(filterJS.restore)
     .pipe(gulp.dest('./app/assets/libs'));


});

gulp.task('limpiar',function(){
    return del(['app/assets/libs/**/*']);
});