

 let cerclis=document.querySelectorAll('.how-content .crs span');
 let howtit=document.querySelector('.how-it')
 let linglent=document.querySelector(' .crs .lin-tow')
 let howhigt=document.querySelector('.how-content');
let header=document.querySelector('.header')



// let howhit=howhigt.offsetTop;

// console.log(howhit);



// let outerhieght =howtit.offsetHeight;


// console.log(outerhieght);







    
// let windowhiet=this.innerHeight;


// console.log(windowhiet);

// let  windoscrollTop = this.pageYOffset;



window.onscroll=()=>{
if(scrollY === 0){
    header.style.background="transparent";
   

}else{
    header.style.background="var(--primary)";



}
if(scrollY>1600 && scrollY<2100){

linglent.style.height=  "90%"


cerclis.forEach(e=>e.style.backgroundColor="var(--light-blue)")

}




else{
    linglent.style.height=0+"%"
    cerclis.forEach(e=>e.style.backgroundColor="var(--dark)")
}


}



console.log(scrollY);

let BrowsBtns=document.querySelectorAll('.browse-btns span');


let browsbox=document.querySelector('.brows-box');
console.log(browsbox);

console.log(BrowsBtns);

BrowsBtns.forEach((e)=>{
 
    e.onclick=(e)=>{
        BrowsBtns.forEach(e=>{
            e.classList.remove('brows-active')
        })
        e.target.classList.add('brows-active');
       
    }
  








})


BrowsBtns[1].addEventListener('click',()=>{

console.log('oke');



browsbox.innerHTML=`







<div>
    
     <span class="titel">   <h3><a href="#">Advertising</a></h3>
        <span class='squer-one'>30</span>
     </span> 
    <p>
    Lorem lpsum dolor Sit amet consecetur

    </p>
<img src="imges/undraw_Group_video_re_btu7.png" alt="">
</div>
<div>
    
     <span class="titel"><h3><a href="#">video content</a></h3>
        <span  class='squer-one'>65</span>
     </span> 
    <p>
Lorem lpsum dolor Sit amet consecetur
    </p>
<img src="imges/undraw_online_ad_re_ol62.png" alt="">
</div>
<div>
    
     <span class="titel"><h3><a href="#">Viral Tweet</a></h3>
        <span class='squer-one'>50</span>
     </span> 
    <p>
       Lorem ipsum dolor sit amet consectetur
    </p>
<img src="imges/undraw_viral_tweet_gndb.png" alt="">
</div>



`

})






BrowsBtns[0].addEventListener('click',()=>{

    console.log('oke');
    
    
    
    browsbox.innerHTML=`
    
    
    <div>
    
     <span class="titel">   <h3><a href="#">Web Design</a></h3>
        <span>14</span>
     </span> 
    <p>
        Topic Listing Template based on Bootstrap 5
    </p>
<img src="imges/undraw_Remote_design_team_re_urdx.png" alt="">
</div>
<div>
    
     <span class="titel">   <h3><a href="#">Graphic</a></h3>
        <span>75</span>
     </span> 
    <p>
Lorem lpsum dolor Sit amet consecetur
    </p>
<img src="imges/undraw_Redesign_feedback_re_jvm0.png" alt="">
</div>
<div>
    
     <span class="titel">   <h3><a href="#">Logo Design</a></h3>
        <span>100</span>
     </span> 
    <p>
       Lorem ipsum dolor sit amet consectetur
    </p>
<img src="imges/colleagues-working-cozy-office-medium-shot.png" alt="">
</div>
    `;


})



BrowsBtns[2].addEventListener('click',()=>{

browsbox.innerHTML=`


<div class='fan-one'> 

<span class="titel">   <h3><a href="#">Web Design</a></h3>
<span>14</span>
</span> 
<p>
Topic Listing Template based on Bootstrap 5
</p>
<img src="imges/undraw_Finance_re_gnv2.png" alt="">





</div>



<div class=fan-two> 

<div class="titel">
    <h3>Finance</h3>
    <span>23</span>
</div>



    <p>
        Topic Listing Template includes homepage, listing page, detail page, and contact page.
    </p>
 <button class="btn-lernmore">Learn More</button>


 <div class="share-icons">

 <div class="one">
     <span>share : </span>
     <span class="icons">
     
         <i class="fa-brands fa-twitter"></i>
         <i class="fa-brands fa-facebook-f"></i>
         <i class="fa-brands fa-pinterest-p"></i>
     
     </span>
     

 </div>

<i class="fa-regular fa-bookmark last"></i>

</div>





</div>




`
})




BrowsBtns[3].addEventListener('click',()=>{

    console.log('oke');
    
    
    
    browsbox.innerHTML=`
    
    
    
    
    
    
    
    <div>
        
         <span class="titel">   <h3><a href="#">Advertising</a></h3>
            <span class='squer-three'>30</span>
         </span> 
        <p>
        Lorem lpsum dolor Sit amet consecetur
    
        </p>
    <img src="imges/undraw_Compose_music_re_wpiw.png" alt="">
    </div>
    <div>
        
         <span class="titel"><h3><a href="#">video content</a></h3>
            <span  class='squer-three'>65</span>
         </span> 
        <p>
    Lorem lpsum dolor Sit amet consecetur
        </p>
    <img src="imges/undraw_happy_music_g6wc.png" alt="">
    </div>
    <div>
        
         <span class="titel"><h3><a href="#">Viral Tweet</a></h3>
            <span class='squer-three'>50</span>
         </span> 
        <p>
           Lorem ipsum dolor sit amet consectetur
        </p>
    <img src="imges/undraw_Podcast_audience_re_4i5q.png" alt="">
    </div>
    
    
    
    `
    
    })




BrowsBtns[4].addEventListener('click',()=>{

    console.log('oke');
    
    
    
    browsbox.innerHTML=`
    
    
    
    
    
    
    
    




    <div class='educaton-one'>
        
         <span class="titel"><h3><a href="#">video content</a></h3>
            <span  class='squer-four'>65</span>
         </span> 
        <p>
    Lorem lpsum dolor Sit amet consecetur
        </p>
    <img src="imges/undraw_Graduation_re_gthn.png" alt="">
    </div>

    <div class='educaton-one'>
        
         <span class="titel"><h3><a href="#">Viral Tweet</a></h3>
            <span class='squer-four'>50</span>
         </span> 
        <p>
           Lorem ipsum dolor sit amet consectetur
        </p>
    <img src="imges/undraw_Educator_re_ju47.png" alt="">
    </div>
    
    
    
    `
    
    })



  
    // 

    let allup=document.querySelectorAll('.fa-chevron-down');
    let allcontet=document.querySelectorAll('.fqrs .col-two div .text');
    let spansbtns=document.querySelectorAll('.fqrs .col-two div span');
    let clostlist=document.querySelectorAll('.dropd');




    allup.forEach(e=>{
        e.onclick=()=>{ 

            if(e.classList.contains('fa-chevron-down')){

                e.classList.remove("fa-chevron-down")
                e.classList.add("fa-chevron-up")

            }

        }
    })
allup[0].addEventListener('click',()=>{
    allcontet.forEach(e=>{
        e.classList.add('hide')
    })
    allcontet[0].classList.remove('hide')
    allup[0].classList.add('go');
spansbtns[0].style.background="var(--light)";
    })
allup[1].addEventListener('click',()=>{
allcontet.forEach(e=>{
e.classList.add('hide')
})

allcontet[1].classList.remove('hide')
allup[1].classList.add('go');
spansbtns[1].style.background="var(--light)";



})


allup[2].addEventListener('click',()=>{
allcontet.forEach(e=>{
e.classList.add('hide')
})  
allcontet[2].classList.remove('hide')
allup[2].classList.add('go');
spansbtns[2].style.background="var(--light)";

})

    clostlist[0].addEventListener('mouseout',()=>{
        if(clostlist[0].classList.contains('go')){
         allcontet[0].classList.add('hide');}
         clostlist[0].classList.remove('fa-chevron-up')
         clostlist[0].classList.add('fa-chevron-down')
         spansbtns[0].style.background="transparent"
        })

    clostlist[1].addEventListener('mouseout',()=>{
        if(clostlist[1].classList.contains('go')){
         allcontet[1].classList.add('hide');}
         clostlist[1].classList.remove('fa-chevron-up')
         clostlist[1].classList.add('fa-chevron-down')
         spansbtns[1].style.background="transparent"
        })

    clostlist[2].addEventListener('mouseout',()=>{
        if(clostlist[2].classList.contains('go')){
         allcontet[2].classList.add('hide');}
         clostlist[2].classList.remove('fa-chevron-up')
         clostlist[2].classList.add('fa-chevron-down')
         spansbtns[2].style.background="transparent"
        })

 








// clostlist[0].addEventListener("click",()=>{
//         allcontet[0].classList.add('hide')
    
//     })


 









   