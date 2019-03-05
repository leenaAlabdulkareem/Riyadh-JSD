//$(document).ready(function(){
    
//})

$(function(){

    //$.get(url,function)
    $.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=99e0bda69030571a73083f0ce5774dfc" 
    ,function(res){
        
        console.log(results.results);
        res.results.forEach(function(element) {
            console.log(element.title)
            $(".movies").append(`<li><img src="https://image.tmdb.org/t/p/w500/${element.poster_path} " /></li>`)

        });
    })

    $.ajax({
        url:"https://api.themoviedb.org/3/discover/movie" ,
        type:"get",
        data:{api_key:"99e0bda69030571a73083f0ce5774dfc"},
        success: function(res){
            //this way 
            console.log(res.results)
            //or this way 
            res.results.forEach(element =>{
                $(".movies").append(`<img src=https://image.tmdb.org/t/p/w500/${element.poster_path} " />`)
                
            });
            $('.loader').hide()
        },
        error : function(xhr,status,err){
            console.log("not working")
        }
    })

    $('.test').click(function(){

    })
})


//https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=%3Cyour_key_here%3E&query=jack
// 99e0bda69030571a73083f0ce5774dfc

// https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=%3C99e0bda69030571a73083f0ce5774dfc%3E&query=jack