var aTags=document.querySelectorAll('.nav-menu a');
    
for(let i=0;i<aTags.length;i++){
    aTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var  targetSectionID=this.textContent.trim().toLowerCase();
        var targetSection=document.getElementById(targetSectionID);
        
        var intervalId=setInterval(function(){
            scrollVertically(targetSection,intervalId);
        },20);
        
    });
}


function scrollVertically(targetSection,intervalId){
    var targetSectionCor=targetSection.getBoundingClientRect();
           
    if(targetSectionCor.top<=0){
        clearInterval(intervalId);
        return;
    }
    window.scrollBy(0,50);
}