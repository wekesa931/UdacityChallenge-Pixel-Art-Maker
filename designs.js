//initialize the table ID and assign the row and cell elements to given values
const tabular = '#pixelCanvas';
const tabularWidth = '<tr></tr>';
const tabularHeight =  '<td></td>';


$('#sizePicker').submit(function makeGrid(event) {
 
   event.preventDefault();
   //get the value of height input
   width = $('#inputWidth').val();
   //get the value of the width input
  height = $('#inputHeight').val();
 
for(let r=0;r<height;r++){
  
  $(tabular).append(tabularWidth);//adds table at the end depending on the input
 
   for(let s = 0;s<width;s++){
   
     $('tr').last().append(tabularHeight);//adds rows depending on the input
   
 }
}

});

$(tabular).on('click','td',function paintGrid(){         // Checks the input color from the color picker.
  let tabularColor = $('#colorPicker').val();
 

  $(this).css('background-color', tabularColor);  // assigns the color to the selected cell
  
});