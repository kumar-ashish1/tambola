<?php

include_once "bridge.php";
$sql = "SELECT * FROM user_data WHERE SudokuCount>0";

$array = [];

$result = $conn->query($sql);

while($row = $result->fetch_assoc()) {

  $object;


  $object['EmpCode'] = $row['EmpCode'];
  
  $object['Games'] = getGamesName($row['SelectedGame']);

  // $object["ScrabbleScore1"] = $row["CrosswordScore1"];
//   $object["ScrabbleTime1"] = $row["CrosswordTime1"];
//   $object["ScrabbleScore2"] = $row["CrosswordScore2"];
//   $object["ScrabbleTime2"] = $row["CrosswordTime2"];
//   $object["ScrabbleScore3"] = $row["CrosswordScore3"];
//   $object["ScrabbleTime3"] = $row["CrosswordTime3"];

  $object["SudokuScore1"] = $row["SudokuScore1"];
  $object["SudokuTime1"] = $row["SudokuTime1"];
  $object["SudokuScore2"] = $row["SudokuScore2"];
  $object["SudokuTime2"] = $row["SudokuTime2"];
  $object["SudokuScore3"] = $row["SudokuScore3"];
  $object["SudokuTime3"] = $row["SudokuTime3"];

  // $object["ChessScore1"] = $row["ChessScore1"];
//   $object["ChessTime1"] = $row["ChessTime1"];
//   $object["ChessScore2"] = $row["ChessScore2"];
//   $object["ChessTime2"] = $row["ChessTime2"];
//   $object["ChessScore3"] = $row["ChessScore3"];
//   $object["ChessTime3"] = $row["ChessTime3"];

  array_push($array,$object);

};

function my_sort($a,$b)
{
  if ($a==$b) return 0;

  return (strtotime($a['Time']) < strtotime($b['Time']))?-1:1;
}

function getScoreWithTime($s1,$t1,$s2,$t2,$s3,$t3)
{
	  $result = [];

    if($s1 == $s2 && $s1 == $s3)
    {
        if(strtotime($t1) < strtotime($t2) && strtotime($t1) < strtotime($t3))
              $result = [$s1,$t1];
        else if(strtotime($t2) < strtotime($t1) && strtotime($t2) < strtotime($t3))
              $result = [$s2,$t2];
        else
              $result = [$s3,$t3];            
    }else if($s1 == $s2)
    {
       $result =  (strtotime($t1) < strtotime($t2)) ? [$s1,$t1] : [$s2,$t2];
    }
    else if($s2 == $s3)
    {
       $result =  (strtotime($t2) < strtotime($t3)) ? [$s2,$t2] : [$s3,$t3];
    }   
    else if($s1 == $s3)
    {
       $result =  (strtotime($t1) < strtotime($t3)) ? [$s1,$t1] : [$s3,$t3];
    }   

    if((int)$s1 > (int)$s2 && (int)$s1 > (int)$s3)
          $result = [$s1,$t1];
    else if((int)$s2 > (int)$s1 && (int)$s2 > (int)$s3)
          $result = [$s2,$t2];
    else
          $result = [$s3,$t3];
          
   
    
    return $result;
}

function getGamesName($id)
{
   $result = "";

  switch((int)$id)
  {
    case 1:
       $result = "Scrabble";
       break;
       case 2:
        $result = "Sudoku";
        break;
        case 3:
          $result = "Chess";
		  break;
          case 4:
            $result = "Scrabble & Sudoku";
            break;
            case 5:
              $result = "Sudoku & Chess";
              break;
              case 6:
                $result = "Scrabble & Chess";
                break;
                case 7:
                  $result = "All";
                  break;
                  default:
                  $result = "";
                  break;
  }
  return $result;
}

//uasort($array,"my_sort");

$out = array_values($array);

echo json_encode($out);

$conn->close();

?>
