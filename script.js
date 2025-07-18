fetch('tiers.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("tier-container");
    data.players.forEach(player => {
      const div = document.createElement("div");
      div.className = "tier-card";
      div.innerHTML = `
        <img src="${player.icon}" alt="${player.name}">
        <h2>${player.name}</h2>
        <p>Tier: ${player.tier}</p>
        <small>${player.reason}</small>
      `;
      container.appendChild(div);
    });
  });
