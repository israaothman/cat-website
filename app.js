// ctrl + ?

// 1- Add at least 3 dynamic components to your web page. These can be based on user input, or other dynamic input data. (alert / prompt / document.write)

//2- At least one dynamic component should be based on user input.

// 3- At least one dynamic component should use a conditional statement to determine the output.


alert('welcome to our website');
var input = prompt('Do you like cats or dogs ?');
// console.log(input);
// document.write('you like '+input)


while(input != 'cats' && input!='dogs' ){
  input = prompt('please answer with cats or dogs ONLY!!!!')
}
 
 var numOf = prompt('How many ' + input + ' do you want to see?');

 for(var i=0; i< numOf ; i++){
   if(input == 'cats'){
   document.write('<img src="https://www.humanesociety.org/sites/default/files/styles/1441x612/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=MnaVHwPi" alt="cat">')
 
}else if (input=='dogs'){
   document.write('<img src="https://media.nature.com/lw800/magazine-assets/d41586-020-01430-5/d41586-020-01430-5_17977552.jpg" alt="dogs">')
  
}
 }

