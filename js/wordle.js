var WORDS = [];
// var CLASSES = [];
var WORDS_WRAPPER = '.jumble-text-block';
var WORDS_CONTAINER = 'div';
var WORDS_ELEMENT = 'span';

var pushToArray = function(){
	$(WORDS_WRAPPER).find(WORDS_CONTAINER).each(function(){
		WORDS.push($(this));
	});	
}
var listAttr = function(){
	$(WORDS_WRAPPER).each(function() {
	  $.each(this.attributes, function() {
	    // this.attributes is not a plain object, but an array
	    // of attribute nodes, which contain both the name and value
	    if(this.specified) {
	      console.log(this.name, this.value);
	    }
	  });
	});	
}
listAttr();

var addClasses = function(){

}
var addDelay = function(){
	var i = 1;
	$(WORDS_WRAPPER).find(WORDS_CONTAINER).each(function(){
		var delayTime = i * 0.1 ;
		$(this).find(WORDS_ELEMENT).css('animation-delay', delayTime+'s', '-webkit-animation-delay', delayTime+'s');
		// $(this).find(WORDS_ELEMENT).css();
		i++;
	});			
}
var inView = function(){	
	var winHeight = $(window).height();
	var fromTop = $(WORDS_WRAPPER).offset().top;
	var toScroll = fromTop - winHeight;
	var scrolled = $(document).scrollTop();	
	if(toScroll <= scrolled){
		$(WORDS_WRAPPER).addClass('active');
	}
}
function shuffle(o){
	for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}
var insertWords = function(){
	$(WORDS_WRAPPER).html(WORDS);
}

pushToArray();
inView();

shuffle(WORDS);
insertWords();

addDelay();

shuffle(WORDS);
insertWords();

$(window).on('scroll', function(){
	inView();
});
