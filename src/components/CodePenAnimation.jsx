import { useEffect } from "react";

const CodePenAnimation = () => {
    useEffect(() => {
      const initializeAnimation = () => {
        const bubbles = document.querySelectorAll('.bubble');
        const bubblePosition = [0, 50];
        const search = document.querySelector('.search-wrapper');
        const S = document.querySelector('.S');
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'inputSearch';
        input.placeholder = '_ type something';
        let counter = 0;
        let distanceAll = [];
  
        function bubbling() {
          if (counter < bubbles.length) {
            setTimeout(function () {
              bubbles[counter].classList.add('animate');
              let distance = [counter] * 50 + 'px';
              distanceAll[counter] = distance;
              counter++;
              bubbling(counter);
            }, 80);
          }
        }
  
        bubbling();
  
        search.addEventListener('mouseover', function () {
          console.log('ciao');
          bubbles[0].style = 'width: 350px; border-radius: 10px; z-index: 1;';
          bubbles[0].classList.remove('animate');
          input.placeholder = '>';
          S.style.color = '#333333';
          setTimeout(() => {
            S.innerHTML = '';
            bubbles[0].appendChild(input);
            let inputAppended = document.querySelector('.inputSearch');
            inputAppended.focus();
            inputAppended.style = 'caret-color: transparent';
            inputAppended.addEventListener('keypress', (e) => {
              if (e.keyCode === 13) {
                console.log('Now I am removing text but you can do whatever you want with text value 😊');
                inputAppended.value = '';
              }
            });
          }, 1000);
        });
  
        search.addEventListener('mouseout', function () {
          console.log('ciao');
          let inputAppended = document.querySelector('.inputSearch');
          bubbles[0].style = '';
          bubbles[0].classList.add('animate');
          S.style.color = '#4C83F0';
          inputAppended.value = '';
          inputAppended.style = 'caret-color: transparent; z-index: -1;';
          input.placeholder = '';
          setTimeout(() => {
            bubbles[0].removeChild(input);
            S.innerHTML = 'S';
          }, 1000);
        });
      };
  
      initializeAnimation();
    }, []);

return(
    <div dangerouslySetInnerHTML={{__html:`<!-- <div class="container">
    <div class="search-wrapper">
        <div id="searchBox">
            <!-- <form action=""><input class="bubble" type="text" name="search" id="searcInput"></form> -->
            <div class="bubble"><p class="S" style="color: #4C83F0;">S</p></div>
            <div class="bubble" style="left: 50px;"><p style="color: #D1333B;">E</p></div>
            <div class="bubble" style="left: 100px;"><p style="color: #EEB80B;">A</p></div>
            <div class="bubble" style="left: 150px;"><p style="color: #4C83F0;">R</p></div>
            <div class="bubble" style="left: 200px;"><p style="color: #1CAF60;">C</p></div>
            <div class="bubble" style="left: 250px;"><p style="color: #D1333B;">H</p></div>
            <div class="bubble" style="left: 300px;"><p>🔎</p></div>
        </div>

    </div>
</div>


<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
    <defs>
        <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
    </defs>
</svg> -->   `}}></div>
)









}
export{
    CodePenAnimation,
}
