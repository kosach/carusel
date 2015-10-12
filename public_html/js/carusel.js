(function() {
    var right_row=document.getElementById("right");
    var left_row=document.getElementById("left");
    BlocsForPrint={
        Blocs : function(){        
            return document.querySelectorAll(".carusel-inner");
        },
        hideBlocs:function(){
            var blocs = this.Blocs();
            //console.log(blocs);
            for(var i=0;i<blocs.length;i++){
                blocs[i].style.cssText = "display:none;";
            }       
            return 3;
        }
    };
    ElemOnPage ={
        Elems : function(){
           return document.querySelectorAll(".carusel-place");
        },
        maxElem:function(){
            var elements = document.querySelectorAll(".carusel-place");
            return elements.length;
        },
        putBlocsOnPage:function(){
            var blocs = BlocsForPrint.Blocs();
            var elems = this.Elems();
            var i;
            var maxElems;

            if(elems.length<blocs.length){
                maxElems = elems.length;           
            }else{
                maxElems =blocs.length;
            }
            for(i=0;i<maxElems;i++){
                elems[i].innerHTML = blocs[i].innerHTML;
            }
        }   
    };
    
    BlocsForPrint.hideBlocs();
    ElemOnPage.putBlocsOnPage();
    
    var pushRight = function(){
        var blocs = BlocsForPrint.Blocs();
        //var elems = ElemOnPage.Elems();
        var i=blocs.length-1;
        var b=i-1;
        var last =  blocs[blocs.length-1].innerHTML;
        console.log(i);
        for(i,b;i>=0;i--,b--){                    
            if(i>0){
                blocs[i].innerHTML=blocs[b].innerHTML; 
            }else{
               blocs[0].innerHTML=last; 
            }
            console.log(blocs[i].innerHTML);
        }
        ElemOnPage.putBlocsOnPage();

    };
    var pushLeft = function(){
        var blocs = BlocsForPrint.Blocs();
        var i=0;
        var b=i+1;
        var first =  blocs[0].innerHTML;
        for(i,b;i<blocs.length;i++,b++){                    
            if(i<blocs.length-1){
                blocs[i].innerHTML=blocs[b].innerHTML; 
            }else{
               blocs[blocs.length-1].innerHTML=first; 
            }
        }
        ElemOnPage.putBlocsOnPage();
    };

    // Добавление приемника события
    right_row.addEventListener('click', pushRight);
    left_row.addEventListener('click', pushLeft);
})();
