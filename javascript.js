document.addEventListener("DOMContentLoaded", function() {
  // code...
  console.log('window - onload'); // 4th
  const panels =  document.querySelectorAll('.panel');


    function toggleOpen() {
      console.log('hello')
      this.classList.toggle('open')
    }
    function toggleActive(e) {
      console.log('hiya');
      if(e.propertyName.includes('flex')){
      this.classList.toggle('open-active');
      }
    }
    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));


});
// window.onload = function() {
//   console.log('window - onload'); // 4th
//   const panels =  document.querySelectorAll('panel');
//
//
//     function toggleOpen(){
//       console.log('hello')
//       this.classList.toggle('open')
//     }
//     panels.forEach(panel => panel.addEventListener('click', toggleOpen));
//
// };
