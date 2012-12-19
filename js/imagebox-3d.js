var imagebox3D = function(selector, delay_shown_ms, delay_hidden_ms, hidden_callback, shown_callback, _jQuery) {
    if (_jQuery === undefined) _jQuery = $;
    delay_shown_ms |= 5000;
    delay_hidden_ms |= 0;
    
    var sbringInportedPrefixes = ["", "-webkit-", "-moz-"];
    _jQuery(selector).addClass("imgbox3d_box");
    
    var toggleAnimationForPrefix = function(prefix, target) {
        var oldAnimationName = target.css(prefix + "animation-name");// || target.css("animation-name");
        target.css(prefix + "animation-play-state", "paused");
        if (oldAnimationName == "bringIn") {
            target.css(prefix + "animation-name", "bringOut");            
            
            if(shown_callback) shown_callback(target);
            
            setTimeout(function() {
                target.css(prefix + "animation-play-state", "running");                
            }, delay_shown_ms);
            return true;
        } else if (oldAnimationName == "bringOut") {
            target.css(prefix + "animation-name", "bringIn");
            if(hidden_callback) hidden_callback(target);
            setTimeout(function() {
                target.css(prefix + "animation-play-state", "running");
            }, delay_hidden_ms);
            return true;
        }        
        return false;
    };
    
    var toggleAnimation = function(target) {
        for(var i = 0, len = sbringInportedPrefixes.length; i < len; i++) {
            if (target.css(sbringInportedPrefixes[i] + "animation-name") === null) continue; //This prefix is not sbringInported, skip     
            if (toggleAnimationForPrefix(sbringInportedPrefixes[i], target)) break; //We successfully toggled, stop trying
        }
    }
    
    _jQuery(selector).on("webkitAnimationEnd", function(e) {
        toggleAnimation(_jQuery(e.currentTarget));
    }).on("animationend", function(e) {
        toggleAnimation(_jQuery(e.currentTarget));
    });
    
    //Kick it off!
    _jQuery(selector).each(function(index, elem) {
        toggleAnimation(_jQuery(elem));
    });
};