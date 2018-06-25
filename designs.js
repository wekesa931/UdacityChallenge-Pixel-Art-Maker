
var table = '#pixelCanvas';
var row;
row = '<tr></tr>';
var column;
column =  '<td></td>';
var color=$('#colorPicker');

$('#sizePicker').submit(function makeGrid(event) {
 
   event.preventDefault();
   width = $('#inputWidth').val();
  height = $('#inputHeight').val();
 
for(let r=0;r<height;r++){
  
  $(table).append(row);
 
   for(let s = 0;s<width;s++){
   
     $('tr').last().append(column);
   
 }
}

});

$(table).on('click','td',function(){
  let color = $('#colorPicker').val();
  // Grab the input color each time, in case it's changed.

  $(this).css('background-color', color);
  // Set this cell's background to the input color.
});