function addPlayer() {
  const position = document.getElementById("playerPosition").value;
  const name = document.getElementById("playerName").value;
  const number = document.getElementById("playerNumber").value;

  const confirmation = confirm(`Escalar ${name} como ${position}?`);

  if (confirmation) {
    const teamList = document.getElementById("teamList");
    const playerItem = document.createElement("li");
    playerItem.id = `player-${number}`;
    playerItem.innerText = `${position}: ${name} (${number})`;
    teamList.appendChild(playerItem);

    document.getElementById("playerPosition").value = "";
    document.getElementById("playerName").value = "";
    document.getElementById("playerNumber").value = "";
  }
}

function removePlayer() {
  const number = document.getElementById("numberToRemove").value;
  const playerToRemove = document.getElementById(`player-${number}`);

  const confirmation = confirm(
    `Remover o jogador ${playerToRemove.innerText}?`
  );

  if (confirmation) {
    // document.getElementById('teamList').removeChild(playerToRemove);
    playerToRemove.remove();
    document.getElementById("numberToRemove").value = "";
  }
}
