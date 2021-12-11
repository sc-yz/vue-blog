/*
 * @Author: kian
 * @Date: 2021-10-26 09:53:00
 * @LastEditors: kian
 * @LastEditTime: 2021-10-26 09:53:10
 * @Description:
 */
let gulp = require('gulp');
let sftp = require('gulp-sftp');
let sftpConfig = {
  /* host: '10.10.22.112',
    port: 22,
    user: 'root',
    pass: 'qcloud',
    remotePath: '/opt/html/ryhb/vuewallet' */
  host: '47.106.150.75',
  port: 22,
  user: 'root',
  pass: 'Easy_2019',
  remotePath: '/opt/html/ryhb/vuewallet',
};
gulp.task('upload', function () {
  return gulp.src('dist/**').pipe(sftp(sftpConfig));
});
