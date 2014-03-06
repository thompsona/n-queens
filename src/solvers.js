/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({n: n});
  var odometer = [];
  for(var i = 0; i < n; i++) {
    odometer[i] = -1;
  }
  //start of recursion
  var testBoard = function() {
    var c = 0;
    var r = 0;

    //need a base case

    //look at odo, find first -1
    for(var i = 0; i < n; i++) {
      if(odometer[i] === -1) {
        //place a piece
        board.get(i)[odometer[i] + 1] = 1;
      }
      if(!board.hasAnyRooksConflicts()) {
        odometer[i] += 1;
      } else {
        board.get(i)[odometer[i] + 1] = 0;
      }
      if (odometer[i] === n - 1) {
        odometer[i] = -1;
        testBoard();
      }
    }

  };
  testBoard();

////create a counter for total # of solutions = 0
////create a board of size n using new Board
////create variable c = 0 for column, r = 0 for row
////create an odometer array (length = n) to store solutions in. ie. (for a board n = 4) [row[index],row[index],row[index],row[index],] 
//// - initialize the array from the previous step to all -1 values ie - [-1,-1,-1,-1] = no pieces on board
////start the build (start of recursive segment??)
////start at first row
////place a piece at first position of row = arr1[1]
////test if this is a valid placement
////if valid, update the index of the odometer with the position of the item
//// - else delete the piece, increment column count and go back to start of loop (to place a piece)
//   - if we are at the last position in the row, reset the odometer to -1 for the row and go to the previous row and increment by 1
//if we placed a valid piece, go to next row
//place a piece
//



  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
