var counter = 1;
	 function text(counter) {
	 		if (counter == 1) $("#text").html("Welcome to my website! I'm a 20 year old student. My greatest passions are Languages and Computers. I'm always wondering how we build our relationships with people and machines. So, if you want to learn more about me, just click the forward button.");
	 		if (counter == 2) $("#text").html("I don't have much work experience yet, but I have already volunteered in an animal protection fund called Tierhilfe KOS. It has been very exciting so far. I've translated the contents of their website from German to English, including a touching story about the cat Julius (see him on the left)!");
	 		if(counter == 3) $("#text").html("Since 2014 I'm a student of Creative Computing at the University of London, but it has not been enough for me, and I decided to read Linguistics at the University of Vienna in 2015.");
	 		if(counter == 4) $("#text").html("I've already learnt a lot in my Computing programme, this includes Java, HTML, CSS, MySQL, Processing - and more is to be learnt soon!");
	 		if(counter == 5) $("#text").html("I speak 3 languages fluently: Russian is my native tongue, then come English and German (both at advanced level now).");
	 		if(counter == 6) $("#text").html("You can contact me by writing an email: yaroslava.ugoleva@gmail.com, calling me in Austria: +436608450732, or by writing me a private message on Facebook. Thank you for your attention! Hope to see you soon.");
	 }
	 function image(counter) {
	 	if(counter == 1) $("#big1").attr('src',"378A6311.jpg");
	 	if(counter == 2) $("#big1").attr('src',"cat.jpg");
	 	if(counter == 3) $("#big1").attr('src',"edu.jpg");
	 	if(counter == 4) $("#big1").attr('src',"programming.jpg");
	 	if(counter == 5) $("#big1").attr('src',"languages.jpg");
	 	if(counter == 6) $("#big1").attr('src',"contactme.jpg");
	 }
	 $(".link").click(function() {
	 	var id = $(this).attr('id');
	 	counter = parseInt(id.slice(-1));
	 	$("#text").click(text(counter));
	 });
	 $(".link").click(function() {
	 	var id = $(this).attr('id');
	 	counter = parseInt(id.slice(-1));
	 	$("#big1").click(image(counter));
	 });
	 $("#text").click(text(counter));
	 $("#big1").click(image(counter));
	 $("#back").click(function back1() {
	 	counter = counter - 1;
	 	if(counter<1) {
	 		counter =6;
	 	}
	    $("#text").click(text(counter));
	 });
	 $("#back").click(function back2() {
	 	if(counter<1) {
	 		counter =6;
	 	}
	 	$("#big1").click(image(counter));
	 });
	 $("#forward").click(function forward1() {
	 	counter = counter + 1;
	 	if(counter>6) {
	 		counter = 1;
	 	}
	 	$("#text").click(text(counter));
	 });
	 $("#forward").click(function forward2() {
	 	if(counter>6) {
	 		counter = 1;
	 	}
	    $("#big1").click(image(counter));
	});