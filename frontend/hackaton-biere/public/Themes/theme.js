
    var regex = new RegExp("(^| )" + "theme" + "=([^;]+)")
    if(document.cookie){
        var theme = regex.exec(document.cookie)[2]
        if(theme){
            console.log(theme)
            console.log( document.getElementsByClassName("theme")[0])
            document.getElementsByClassName("theme")[0].setAttribute("href","Theme/"+theme+".css");
            console.log( document.getElementsByClassName("theme")[0])
        }
    }
    


    