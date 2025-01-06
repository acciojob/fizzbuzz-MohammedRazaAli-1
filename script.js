//your JS code here. If required.
let output="";
for(let i=1; i<=20; i++){
	if(i%3==0 && i%5==0){
		output="FizzBuzz";
		
	}else if(i%5==0){
		output="Buzz";
		
	}else if(i%3==0){
		output="Fizz";
	}else{
		output = i.toString();
	}
}
alert(output);