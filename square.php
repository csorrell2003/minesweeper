<?php
class Square{
	public $row; //position in row
	public $col; //position in column
	public $square_value; //holds the value of the square
	public $is_a_mine = FALSE;  //is square a mine?
	public $mines_next_to = 0; //number of mines that are touching the square
	
	public function __construct($row, $col){
		$this->row = $row;
		$this->col = $col;
	}
	
	public function is_a_mine(){
		$this->is_a_mine = TRUE;
	}
	
	public function square_value(){		
		echo $this->square_value;		
	}	
}

?>