$(document).ready(function(){
  console.log('jQuery loaded');

  // write to local storage from input when button save clicked
  $('.btn-submit').on('click', function(){

    var title = $('.text-entry').val();
    var author = $('.text-author').val(); 
    var bookInfo = [];
    bookInfo.push(title, author);
   
   ;
    //localStorage.bookInfo += JSON.stringify({ "bookTitle": title, "bookAuthor": author});

    $('.list-display-field').each(function(index){
      $(this).append("<td>" + bookInfo[0] + ", " + bookInfo[1]+ "</td>");
      console.log(bookInfo[index])
   });

    
   
    localStorage.setItem('formInputValues', bookInfo);
    var myItemInStorage = localStorage.getItem('formInputValues');
    // console.log('myItemInStorage', myItemInStorage);

    // display the value here
   //$('.list-display-field').append(myItemInStorage); // ??

  });


  // delete from local storage when delete button clicked
  $('.btn-delete').on('click', function(){
    localStorage.removeItem('formInputValues');
  });

});


 // need to be able to add multiple vals to display field
 // try appending myItemInStorage to display field




