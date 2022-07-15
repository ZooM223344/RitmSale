// map
window.addEventListener('load', init);        
function init() {
    let mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(48.62071514719569, 22.288009042863987), // New York
        styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"visibility":"on"}]},{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"administrative","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"}]},{"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"visibility":"on"}]},{"featureType":"administrative","elementType":"labels.icon","stylers":[{"visibility":"on"}]}]
    };

    let mapElement = document.querySelector('.map');

    let map = new google.maps.Map(mapElement, mapOptions);
    
    let marker1 = new google.maps.Marker({
        position: new google.maps.LatLng(48.62160039602388, 22.291624185552966),
        map: map,
        title: 'Snazzy!',
        icon: 'img/marcker.svg',
    });
    let marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(48.62542414587652, 22.282987947721356),
        map: map,
        title: 'Snazzy!',
        icon: 'img/marcker.svg',
    });
};
// menu butger
const iconBurger = document.querySelector('.Burgerbuton');
if (iconBurger) {
    const menuBurger = document.querySelector('.menu');
    iconBurger.addEventListener("click" , function(e) {
       document.body.classList.toggle('_lock');
       iconBurger.classList.toggle('_active');
       menuBurger.classList.toggle('_active');
    });
}
$(document).ready(function(){
    $('.Reviews__slider').slick({
        dots: true,
        arrows: false,
        centerMode:true,
        centerPadding: '0',
        slidesToShow: 3,
        speed:1500,
        autoplay: true,
        autoplaySpeed:1500,
        responsive:[
            {
                breakpoint:1200,
                settings:{
                    slidesToShow: 1
                }
            },
            {
                breakpoint:780,
                settings:{
                    slidesToShow: 1
                }
            }
        ]
    });
});