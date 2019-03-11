

/** 
 * -- collection and documents --
 * C - creat - post 
 * R - Read - get 
 * U - update - post , put , patch
 * D - delete - delete 
 */


 $(function(){ // must always be here if you use Jquery 
    let db = firebase.firestore().collection('restaurants'/** same name you creat it in firebase */)
    let resList = $('.res-container')

    db.get()
    .then(result => {
        let changes = result.docChanges() // gets array of docs 

        changes.forEach(res =>{
            console.log(res.doc.data());
            resList.append(`<li data-id= "${res.doc.id}"> ${res.doc.data().name} - ${res.doc.data().location}
            <button class="edit">edit</button> <button class="delete">delete</button>  </li>`)
        });

    }).catch(err => 
        console.log(err))

        resList.on('click',".delete", function(){
          // #1 one way
          // $(this).parent().attr("data-id")
          // var id = $(this).attr('data-id');
          // #2 other way
          //console.log($(this).parent().data("id"))
          let id = $(this).parent().data("id")
          db.doc(id).delete()
          .then(res => {
            $(this).parent().remove()

          })
        }) 
        resList.on('click',".edit", function(){
            let id = $(this).parent().data("id")
            //let name = $('input[name=name]').val()
            let location =  $('input[name=location]').val()
           
            //---- HW ----
            db.doc(id).get().then(res => {
               // console.log(res.doc);
               $('input[name=name]').val(res.doc.data().name)
               $('input[name=location]').val(res.doc.data().location)
                
            })
           // db.doc(id).update()
            //.then()
          }) 



// create data and store to resturants collection
    $('.submit').click(function(){
       let name = $('input[name=name]').val()
        let location =  $('input[name=location]').val()

        console.log(name)
        console.log(location)

        db.add({
            name: name,
            location:location
        }).then(res =>{
            resList.append(`<li data-id= "${res.id}"> ${name} - ${location} 
            <button class="edit">edit</button> <button class="delete">delete</button> </li>`)
            // append is to append the data directly without uploading the page 
        })

    })

 })