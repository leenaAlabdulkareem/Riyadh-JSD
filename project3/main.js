/**
 * git clone https://github.com/leenaAlabdulkareem/test.git
 * git add .
 * git commit -m "first push"
 * git push origin master
 * 
 */


$(function(){ // must always be here if you use Jquery 
    let db = firebase.firestore().collection('Notes'/** same name you create it in firebase */)
    let resList = $('.res-container')
