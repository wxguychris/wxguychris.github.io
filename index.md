# Helpful Tidbits
This site will include helpful bits of information, nifty tools, and other cool stuff I find or create that might be useful to others.

_Knowledge belongs to the world. Use it._

## ServiceNow 

### Bookmarklet: Community replies expander

#### Expand next layer
This [bookmarklet](#learn-more) will expand the next layer of hidden replies (__not__ all remaining hidden replies). 
When you click the bookmarklet, each visible "View __n__ replies to __username__" link will be clicked.

#### Expand all replies
This [bookmarklet](#learn-more) will expand all hidden replies, regardless of the depth of those replies. 
When you click the bookmarklet, each visible "View __n__ replies to __username__" link will be clicked, repeating until there are no more hidden replies. 

This option loads all information faster, but at the cost of increased network traffic, browser workload, and load on the ServiceNow communities site.

#### Bookmarklets
TEST - Drag the following link into your bookmark bar: [VU🐓](javascript:(function()%7Bfunction%20callback()%7BparseTT()%7Dvar%20s%3Ddocument.createElement(%22script%22)%3Bs.src%3D%22https%3A%2F%2Fretrography.github.io%2FVUTt%2Fvutt.js%22%3Bif(s.addEventListener)%7Bs.addEventListener(%22load%22%2Ccallback%2Cfalse)%7Delse%20if(s.readyState)%7Bs.onreadystatechange%3Dcallback%7Ddocument.body.appendChild(s)%3B%7D)())

[SN Community Expand Replies](#)

[SN Community Expand All Replies](javascript:(%20function(jQuery%2C%20all)%7Ball%20%3D%20all%20%7C%7C%20false%3Bvar%20to%3Bvar%20expando%20%3D%20function(%20all%20)%7Bvar%20o%20%3D%20jQuery('.cm-nested-comments-link%20a')%3Bif(%20o.length%20%3E%200%20)%7Bo.each(function(a%2Cb)%7B%20b.click()%3B%20%7D)%3Bif(all)%20to%20%3D%20setTimeout(function()%7B%20expando()%3B%20%7D%20%2C%20(Math.random()%20*%201000)%20%2B%201500%20)%3B%7D%7D%3Bif(%20window.location.href.match(%2Fcommunity.servicenow.com%2Figm)%20!%3D%3D%20null%20%26%26window.location.href.match(%2Fid%3Dcommunity_question%2Figm)%20!%3D%3D%20null%20%26%26jQuery%20!%3D%3D%20null%20)expando(%20all%20)%3B%7D)(jQuery%20%2C%20true)%3B)

Drag and drop one of the links above onto your browser's bookmarks bar to save the bookmarklet. To use it, click the bookmarklet when viewing a ServiceNow Community question to expand all replies.

#### Code review
The bookmarklet contains this Javascript code, which only runs when you click the button on a community question page. 
If you are not on a community question page when clicking the button, the bookmarklet will do nothing.
```js
javascript:
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
```
##### Variants
###### "Next layer" version
Uses "false" as the second parameter in the final line of the script:
```
})(jQuery , false);
```

###### "All replies" version
Uses "true" as the second parameter in the final line of the script:
```
})(jQuery , true);
```

## Learn More
[Bookmarklets](https://en.wikipedia.org/wiki/Bookmarklet) allow you to easily run javascript code on a page in your browser, as if you had run the code in the Developer Console. 
