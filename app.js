$(document).ready(function(){
  console.log('jQuery loaded');

  // write to local storage from input when button save clicked
  $('.btn-submit').on('click', function(){

    var title = $('.text-entry').val();
    var author = $('.text-author').val(); 
    var bookInfo = title + ",  " + author;
    //bookInfo.push(title, author);
    //localStorage.bookInfo += JSON.stringify({ "bookTitle": title, "bookAuthor": author});

    localStorage.setItem('formInputValues', bookInfo);
    var myItemInStorage = localStorage.getItem('formInputValues');
    // console.log('myItemInStorage', myItemInStorage);

    // display the value here
    $('.list-display-field').text(myItemInStorage); // ??

  });

  // need to be able to add multiple vals to display field
  // try appending myItemInStorage to display field
  // could try setting myIS to an array --> have a func that iterates & pushes 

  // delete from local storage when delete button clicked
  $('.btn-delete').on('click', function(){
    localStorage.removeItem('formInputValues');
  });

});

$("#btn").click(function () {

        var principal = $("#amount").val();
        var interest = $("#interest").val();
        var years = $("#period").val();
        var item = [];
       item.push(principal,interest,years);
       localStorage.item += JSON.stringify({ "principalAmount": principal, "interestAmount": interest, "Period": years });


    });