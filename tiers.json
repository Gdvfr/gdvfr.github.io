fetch('tiers.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("tier-container");

    data.players.forEach(player => {
      const div = document.createElement("div");
      div.className = "tier-card";

      // Safely handle headings like "ht1" -> <h1>, "ht2" -> <h2>
      const headingLevel = player.tier?.toLowerCase().startsWith("ht")
        ? player.tier.toLowerCase().replace("ht", "")
        : "3"; // default to h3

      const nameHeading = `<h${headingLevel}>${player.name}</h${headingLevel}>`;

      div.innerHTML = `
        <img src="${player.icon}" alt="${player.name}">
        ${nameHeading}
        <small>${player.reason}</small>
      `;

      container.appendChild(div);
    });
  });
