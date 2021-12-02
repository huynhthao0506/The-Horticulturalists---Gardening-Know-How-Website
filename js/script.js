
        var slideIndex = 1;

        var myTimer;

        var slideshowContainer;

        window.addEventListener("load",function() {
            showSlides(slideIndex);
            myTimer = setInterval(function(){plusSlides(1)}, 5000);
            slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];
            slideshowContainer.addEventListener('mouseenter', pause)
            slideshowContainer.addEventListener('mouseleave', resume)
        })
        // NEXT AND PREVIOUS CONTROL
        function plusSlides(n){
        clearInterval(myTimer);
        if (n < 0){
            showSlides(slideIndex -= 1);
        } else {
        showSlides(slideIndex += 1); 
        }
        if (n === -1){
            myTimer = setInterval(function(){plusSlides(n + 2)}, 5000);
        } else {
            myTimer = setInterval(function(){plusSlides(n + 1)}, 5000);
        }
        }
        //Controls the current slide and resets interval if needed
        function currentSlide(n){
        clearInterval(myTimer);
        myTimer = setInterval(function(){plusSlides(n + 1)}, 5000);
        showSlides(slideIndex = n);
        }

        function showSlides(n){
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        }

        //  // Responsive navi-bar
        //  const hamburger = document.querySelector(".hamburger");
        // const navBar = document.querySelector("#nav-bar");

        // hamburger.addEventListener("click", mobileMenu);

        // function mobileMenu() {
        //     hamburger.classList.toggle("active");
        //     navBar.classList.toggle("active");
        //     navBar.style.height = "100%";
        // }
        // const navLink = document.querySelectorAll(".nav-link");

        // navLink.forEach(n => n.addEventListener("click", closeMenu));

        // function closeMenu() {
        //     hamburger.classList.remove("active");
        //     navBar.classList.remove("active");
        // }
        // Loading Animation
        var myVar;

        function myFunction() {
        myVar = setTimeout(showPage, 1000);
        }

        function showPage() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("myDiv").style.display = "block";
        }
        //Form validation
        function noSubmit() {
            let x = document.getElementById("name").value;
            let z = document.getElementById("email").value;
            let text;
            if (x == "" || z =="") {
                text = "Please fill in all required fields";
            }
            document.getElementById("message-footer").innerHTML = text;
        }
        function errorMess() {
            let y = document.getElementById("email").value;
            let redAlert;
            if (y=="") {
                redAlert= document.getElementById("email").style.border = "solid 1px #ff4040";
                redAlert= document.getElementById("email").style.backgroundColor = "#f3dfdf";
            } 
        }