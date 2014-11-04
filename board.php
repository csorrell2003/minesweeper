<?php
class Board{
	private $rows; //number or rows on board
	private $cols;  //number of columns on board
	private $mines;  //number of mines on board
	public $board = array();
	
    public function __construct($rows, $cols, $mines)
    {
		$this->rows = $rows;
		$this->cols = $cols;
		$this->mines = $mines;
		
    	// prepare board 
    	$this->prepBoard();
    	// set mines
    	$this->setMines();
	}
	
	public function prepBoard(){
		for ($row=1; $row <= $this->rows; $row++){
    		for ($col=1; $col <= $this->cols; $col++)
    		{
			$this->board[$row][$col] = new Square($row, $col);
    		}
		}
	}
	
	public function setMines(){
		
		for($m = 0; $m < $this->mines; $m++){
			do{ //mines cannot be set more than once on the same square
				$row = rand(1, $this->rows);
				$col = rand(1, $this->cols);
				$square = $this->board[$row][$col];
			}while($square->is_a_mine == TRUE);  
			$square->is_a_mine();	//set mine	
		}	
		$_SESSION['game'] = $this->board;			
	}
	
	
	public function surrounding_squares($square){
		$row = $square->row;
		$col = $square->col;
		$array = array();
		//top left square
		if(($row + 1 <= $this->rows) and ($col - 1 > 0)){
			$array[]=$this->board[$row +1][$col -1];
		}
		//top right square
		if(($row + 1 <= $this->rows) and ($col + 1 <= $this->cols)){
			$array[]=$this->board[$row +1][$col +1];
		}
		//top square
		if($row + 1 <= $this->rows){
			$array[]=$this->board[$row +1][$col];
		}
		
		//left square
		if($col + 1 <= $this->cols){
			$array[]=$this->board[$row][$col + 1];
		}
		//right square
		if($col - 1 > 0){
			$array[]=$this->board[$row][$col -1];
		}
		//bottom left square
		if(($row - 1 > 0) and ($col - 1 > 0)){
			$array[]=$this->board[$row -1][$col -1];
		}
		//bottom right square
		if(($row - 1 > 0) and ($col + 1 <= $this->cols)){
			$array[]=$this->board[$row -1][$col +1];
		}
		//bottom square
		if($row - 1 > 0){
			$array[]=$this->board[$row - 1][$col];
		}
		
		$this->surrounding_mines($array,$row,$col);
	}
	
	public function surrounding_mines($array,$row,$col){
		$square = $this->board[$row][$col];
		foreach($array as $value){
			if($value->is_a_mine == TRUE){
				$square->mines_next_to++;
			}
		}
		$square->square_value = $square->mines_next_to;
	}

}
?>