This site will include helpful bits of information, nifty tools, and other cool stuff I find or create that might be useful to others.

_Knowledge belongs to the world. Use it._

## ServiceNow Tools

### Bookmarklet: Community replies expander
The [ServiceNow Community](https://community.servicenow.com) site is a great repository of knowledge and information, including historical information about the platform dating back many years. Recently, ServiceNow moved the Community site onto the ServiceNow platform. Replies to community forum questions and answers are no longer shown by default, instead requiring the user to click a link to show each individual reply.

This method of loading replies is very inefficient for regular users of the Community site, so I created these bookmarklets to make it easier to expand replies and gather knowledge faster.

There are two versions of this bookmarklet: 

#### Expand next layer
This [bookmarklet](#learn-more) will expand the next layer of hidden replies (__not__ all remaining hidden replies). 
When you click the bookmarklet, each visible "View __n__ replies to __username__" link will be clicked.

#### Expand all replies
This [bookmarklet](#learn-more) will expand all hidden replies, regardless of the depth of those replies. 
When you click the bookmarklet, each visible "View __n__ replies to __username__" link will be clicked, repeating until there are no more hidden replies to the question.

This option loads all replies with a single click, but at the cost of increased network traffic, browser workload, and load on the ServiceNow communities site. 

If you experience performance issues when using this version, try the [less intensive version](#expand-next-layer).

#### Bookmarklets

[Expand Replies: Community](javascript:(%20function(jQuery%2C%20all)%7Ball%20%3D%20all%20%7C%7C%20false%3Bvar%20to%3Bvar%20expando%20%3D%20function(%20all%20)%7Bvar%20o%20%3D%20jQuery('.cm-nested-comments-link%20a')%3Bif(%20o.length%20%3E%200%20)%7Bo.each(function(a%2Cb)%7B%20b.click()%3B%20%7D)%3Bif(all)%20to%20%3D%20setTimeout(function()%7B%20expando()%3B%20%7D%20%2C%20(Math.random()%20*%201000)%20%2B%201500%20)%3B%7D%7D%3Bif(%20window.location.href.match(%2Fcommunity.servicenow.com%2Figm)%20!%3D%3D%20null%20%26%26window.location.href.match(%2Fid%3Dcommunity_question%2Figm)%20!%3D%3D%20null%20%26%26jQuery%20!%3D%3D%20null%20)expando(%20all%20)%3B%7D)(jQuery%20%2C%20false)%3B)

[Expand All Replies: Community](javascript:(%20function(jQuery%2C%20all)%7Ball%20%3D%20all%20%7C%7C%20false%3Bvar%20to%3Bvar%20expando%20%3D%20function(%20all%20)%7Bvar%20o%20%3D%20jQuery('.cm-nested-comments-link%20a')%3Bif(%20o.length%20%3E%200%20)%7Bo.each(function(a%2Cb)%7B%20b.click()%3B%20%7D)%3Bif(all)%20to%20%3D%20setTimeout(function()%7B%20expando()%3B%20%7D%20%2C%20(Math.random()%20*%201000)%20%2B%201500%20)%3B%7D%7D%3Bif(%20window.location.href.match(%2Fcommunity.servicenow.com%2Figm)%20!%3D%3D%20null%20%26%26window.location.href.match(%2Fid%3Dcommunity_question%2Figm)%20!%3D%3D%20null%20%26%26jQuery%20!%3D%3D%20null%20)expando(%20all%20)%3B%7D)(jQuery%20%2C%20true)%3B)

Drag and drop one of the links above onto your browser's bookmarks bar to save the bookmarklet. To use it, click the bookmarklet when viewing a ServiceNow Community question to expand all replies.

## Learn More
[Bookmarklets](https://en.wikipedia.org/wiki/Bookmarklet) allow you to easily run javascript code on a page in your browser, as if you had run the code in the Developer Console. 

#### Code review
The bookmarklet contains the following Javascript code, which only runs when you click the button on a community question page.

If you are not on a community question page when clicking the button, the bookmarklet will detect this, and do nothing.
```js
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
Uses `false` as the second parameter in the final line of the script:
```
})(jQuery , false);
```

###### "All replies" version
Uses `true` as the second parameter in the final line of the script:
```
})(jQuery , true);
```

## About
Author: Chris Webster ([email](mailto:github-nospam<AT>sys.redstone.email))
