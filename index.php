<!DOCTYPE html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>MineSweeper</title>
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="js/main.js"></script>
<style>
.reveal{
	display:none;
	}
div{
	text-align:center;
	border: black 1px solid;
	font-size:20px;
	height:20px;
	width:20px;
	background-color:#CCCCCC;
}
</style>

</head>
<?php 
include 'board.php';
include 'square.php';
?>

<body>
<table id='grid'>Minesweep!<br>
<form action='index.php'>
<button name="submit" type="submit" value="1">8x8x10</button>
<button name="submit" type="submit" value="2">16x16x40</button>
<button name="submit" type="submit" value="3">16x30x99</button>
</form>



<?php 
if(isset($_GET['submit'])){
	if($_GET['submit'] == 1){
		$game = new Board(8, 8, 10);
	}
	else if($_GET['submit'] == 2){
		$game = new Board(16, 16, 40);
	}
	else if($_GET['submit'] == 3){
		$game = new Board(30, 16, 99);
	}
	else{
	$game = new Board(8, 8, 10);
	}
}

$i=0;
foreach($game->board as $r)
		{	
			echo "<tr>";
			
			foreach($r as $c)
			{
				$i++;
				echo "<td height='20px' width='20px' style='border: solid, 1px, black;'>";
				echo "<img id='" . $i . "' src='img/tile.ico' height='20px' width='20px' style='position:absolute;' class='tile ";
				if($c->is_a_mine == TRUE){
				 	$c->square_value = "*";
					echo "mine";
					}
				if($c->is_a_mine != TRUE){
					$game->surrounding_squares($c);
				}
				echo "'/><div id='col_" . $i . "'>" ;
				$c->square_value();
				echo "</div></td>";
				 
			}
			echo "</tr>";
		}
?>
</table>
</body>
</html>