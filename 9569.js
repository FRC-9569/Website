// navbar

function showBar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideBar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

// meet the team nav

function openTab(evt, givenTab) {

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tab");

    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("link");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    document.getElementById(givenTab).style.display = "block";
    evt.currentTarget.className += " active";
  }

// small nav scroll function

function sideScroll(direction) {

    // scrollAmount = total scrolled per click so far
    // distance = total distance to scroll in a click
    // step = amount to scroll every 20 ms

    scrollAmount = 0;
    distance = 80;
    step = 10;

    // scrolls by 10px every 20 ms, 80px in desired direction

    var slideTimer = setInterval(function() {
        if (direction == 'left') {
            document.querySelector('.smallnav').scrollLeft -= step;
        }
        else {
            document.querySelector('.smallnav').scrollLeft += step;
        }

        scrollAmount += step;
        
        if(scrollAmount >= distance) {
            window.clearInterval(slideTimer);
        } 
    }, 20);
}

function vidControl(func) {

    const vidplayer = document.querySelector('.vidplayer');
    const minbutton = document.querySelector('.minimize');
    const maxbutton = document.querySelector('.maximize');

    if (func == 'min') {
        vidplayer.style.display = 'none';
        minbutton.style.display = 'none';
        maxbutton.style.display = 'inline-block'
    }
    else {
        vidplayer.style.display = 'block';
        maxbutton.style.display = 'none';
        minbutton.style.display = 'inline-block';
    }

}