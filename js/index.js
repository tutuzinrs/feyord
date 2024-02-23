var links = document.querySelectorAll('.navegacao a');

links.forEach(function(link) {
    link.addEventListener('click', function() {
        
        links.forEach(function(innerLink) {
            innerLink.classList.remove('active');
        });

        
        link.classList.add('active');
    });
});

var links = document.querySelectorAll('.navegacao a');


links.forEach(function(link) {
    link.addEventListener('click', function(event) {
        
        event.preventDefault();

        links.forEach(function(innerLink) {
            innerLink.classList.remove('active');
        });

        link.classList.add('active');

        var targetId = link.getAttribute('href').substring(1);

        var targetElement = document.getElementById(targetId);
        var targetOffset = targetElement.offsetTop;

        window.scrollTo({
            top: targetOffset,
            behavior: 'smooth'
        });
    });
});

document.getElementById("VerMaisBMW").addEventListener("click", function() {
    window.location.href = "../html/vendaBMW.html";
});

document.getElementById("VerMaisMercedes").addEventListener("click", function() {
    window.location.href = "./html/vendaMercedes.html";
});

document.getElementById("VerMaisAudi1").addEventListener("click", function() {
    window.location.href = "/html/vendaAudiRS5.html";
});

document.getElementById("VerMaisJaguarE").addEventListener("click", function() {
    window.location.href = "/html/vendaJaguarE.html";
});

document.getElementById("VerMaisPorsche911").addEventListener("click", function() {
    window.location.href = "/html/vendaPorsche911.html";
});

document.getElementById("VerMaisFord").addEventListener("click", function() {
    window.location.href = "/html/vendaMustang.html";
});
