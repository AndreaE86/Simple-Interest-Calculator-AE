function compute() {
	//accesses value of principal from element ID
	p = document.getElementById("principal").value;
 
    	//assigns value of amount user input to var principal
 	var principal = document.getElementById("principal").value;
 
    	//validates entry for amount and determines entry is not zero or negative
    	//returns alert for invalid input
	if ( principal <= 0 ) {
	     alert("Enter a positive number");
             principal.focus();
    	     return false;
	} 
    
    	//variables for values of rate and years
	var rate = document.getElementById("rate").value;
	var years = document.getElementById("years").value;
 
	//calculates interest for saving money
	var interest = principal * years * rate /100;
  
    	//current date plus the years selected assigned to variable
	var year = new Date().getFullYear()+parseInt(years);

    	//displays message and complete output of calculation to user
	document.getElementById("result").innerHTML= "\<br\>\<br\>If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>.\<br\> You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>"
}
	
	

function updateRate() 
{
    //enables slider rate to change values and display them dynamically 
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

  
