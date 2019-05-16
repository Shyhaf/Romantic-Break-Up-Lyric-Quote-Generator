// on page load hide everything except the buttons to run the generator
$('.quotes').hide();
$('.form-group').hide();
$('.quit').hide();
$('p').hide();

//function to show romantic quotes
function showLoveQuotes() {
    //delete prior quotes from memory
    $('.quotes').empty();
    function Fragment(array) {
        this.array = array;
        for (var i=0; i<array.length;i++)
        this.fragment = array[Math.floor(Math.random()*array.length)];
    }

    //save the input value
    //ensures the current input value is used to generate fresh quotes
    var number = $('input').val();

    //randomly generate quotes as often as the input number
    for (var i=0; i< number; i++){
        var $beginning = new Fragment(["My love, ", "My endless love, ", "Dreamlover, ", "Honey, ", "Baby, ", "Sugar, ", "Sweetie, ", "Darling, ", "Sweetheart, ", "Darling, "]);
        var $middle = new Fragment(["you mean the world to me, ",  "there's only you in my life, ", "I'll be a fool for you, ", "you had my attention at hello, ", "it still feels like our first time together, ", "you're still the one I love, ", "I love you, ", "we belong together, ", "I wanna give you my name, ", "I've finally found you, "]);
        var $end = new Fragment(["I can't resist your charms.","everything you say makes a beautiful sound.", "you changed my whole life.", "I love the way that you look without your makeup.", "your love is one in a million.", "I have loved you for a thousand years.", "I'm so into you.", "I'm so thankful I found you.", "you're the one.", "I fall in love with you every single day."]);
    //add heart to the beginning of the quote and dynamically add the quote to the quotes class
    $('.quotes').append("<i class='fas fa-heart'></i> " + $beginning.fragment + $middle.fragment + $end.fragment).append('<br>');
    //dynamically set background color 
    $('.quotes').css('background-color', 'teal');
}
};

//function to show break-up quotes
function showBreakUpQuotes(){
    //delete prior quotes from memory
    $('.quotes').empty();

    function Fragment(array) {
        this.array = array;
        for (var i=0; i<array.length;i++)
        this.fragment = array[Math.floor(Math.random()*array.length)];
    }

    //save the input value
    //ensures the current input value is used to generate fresh quotes
    var number = $('input').val();

    //randomly generate quotes as often as the input number
    for (var i=0; i< number; i++){
    var $beginning2 = new Fragment(["I can't believe I fell for your lies, I'm smarter than that, ", "We don't talk anymore, ", "You keep insisting when you know our love's out the door, ", "It's time to wake up and face reality, ", "It's not worth the drama, ", "I feel so frustrated lately, ", "I always fall for your type, ", "A kiss in the rain and your love was gone, ", "I shoulda treated you like the skunk you are, ", "I shoulda known you could never be true, "]);
    var $middle2 = new Fragment(["I'm over it, ",  "too little too late, ", "it's too late to apologize, ", "don't wanna fight no more, ", "I wish nothing but the best for you, ", "sometimes it lasts in love and sometimes it hurts instead, ", "we've come to the end of the road, ", "me, myself and I is all I got, ", "this pain is just too deep, ", "it's just another sad love song, "]);
    var $end2 = new Fragment(["the show is over say goodbye.","it's over now.", "so much for my happy ending.", "we are never ever getting back together.", "goodbye  my lover.", "deuces.", "at least we stole the show.", "these wounds won't seem to heal.", "now you're just somebody that I used to know.", "there's just too much that time cannot erase."]);
    //dynamically set background color
    $('.quotes').css('background-color', 'coral').css('color', 'whitesmoke');
    //add broken heart to the beginning of the quote and dynamically add the quote to the quotes class
    $('.quotes').append("<i class='fas fa-heart-broken'></i> " + $beginning2.fragment + $middle2.fragment + $end2.fragment).append('<br>');
    }
};

//on click function for romantic quotes button
$('.romantic-quotes').on('click', function(){
    //show input field 
    $('.form-group').slideDown();
    //hide romantic quotes button, heartbreak quotes button, and the prior quotes
    $('.btn-warning').hide();
    $('.quotes').hide();
    
    //keypress function to check when a user has accessed the input field
    $('input').keypress(function(event){

        //check if the enter key has been pressed    
        var keycode = (event.keyCode ? event.keyCode : event.which);

        //only run the rest of the function if the enter key has been pressed
        //this prevents the code from running when a user simply begins to type a number
	    if(keycode == '13'){

        //save the input number
        var number = $('input').val();
        //after a number has been entered, do the following:
            //check which number was keyed in to determine number of quotes to display
            //run the function to show quotes as often as the input number
            //hide the romantic quotes and heartbreak quotes buttons
            //hide the input field
            //fade in the quotes
            //show the button to quit the program if so desired
            if (number === '1'){
                showLoveQuotes();
                $('.btn-warning').show();
                $('.quotes').fadeIn(1500);
                $('.quit').show();
                $('.form-group').hide(); 
            }

            else if (number === '2'){
                for (var i=0; i< number; i++){
                    showLoveQuotes();
                    }
                $('.quotes').fadeIn(1500);
                $('.form-group').hide();
                $('.btn-warning').show();
            }

            else if (number === '3'){
                for (var i=0; i< number; i++){
                    showLoveQuotes();
                    }
                $('.quotes').fadeIn(1500);
                $('.form-group').hide();
                $('.btn-warning').show();
            }

            else if (number === '4'){
                for (var i=0; i< number; i++){
                    showLoveQuotes();
                    }
                $('.quotes').fadeIn(1500);
                $('.form-group').hide();
                $('.btn-warning').show();         
                }

            else if (number === '5'){
                for (var i=0; i< number; i++){
                    showLoveQuotes();
                    }
                $('.quotes').fadeIn(1500);
                $('.form-group').hide();
                $('.btn-warning').show();
                }

            else {
                $('.btn-warning').slideDown(600);
                $('.quotes').empty().hide();
                $('.form-group').hide();
        }
   
    }
});    
   //reset input value to null 
   $('input').val('');
});


//on click function for break-up quotes button
$('.break-up-quotes').on('click', function(){
    //show input field 
    $('.form-group').slideDown();
    //hide romantic quotes button, heartbreak quotes button, and the prior quotes
    $('.btn-warning').hide();
    $('.quotes').hide();
    
    //keypress function to check when a user has accessed the input field
    $('input').keypress(function(event){

        //check if the enter key has been pressed    
        var keycode = (event.keyCode ? event.keyCode : event.which);

        //only run the rest of the function if the enter key has been pressed
        //this prevents the code from running when a user simply begins to type a number
	    if(keycode == '13'){

        //save the input number
        var number = $('input').val();
        //after a number has been entered, do the following:
            //check which number was keyed in to determine number of quotes to display
            //run the function to show quotes as often as the input number
            //hide the romantic quotes and heartbreak quotes buttons
            //hide the input field
            //fade in the quotes
            //show the button to quit the program if so desired
            if (number ==='1'){
                showBreakUpQuotes();
                $('.quotes').fadeIn(1500);
                $('.btn-warning').show();
                $('.form-group').hide(); 
               }

            else if (number === '2'){
                for (var i=0; i< number; i++){
                    showBreakUpQuotes();
                    }
                $('.quotes').fadeIn(1500);
                $('.btn-warning').show();
                $('.form-group').hide();         
                }

            else if (number === '3'){
                for (var i=0; i< number; i++){
                    showBreakUpQuotes();
                }
                $('.quotes').fadeIn(1500);
                $('.btn-warning').show();
                $('.form-group').hide(); 
            }

            else if (number === '4'){
                for (var i=0; i< number; i++){
                    showBreakUpQuotes();
                }
                $('.quotes').fadeIn(1500);
                $('.btn-warning').show();
                $('.form-group').hide(); 
            }
    
            else if (number === '5'){
                for (var i=0; i< number; i++){
                showBreakUpQuotes();
                }
                $('.quotes').fadeIn(1500);
                $('.btn-warning').show();
                $('.form-group').hide(); 
                }

            else {
                $('.btn-warning').show();
                $('.quotes').empty().hide();
                $('.form-group').hide();
            }
        }
    });
    //reset input value to null
    $('input').val('');

});

//on click function to quit running the generator
$('.quit').on('click', function(){
    $('.btn-warning').hide();
    $('.quotes').hide();
    $('.quit').hide();
    $('p').show();
});