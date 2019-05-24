// on page load hide everything except the buttons to run the generator
$('.quotes').hide();
$('.form-group').hide();
$('.quit').hide();
$('p').hide();
var number, part1, part2, part3; 
function Fragment(array) {
    this.array = array;
}

var $beginning = new Fragment(["My love, ", "My endless love, ", "Dreamlover, ", "Honey, ", "Baby, ", "Sugar, ", "Sweetie, ", "Darling, ", "Sweetheart, ", "Darling, "]);
var $middle = new Fragment(["you mean the world to me, ",  "there's only you in my life, ", "I'll be a fool for you, ", "you had my attention at hello, ", "it still feels like our first time together, ", "you're still the one I love, ", "I love you, ", "we belong together, ", "I wanna give you my name, ", "I've finally found you, "]);
var $end = new Fragment(["I can't resist your charms.","everything you say makes a beautiful sound.", "you changed my whole life.", "I love the way that you look without your makeup.", "your love is one in a million.", "I have loved you for a thousand years.", "I'm so into you.", "I'm so thankful I found you.", "you're the one.", "I fall in love with you every single day."]);
var $beginning2 = new Fragment(["I can't believe I fell for your lies, I'm smarter than that, ", "We don't talk anymore, ", "You keep insisting when you know our love's out the door, ", "It's time to wake up and face reality, ", "It's not worth the drama, ", "I feel so frustrated lately, ", "I always fall for your type, ", "A kiss in the rain and your love was gone, ", "I shoulda treated you like the skunk you are, ", "I shoulda known you could never be true, "]);
var $middle2 = new Fragment(["I'm over it, ",  "too little too late, ", "it's too late to apologize, ", "don't wanna fight no more, ", "I wish nothing but the best for you, ", "sometimes it lasts in love and sometimes it hurts instead, ", "we've come to the end of the road, ", "me, myself and I is all I got, ", "this pain is just too deep, ", "it's just another sad love song, "]);
var $end2 = new Fragment(["the show is over say goodbye.","it's over now.", "so much for my happy ending.", "we are never ever getting back together.", "goodbye  my lover.", "deuces.", "at least we stole the show.", "these wounds won't seem to heal.", "now you're just somebody that I used to know.", "there's just too much that time cannot erase."]);
    
function generateQuotes (array1, array2, array3){      
    for (var i=0; i<array1.length; i++){
        part1 = array1[Math.floor(Math.random()*array1.length)];
        part2 = array2[Math.floor(Math.random()*array2.length)];
        part3 = array3[Math.floor(Math.random()*array3.length)];
    }   
};

//function to show romantic quotes
function showLoveQuotes() {
    //delete prior quotes from memory
    $('.quotes').empty();
    //save the input value
    //ensures the current input value is used to generate fresh quotes
    number =  $('input').val();
    //randomly generate quotes as often as the input number 
    //add heart to the beginning of the quote and dynamically add the quote to the quotes class
    for (var i = 0; i<number; i++){
        generateQuotes($beginning.array, $middle.array, $end.array);
        $('.quotes').append("<i class='fas fa-heart'></i> " + part1 + part2 + part3).append('<br>');
    }      
    //dynamically set background color 
    $('.quotes').css('background-color', 'teal');
    //hide the input field
    //fade in the quotes
    //show the romantic quotes and break-up quotes buttons
    $('.btn-warning').show();
    $('.quotes').fadeIn(1500);
    $('.form-group').hide(); 
};

//function to show break-up quotes
function showBreakUpQuotes(){
    //delete prior quotes from memory
    $('.quotes').empty();
    //save the input value
    //ensures the current input value is used to generate fresh quotes
    number = $('input').val();

    //randomly generate quotes as often as the input number
    //add broken heart to the beginning of the quote and dynamically add the quote to the quotes class
    for (var i=0; i< number; i++){
    generateQuotes($beginning2.array, $middle2.array, $end2.array);
    $('.quotes').append("<i class='fas fa-heart-broken'></i> " + part1 + part2 + part3).append('<br>');
    }
    //dynamically set background color
    $('.quotes').css('background-color', 'coral').css('color', 'whitesmoke');
    //hide the input field
    //fade in the quotes
    //show the romantic quotes and break-up quotes buttons
    $('.form-group').hide(); 
    $('.quotes').fadeIn(1500);
    $('.btn-warning').show();
};

function enterInput(){
    //show input field 
    $('.form-group').slideDown();
    //hide romantic quotes button, heartbreak quotes button, and the prior quotes
    $('.btn-warning').hide();
    $('.quotes').hide();
}

//on click function for romantic quotes button
$('.romantic-quotes').on('click', function(){
    enterInput();
    
    //keypress function to check when a user has accessed the input field
    $('input').keypress(function(event){

        //check if the enter key has been pressed    
        var keycode = (event.keyCode ? event.keyCode : event.which);

        //only run the rest of the function if the enter key has been pressed
        //this prevents the code from running when a user simply begins to type a number
	    if(keycode == '13'){

        //save the input number
            number = $('input').val();
        //after a number has been entered, do the following:
            //check which number was keyed in to determine number of quotes to display
            //run the function to show quotes as often as the input number
            if (number === '1'){
                showLoveQuotes(); 
            }
            else if (number === '2'){
                for (var i=0; i< number; i++){
                    showLoveQuotes();
                    }
            }
            else if (number === '3'){
                for (var i=0; i< number; i++){
                    showLoveQuotes();
                    }
            }
            else if (number === '4'){
                for (var i=0; i< number; i++){
                    showLoveQuotes();
                    }    
            }
            else if (number === '5'){
                for (var i=0; i< number; i++){
                    showLoveQuotes();
                    }
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

//on click function for break-up quotes button
$('.break-up-quotes').on('click', function(){
    enterInput();
    
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
            if (number ==='1'){
                showBreakUpQuotes();
               }
            else if (number === '2'){
                for (var i=0; i< number; i++){
                    showBreakUpQuotes();
                    }       
                }
            else if (number === '3'){
                for (var i=0; i< number; i++){
                    showBreakUpQuotes();
                } 
            }

            else if (number === '4'){
                for (var i=0; i< number; i++){
                    showBreakUpQuotes();
                }
            }
            else if (number === '5'){
                for (var i=0; i< number; i++){
                showBreakUpQuotes();
                }
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