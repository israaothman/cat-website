// ctrl + ?

// 1- Add at least 3 dynamic components to your web page. These can be based on user input, or other dynamic input data. (alert / prompt / document.write)

//2- At least one dynamic component should be based on user input.

// 3- At least one dynamic component should use a conditional statement to determine the output.


alert('welcome to our website');
var input = prompt('Do you like cats or dogs ?');
console.log(input);
document.write('you like '+input)

if(input == 'cats'){
  alert('join the club')
}else if (input=='dogs'){
  alert('think again');
}else{
  alert('only cats or dogs')
}