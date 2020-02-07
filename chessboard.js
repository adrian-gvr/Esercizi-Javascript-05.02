/**
* Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
* At each position of the grid there is either a space or a "#" character. 
* The characters should form a chessboard.
*/
let x =" ";
for (colonna=1; colonna<9; colonna++)
{
  for (riga=1; riga<9; riga++)
  {
    if(colonna%2===0)
    {
      if(riga%2===0)
        x=x+" ";
      else
        x=x+"#";
    }
    else
    {
      if(riga %2===0)
        x=x+"#";
      else
        x=x+" ";
    }
  }
  console.log(x);
  x=" ";
}
