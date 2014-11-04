// JavaScript Document


//$( "#mytable tr:nth-child(2) td" ).length


$( document ).ready(function() {
	var rows = $( "#grid tr" ).length;
	var cells = $( "#grid td" ).length;
	var cols = cells / rows;
	
  $(".tile").click(function(){
	$(this).addClass( "reveal" );
	var next = $(this).nextInDOM('div');
	if(next.text() == "0"){
		 revealZeros(this.id);
	}
  });

  
 function revealZeros(tile) { 
	 var left = tile -1;
	 var right = parseInt(tile) +1;
	 var top = tile - cols;
	 var topRight = parseInt(top) +1;
	 var topLeft = top -1;
	 var bottom = parseInt(tile) + cols;
	 var bottomRight = parseInt(bottom) + 1;
	 var bottomLeft = bottom -1;
	 var tileArray = [ left, right, top, topRight, topLeft, bottom, bottomRight, bottomLeft ];
	//alert(topRight);
	tileArray.forEach(function(entry) {
		newTile= $("img#"+entry);
    	newTile.addClass( "reveal" );
		var next = newTile.nextInDOM('div');
	//alert(next.text());
		if(next.text() == "0"){
		 revealZeros(newTile);
		}
	
	});
	 //alert(topRight);
	 /*var nextCol = $(tile).nextInDOM('img');
	 var prevRow = $(tile).prevInDOM('img');
	 var tile_id = $(tile).attr("id");
	 var col_id = prevCol.attr("id");
		  prevCol.addClass( "reveal" );
		  nextCol.addClass( "reveal" );*/
		  
		  
	}
});

