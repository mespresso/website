function compare(number_a,number_b){
	var number_a = number_a.toString();
	var number_b = number_b.toString();
	
	return number_of_A(number_a,number_b)+'A'+number_of_B(number_a,number_b)+'B';
}
function number_of_A(number_a,number_b){
	var number = 0;
	for (var i = 3; i >= 0; i--) {
		if(number_a[i]==number_b[i])
			number++;
	};
	return number;
}
function number_of_B(number_a,number_b){
	var number = 0;
	for (var i = 3; i >= 0; i--) {
		if(in_it(number_a[i],number_b))
			number++;
	};
	return number-number_of_A(number_a,number_b);
}
function in_it(input_number,target_number){
	for (var i = target_number.length - 1; i >= 0; i--) {
		if(target_number[i] == input_number)
			return true;
	};
	return false;
}
function produce_four_bit_norepeat_random_number(){
	var four_digit_number = "";
	while(parseInt(four_digit_number).toString().length<4){
		four_digit_number += add_one_unrepeat_number_behind_the_string(four_digit_number);
	}
	return parseInt(four_digit_number);
}
function add_one_unrepeat_number_behind_the_string(input_string){
	do{
		var output_number = one_random_number();
	}
	while(check_repeat_in_number(input_string+output_number));
	return output_number;
}
function one_random_number(){
	return (parseInt(Math.random()*10)).toString();
}
function check_repeat_in_number(string){
	for (var i = string.length - 1; i >= 0; i--) {
		if(check_repeat_behind_it(i,string))
			return true;
	};
	return false;
}
function check_repeat_behind_it(position,string){
	for (var i = position; i < string.length; i++) {
		if (string[position]==string[i+1]) {
			return true;
		};
	};
	return false;
}
function Guess(random_func,compare_func){
	this.random_func = random_func;
	this.compare_func = compare_func;
	this.guess_times = 0;
	this.random_number = random_func();
}
Guess.prototype.guess = function(guess_number){
	if(guess_number==this.random_number&&this.guess_times<7){
		this.guess_times=7;
		return "you win";
	}
	if (this.guess_times++<=6){

		return this.compare_func(guess_number,this.random_number);
	}
	return "game over";

}