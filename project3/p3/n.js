$(function(){ // must always be here if you use Jquery 
    let db = firebase.firestore().collection('Notes'/** same name you create it in firebase */)
    let resList = $('.res-container')

    db.get()
    .then(result => {
        let changes = result.docChanges() // gets array of docs 

        changes.forEach(res =>{
            console.log(res.doc.data());
            resList.append(`<li data-id= "${res.doc.id}"> ${res.doc.data().title} - ${res.doc.data().location}
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
            let Note =  $('input[name=Note]').val()
           
            //---- HW ----
            db.doc(id).get().then(res => {
               // console.log(res.doc);
               $('input[name=title]').val(res.doc.data().title)
               $('input[name=Note]').val(res.doc.data().Note)
                
            })
           // db.doc(id).update()
            //.then()
          }) 



// create data and store to resturants collection
    $('.submit').click(function(){
       let title = $('input[name=title]').val()
        let Note =  $('input[name=Note]').val()

        console.log(title)
        console.log(Note)

        db.add({
            name:title,
            location:Note
        }).then(res =>{
            resList.append(`<li data-id= "${res.id}"> ${title} - ${Note} 
            <button class="edit">edit</button> <button class="delete">delete</button> </li>`)
            // append is to append the data directly without uploading the page 
        })

    })

 })
