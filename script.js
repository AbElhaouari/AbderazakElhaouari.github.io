var darkthemeOn = false
var open = false

function navFunction(){
var nav = document.getElementById("navbar")

    open =! open
    nav.style.display= "none"

    if (open ){
        nav.style.display = "block"
    }
    else{
        nav.style.display= "none"
    }
}

function darkTheme(){
    var body = document.getElementById("body")
    var text = document.querySelectorAll(".text")
    var secondtitle = document.querySelectorAll(".secondtitle")
    var darkimg = document.getElementById("darkimg")
    var lightimg = document.getElementById("lightimg")
    var hero = document.querySelector(".hero")
    var spans = document.querySelectorAll(".spanElement")

    var emaildark = document.getElementById("emdr")
    var email = document.getElementById("em")
    var linkedindark = document.getElementById("lkdr")
    var linkedin = document.getElementById("lk")
    var githubdark = document.getElementById("gitdr")
    var github = document.getElementById("git")
    var line = document.getElementById("line")
    
    var inputs = document.querySelectorAll("input , textarea")
    var nav= document.querySelector(".header-links")

    console.log(inputs)
    darkthemeOn = !darkthemeOn

    text.forEach(element => {
    
        spans.forEach(spanElemet=>{

        secondtitle.forEach(secondtitleelement=>{

            inputs.forEach(input =>{

                
                if( darkthemeOn  ){
                    body.style.backgroundColor = "rgb(32, 32, 32)"
                    body.style.transition = "1s"
                    element.style.color = "white"
                    element.style.transition = ".5s"
                    spanElemet.style.backgroundColor = "rgb(68, 68, 68)"
                secondtitleelement.style.color = "white"
                emaildark.hidden = false
                email.hidden = true
                darkimg.hidden =  false
                lightimg.hidden = true
                linkedindark.hidden = false
                linkedin.hidden = true
                githubdark.hidden = false
                github.hidden = true
                line.style.backgroundColor = "white"
                input.style.backgroundColor = "gray"
                // nav.style.backgroundColor = "rgb(68, 68, 68)"
                // if (open){
                //     nav.style.backgroundColor= "rgb(68, 68, 68)"
                // }else{
                //     nav.style.display = "none"
                // }

            }else{
                body.style.backgroundColor = "#f5efeb"
                body.style.transition = "1s"
                element.style.color = "black"
                element.style.transition = ".5s"
                spanElemet.style.backgroundColor = "#6C8EBF"
                secondtitleelement.style.color = "black"
                darkimg.hidden =  true
                lightimg.hidden = false
                emaildark.hidden = true
                email.hidden = false
                linkedindark.hidden = true
                linkedin.hidden = false
                githubdark.hidden = true
                github.hidden = false
                line.style.backgroundColor = "black"
                input.style.backgroundColor = "white"
                // nav.style.backgroundColor = "#f5efeb"

                // if(respnav != null){

                //     respnav.style.backgroundColor= "#f5efeb"
                // }
            } 
        })
        })
        })
      
     });

     
}