const gulp = require('gulp');
// Создайте простую задачу
gulp.task('hello', () => {
    console.log('Hello, Gulp!');
});

// Задача по умолчанию
gulp.task('default', gulp.series('hello'));
