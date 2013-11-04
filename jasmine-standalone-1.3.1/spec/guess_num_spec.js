describe("compare two number",function(){
	
	it("1234 compare with 1234 should be 4A0B",function(){
	
		expect(compare(1234,1234)).toEqual("4A0B");
	}); 


	it("1234 compare with 1235 should be 3A0B",function(){
		expect(compare(1234,1235)).toEqual("3A0B");
	});

	it("1234 compare with 1256 should be 2A0B",function(){
		expect(compare(1234,1256)).toEqual("2A0B");
	});

	it("1234 compare with 1243 should be 2A2B",function(){
		expect(compare(1234,1243)).toEqual("2A2B");
	});

	it("1234 compare with 1245 should be 2A1B",function(){
		expect(compare(1234,1245)).toEqual("2A1B");
	});

	it("1234 compare with 1342 should be 1A3B",function(){
		expect(compare(1234,1342)).toEqual("1A3B");
	});

	it("1234 compare with 1325 should be 1A2B",function(){
		expect(compare(1234,1325)).toEqual("1A2B");
	});

	it("1234 compare with 1356 should be 1A1B",function(){
		expect(compare(1234,1356)).toEqual("1A1B");
	});

	it("1234 compare with 1567 should be 1A0B",function(){
		expect(compare(1234,1567)).toEqual("1A0B");
	});

	it("1234 compare with 5678 should be 0A0B",function(){
		expect(compare(1234,1567)).toEqual("1A0B");
	});

	it("1234 compare with 2567 should be 0A1B",function(){
		expect(compare(1234,2567)).toEqual("0A1B");
	});

	it("1234 compare with 2367 should be 0A2B",function(){
		expect(compare(1234,2367)).toEqual("0A2B");
	});

	it("1234 compare with 3425 should be 0A3B",function(){
		expect(compare(1234,3425)).toEqual("0A3B");
	});
	
	it("1234 compare with 4321 should be 0A4B",function(){

		expect(compare(1234,4321)).toEqual("0A4B");
	});
});
describe("product a random four digit no repeat number",function(){
	var number = produce_four_bit_norepeat_random_number();
	it("produce a number",function(){
		expect(typeof(number)).toEqual("number");
	});
	it("the number is four digit",function(){
		expect((number.toString().length)).toEqual(4);
	});
	it("the number is random",function(){
		var number_one = produce_four_bit_norepeat_random_number();
		var number_two = produce_four_bit_norepeat_random_number();
		expect(number_one!=number_two).toEqual(true);
	});
	it("the four bit number is no-repeat",function(){
		var test_number = number.toString();
		expect(check_repeat_in_number(test_number)).toEqual(false);
	});
	
});
describe("user can guess a number compare with the random number",function(){
		var guess,
		random_movke_func,
		compare_movke_func;

		random_mock_func=function(){
			return 4321;
		}
		compare_mock_func = function(number_a,number_b){
			if(number_a==1234)
				return "0A4B";
		}
	guess = new Guess(random_mock_func,compare_mock_func);
	it("1234 compare with random number(4321) will got 0A4B",function(){
		expect(guess.guess(1234)).toEqual("0A4B");
	});
});
describe("In every game,guess beyond 6 times or get the right answer,the game over",function(){
	var guess_game,
		random_movke_func,
		compare_movke_func;

		random_mock_func=function(){
			return 2345;
		}
		compare_mock_func = function(number_a,number_b){
			return "4A0B";
		}
	guess_game = new Guess(random_mock_func,compare);
	it("user guess the right number(2345),you win",function(){
		expect(guess_game.guess(2345)).toEqual("you win");
	});
	it("after user win user guess again,game over",function(){
		expect(guess_game.guess(2345)).toEqual("game over");
	});
	it("user guess the 7 time no win,game over",function(){
		guess_game = new Guess(random_mock_func,compare_mock_func);
		for (var i = 0; i < 7; i++) {
			guess_game.guess(1234);
		};
		expect(guess_game.guess(1234)).toEqual("game over");
	});
});