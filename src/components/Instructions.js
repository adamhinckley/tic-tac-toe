  import React, { useState } from 'react';

const Instructions = () => {
    const [instructionsVisible,updateInstructionsVisible] = useState(false);
    const showAdvanced = false;
    return (
      <div style={{marginTop: "50px"}}>      
      <button onClick={() => {updateInstructionsVisible(!instructionsVisible)}}>{ instructionsVisible ? "Hide Instructions" : "Show Instructions"}</button>
      {instructionsVisible && !showAdvanced &&
        (
          <div>
            <h4>Implement Tic Tac Toe</h4>
            <h5>Tic Tac Toe Rules</h5>
            <ul>
              <li>The game is played on a grid that's 3 squares by 3 squares.</li>
              <li>Player 1 isX, Player 2 is "O".</li>
              <li>The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.</li>
              <li>When all 9 squares are full without a winner, the game ends in a draw.</li>
            </ul>
            <h4>Requirements</h4>
            <ul>
              <li>Render a Tic Tac Toe Board (3x3)</li>
              <li>Display the current player (player 1 or player 2) if a game is in progress</li>
              <li>Allow the game to be restarted.</li>
              <li>The current player can select any open square on the board</li>
              <li>When a player selects a square it should mark that space with an X or 0 depending on the player, and the square should not be able to be selected again</li> 
              <li>The game should check if a player has won after each move</li>    
              <li>When a winner is determined or there are no remaining spaces, it should end the game and display the winner (player 1 or player 2)</li>                
              <li>If all spaces have been chosen and there is no winner, it should end the game and display that the game ended in a draw</li>
            </ul>
            <div >
              <img src="https://i.ibb.co/19LmGvf/tictactoe.gif" width="100%" alt=""/>
            </div>
          </div>
        )
      }
      { instructionsVisible && showAdvanced && (
        <div>
          <p>Great. Now lets add some history</p>
          <ul>
            <li>Keep track of every move</li>
            <li>Display a list of each move</li>
            <li>Clicking each move should reset the board to the state of that move</li>
          </ul>
          <img src="https://i.ibb.co/pbLmfvH/Clean-Shot-2021-07-12-at-09-27-36.gif" alt=""/>
        </div>
      )}
    </div>
  );
};

export default Instructions;