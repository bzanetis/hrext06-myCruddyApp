$(document).ready(function(){
  console.log('jQuery loaded');

  // write to local storage from input when button save clicked
  $('.btn-submit').on('click', function(){
    var bookObj = new Object();
    var title = $('.text-entry').val(); // change to title val
    bookObj.title = title;
    var author = $('.text-author').val(); 
    bookObj.name = author;
    var myString = JSON.stringify(bookObj);
    
    //var bookInfo = [];
    //bookInfo.push(title, author);
   
  
    //localStorage.bookInfo += JSON.stringify({ "bookTitle": title, "bookAuthor": author});
   
  $('.list-display-field').each(function(index){
      $(this).append("<td>" + bookObj.title  + ", " + bookObj.name + "</td>");
      //console.log(bookInfo[index])
  });
   

    
   
    localStorage.setItem(bookObj.title, myString);
    var getBook = localStorage.key(localStorage.length - 1);
    var removeBook = localStorage.getItem(getBook);
    console.log(removeBook)


    $('.btn-delete').on('click', function(){
      for (var i = 0; i < localStorage.length; i++) {
        var titleToRemove = localStorage.key(i);
        var bookToRemove = localStorage.removeItem(titleToRemove);
        
      }
      
    
    //localStorage.removeItem(bookObj.title)
    })
  }); 

    //var myItemInStorage = localStorage.getItem(bookObj.title);
    // console.log('myItemInStorage', myItemInStorage);
    //var addToTheList = JSON.parse(myItemInStorage);

    // display the value here
   //$('.list-display-field').append(addToTheList); // ??
}); 

  // delete from local storage when delete button clicked
  
 



 // need to be able to add multiple vals to display field
 // try appending myItemInStorage to display field




