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
            return 3;
        }   
    };
    
    BlocsForPrint.hideBlocs();
    ElemOnPage.putBlocsOnPage();
    
    var pushRight = function(){
        var blocs = BlocsForPrint.Blocs()
        var elems = ElemOnPage.Elems()
        blocs.splice(1,1);
        
        console.log(blocs);
    };
    var pushLeft = function(){
        console.log('left_row');
    };

    // Добавление приемника события
    right_row.addEventListener('click', pushRight);
    left_row.addEventListener('click', pushLeft);
})();
