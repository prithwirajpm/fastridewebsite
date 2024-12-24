
document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('promo-video');
    const section = document.querySelector('.find-us');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          video.play(); 
          setTimeout(() => {
            video.muted = false;
          }, 500);
        } else {
          video.pause();
          setTimeout(() => {
            video.muted = true;
          }, 500);
        }
      });
    }, { threshold: 0.5 });
  
    observer.observe(section);
  });


  
  function maplocation(){
    window.open("https://www.google.com/maps/place/Al+Fattan+Plaza/@25.2542159,55.3338822,13z/data=!3m1!5s0x3e5f69c8fc76ce65:0x94e7dcb4d547dd25!4m6!3m5!1s0x3e5f5d1b81d61725:0xc4c3354de3a5d9eb!8m2!3d25.2512168!4d55.3450721!16s%2Fg%2F11bbwxlx9m?entry=ttu&g_ep=EgoyMDI0MDgyNi4wIKXMDSoASAFQAw%3D%3D");
  }
  