setInterval(redwan,1000)
function redwan(){
        var d = new Date();
        var s = d.getSeconds() ;
        var m = d.getMinutes() ;
        var h = d.getHours();
        var amPm = 'AM'
        document.getElementById('s').style.transform = "rotate(" + s * 6 + "deg)";
        document.getElementById('m').style.transform = "rotate(" + m * 6 + "deg)";
        document.getElementById('h').style.transform = "rotate(" + h * 30 + "deg)";
        if(h>12){
            amPm = 'PM'
            h = h - 12;
        }
        if(h < 10){
            h = '0' + h;
        }
        if(m < 10){
            m = '0' + m;
        }
        if(s < 10){
            s = '0' + s;
        }
        document.getElementById('time').innerText = h + ':' + m + ':' + s + '  ' + amPm;
    }
redwan()