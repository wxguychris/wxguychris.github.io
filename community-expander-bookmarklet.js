( function(jQuery, all){ 
    all = all || false;
    var to;
    var expando = function( all ){
        var o = jQuery('.cm-nested-comments-link a');
        if( o.length > 0 ){
            o.each(function(a,b){ b.click(); });
            if(all) to = setTimeout(function(){ expando(); } , (Math.random() * 1000) + 1500 );
        }  
    };
    if( window.location.href.match(/community.servicenow.com/igm) !== null && 
        window.location.href.match(/id=community_question/igm) !== null && 
        jQuery !== null ) 
        expando( all );
})(jQuery , true);
