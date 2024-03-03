document.addEventListener("DOMContentLoaded", function() {
    // I see this in youtube only how to set and get cookie
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }

    
    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1, c.length);
            }
            if (c.indexOf(nameEQ) == 0) {
                return c.substring(nameEQ.length, c.length);
            }
        }
        return null;
    }

    
    var likeCount = parseInt(getCookie('likeCount')) || 0;
    var dislikeCount = parseInt(getCookie('dislikeCount')) || 0;

    
    document.getElementById('likeCount').textContent = likeCount;
    document.getElementById('dislikeCount').textContent = dislikeCount;

    
    document.getElementById('likeBtn').addEventListener('click', function() {
        if (!getCookie('liked')) {
            likeCount++;
            setCookie('likeCount', likeCount); 
            setCookie('liked', true, 30);
            document.getElementById('likeCount').textContent = likeCount;
            
            
            document.getElementById('dislikeBtn').disabled = true;
        }
    });

    document.getElementById('dislikeBtn').addEventListener('click', function() {
        if (!getCookie('disliked')) {
            dislikeCount++;
            setCookie('dislikeCount', dislikeCount); 
            setCookie('disliked', true, 30);
            document.getElementById('dislikeCount').textContent = dislikeCount;
            
           
            document.getElementById('likeBtn').disabled = true;
        }
    });

 // I see this in youtube
    document.getElementById('resetBtn').addEventListener('click', function() {
         
        document.cookie = 'likeCount=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = 'dislikeCount=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = 'liked=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = 'disliked=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        
        
        likeCount = 0;
        dislikeCount = 0;

        
        document.getElementById('likeCount').textContent = likeCount;
        document.getElementById('dislikeCount').textContent = dislikeCount;

       
        document.getElementById('likeBtn').disabled = false;
        document.getElementById('dislikeBtn').disabled = false;
    });
});
