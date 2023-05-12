particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);

const $=document
const searchbtn=$.getElementById('search')
const searchinput=$.getElementById('searchinput')
const warningalert=$.getElementById('warning')
const show=$.getElementById('show')
const container=$.getElementById('cont')
const ul=$.getElementsByClassName('ul')






let searchvalue
let turn =0






warningalert.addEventListener('click',()=>{
  location.reload();
})
window.addEventListener('load',()=>{
  warningalert.classList.add('d-none')
  searchinput.value=""
})




searchbtn.addEventListener('click',()=>{
  
 if(searchinput.value){
  
  searchvalue=searchinput.value
  axios({
    method: 'get',
    url: `https://api.dictionaryapi.dev/api/v2/entries/en/${searchvalue}`,
    data:JSON.stringify
  })
  .then(res=>{
    if(!ul[0]){
      console.log(res.data)
      if(res.status==200){
       console.log(res)
       console.log(show)
       
     
       show.insertAdjacentHTML('beforebegin',`
       <ul class="border border-2 rounded-3 border-secondary ul"  >
       <li class="d-flex gap-4">
           <span class="my-1 "   >Word</span>
         
           <span  class="my-1 speech"  >Part of Speech</span>
           <span class="my-1"  >Pronunciation</span>
         
  
           
       </li>
   </ul>
        `)
        turn=1
     res.data.forEach(element => {
      
      
   
      show.insertAdjacentHTML('beforeend',`
      <ul class="border border-2 rounded-3 border-secondary ul"  >
      <li class="d-flex gap-4">
          <span class="my-1  "   >${element.word}</span>
          
          <span  class="my-1 speech"  >${element.meanings[0].partOfSpeech}</span>
          <span class="my-1"  >${element.phonetic}</span>
       
  
          
      </li>
  </ul>
  
        `)
        
   
     
  
      
     });
     
    

     
     searchinput.value="";
    
    
     
  
       
  
  
      }
      else{
  warningalert.classList.remove('d-none')
      }
    }else{
      location.reload()
    }
  })
 }
})





