const myForm = document.querySelector('#myForm');
const sendButton = document.querySelector('#sendButton');

sendButton.addEventListener('click', function(event) {
  event.preventDefault();

  console.log(myForm.elements.name.value);
  console.log(myForm.elements.phone.value);
  console.log(myForm.elements.street.value);
  console.log(myForm.elements.house.value);
  console.log(myForm.elements.housing.value);
  console.log(myForm.elements.flat.value);
  console.log(myForm.elements.floor.value);
  console.log(myForm.elements.comment.value);

  if (myForm.elements.pay[0].checked) {
    console.log('Потребуется сдача'); 
  } else {
    console.log('Оплата по карте');
    
  }
  
  if (myForm.elements.call.checked == true) {
    console.log('Не перезванивать');
  } else { 
    console.log('Перезвоните мне');
  }

  
  
});