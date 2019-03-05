function bar() {
    var b = 'local value'
    console.log(b)
  }
  
  bar() // 'local value'
  
  console.log(b) // b is not defined
  
  let obj ={
      first : "leena",
      last : "karem",
      full: function(){
          return `${this.first} ${this.last} `
      }
  }
  console.log(obj.full());

  document.querySelector("#cowDisplay").addEventListener("click", obj.full())


  let obj1={
    first : "l",
    last : "k"
  }
  let obj2={
    first : "kk",
    last : "oo"
  }

  obj.full.call(obj1)
  obj.full.apply(obj2)

let json ={
    suc : 200 ,
    data: [
        {
        name : "leena"
        },
        {
            name : "leena"
            },
            {
                name : "leena"
                }

    ]
}
//get
$.get(url , function(){
    // json or xml or html or text
    result.data.forEach(function (element) {
        element.name
    })
})
//post
$.post(url , { /* data */ }, function(){
    // json or xml or html or text
    result.data.forEach(function (element) {
        element.name
    })
})
//using fetch
fetch(url)
.then(result => {
    result.data.forEach(function (element) {
        element.name
    })
    .catch(err => {

    })
})
//using ajax
$.ajax({
    url: "http://ga.co/",
    data: {api: 123},
    success : function(){

    }
})

let imgElement= document.querySelector("#id").createElement("/* img or li or */")
imgElement.setAttribute("src","./cat.jpg") // 
document.querySelector("#body").appendChild(imgElement)

$("#newsapi").on('click', function(){

    var url1 = 'https://newsapi.org/v2/top-headlines?' +
              'country=us&' +
              'apiKey=baddbb89804b4323b1bbb96a1c3f8b4e';
    var req = new Request(url1);
    var art;
    
    
    // debugger;
    $.ajax({
    
        url:url1,
        type:"GET",
       // data: {"country":"us" ,"apiKey":"baddbb89804b4323b1bbb96a1c3f8b4e" },
        success:function(data){
          $(".article").remove();
          // console.log(data.articles);
          art = data.articles;
          var imgurl = '';
          var auth = '';
          var title = '';
          var content = '';
          var tempM ='';
          art.forEach(t => {
    // debugger;
             imgurl = t.urlToImage;
             auth = t.author;
             title = t.title;
             content = t.content;
             tempM = temp.replace("#title#",title).replace("#imgurl#",imgurl).replace("#aouther#",auth).replace("#cont#",content) ;
             pupup1 = pupup.replace("#title#",title).replace("#imgurl#",imgurl).replace("#aouther#",auth).replace("#cont#",content) 
          // $("#title").text(title)
          // $("#aouther").text(auth)      
          // $("#cont").text(content)
          // $("#imgurl").attr("src",imgurl);
    
    
    $('#title2').on('click',function(){
      $("#popUp").removeClass("hidden").removeClass("loader")
      $("article").hide();
        });
    
    $('.closePopUp').on('click',function(){
      $('#popUp').addClass('hidden')       
      $("article").show();
    });
    
            $(".articles").append(tempM)
            $("#popUp").append(pupup1)
            // $("#popUp")
          });
    
    
    
    
    
    
    
    
    
    
        },error:function(a,b,c){
          console.error(a,b,c);
        }
    
    
    })
    });

    $('#title2').on('click',function(){
        $("#popUp").removeClass("hidden").removeClass("loader")
        $("article").hide();
          });
      
      $('.closePopUp').on('click',function(){
        $('#popUp').addClass('hidden')       
        $("article").show();
      });
      
              $(".articles").append(tempM)
              $("#popUp").append(pupup1)
              // $("#popUp")
           