$(document).ready(function() {
	
    // Check for hash value in URL
    var hash = window.location.hash.substr(1);
    var href = $('#qwerty').each(function(){
        var href = $(this).attr('qwer.html');
        if(hash==href.substr(0,href.length-5)){
            var toLoad = hash+'.html #content';
            $('#qwer').load(toLoad)
        } 
    });
    
    $('qwerty').click(function(){
    
    var toLoad = $(this).attr('qwer.html')+' #qwer';
    $('#qwer').hide('fast',loadContent);
    $('#load').remove();
    $('#wrapper').append('<span id="load">LOADING...</span>');
    $('#load').fadeIn('normal');
    window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
    function loadContent() {
    	$('#content').load(toLoad,'',showNewContent())
    }
    function showNewContent() {
    	$('#content').show('normal',hideLoader());
    }
    function hideLoader() {
    	$('#load').fadeOut('normal');
    }
    return false;
    
    });
});


