// JavaScript Document
$( document ).ready(function() {
	var rows = $( "#grid tr" ).length;
	var cells = $( "#grid td" ).length;
	var cols = cells / rows;
	
  $(".tile").click(function(){	
	
	 var Stack = [];	  
	 reveal(this.id);
	 
	while(Stack.length>0){
		toReveal = Stack.pop();
		revealTiles(toReveal);
	}
	
	function reveal(tile){
		$("img#"+tile).addClass( "reveal" );
		 if($("img#"+tile).hasClass("mine")){
		   gameover(tile);
	    }
	    if($("div#col_"+tile).text() == "0"){
		   Stack.push(tile);
	    }
    }
  
   function revealTiles(tile) { 
	 var left = tile -1;
	 if((tile !=1)&&(left%cols != 0) && (!$("img#"+left).hasClass("reveal"))){
		 reveal(left);
	 }
		 
	 var right = parseInt(tile) +1;
	 if((tile%cols != 0) && (!$("img#"+right).hasClass("reveal"))){
		 reveal(right);
	 }
	 
	 var top = tile - cols;
	 if((tile > cols) && (!$("img#"+top).hasClass("reveal"))){
		 reveal(top);
	 }
	
	 var topRight = parseInt(top) +1;
	 if((tile > cols) && (tile%cols != 0) && (!$("img#"+topRight).hasClass("reveal"))){
		 reveal(topRight);
	 }
	 
	 var topLeft = top -1;
	   if((tile > cols) && (topLeft%cols != 0) && (!$("img#"+topLeft).hasClass("reveal"))){
		 reveal(topLeft);
	 }
	 
	 var bottom = parseInt(tile) + cols;
	 if((tile < (cells-cols)) && (!$("img#"+bottom).hasClass("reveal"))){
		 reveal(bottom);
	 }
	 
	 var bottomRight = parseInt(bottom) + 1;
	 if((tile < (cells-cols)) && (tile%cols != 0) && (!$("img#"+bottomRight).hasClass("reveal"))){
		 reveal(bottomRight);
	 }
	 
	 var bottomLeft = bottom -1;
	  if((tile < (cells-cols)) && (bottomLeft%cols != 0) && (!$("img#"+bottomLeft).hasClass("reveal"))){
		 reveal(bottomLeft);
	 }
	 
   }
   
   function gameover(tile){
	   $('img').unbind("click");
	   $("div#col_"+tile).css("background-color","red");
	   $("img.mine").addClass("reveal");	   
   }
   
  checkWin();
   
   
 }); 
 
  //Disable contextmenu on right click 
  document.oncontextmenu = function() {return false;};
  //set or remove flags on right click
  $(".tile").mousedown(function(e){ 
    if( e.button == 2 ) { 
	 var oldsrc = $(this).attr('src');
        var src = '';
        if (oldsrc == 'img/tile.ico'){
			 src = 'img/tile3.ico';
			 $(this).off("click");
			 $(this).addClass("flagged");
			 }
        if (oldsrc == 'img/tile3.ico'){
			src = 'img/tile.ico';
			$(this).on("click", this, function() {
				$(this).addClass("reveal")
			});
		}
		$(this).attr('src', src);
      return false; 
    } 
    return true; 
  }); 	
	
});

 function checkWin(){
	   var win = true;
	        $('img').each(function() {
	            if (!$(this).hasClass('reveal')){
					if(!$(this).hasClass('mine')){
	                	win = false;
					}
	            }
	            
	        });
	        if (win == true)
	            alert('Winner!');
   	}
