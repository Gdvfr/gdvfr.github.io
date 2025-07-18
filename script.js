fetch('tiers.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("tier-container");
    data.players.forEach(player => {
      const div = document.createElement("div");
      div.className = "tier-card";

      // Default heading tag if no valid tier provided
      let headingTag = "h3";

      // Check if tier is in the format 'ht1', 'ht2', etc.
      if (typeof player.tier === "string" && player.tier.toLowerCase().startsWith("ht")) {
        const level = player.tier.toLowerCase().substring(2);
        // Only allow heading levels 1 to 6
        if (["1", "2", "3", "4", "5", "6"].includes(level)) {
          headingTag = "h" + level;
        }
      }

      div.innerHTML = `
        <img src="${player.icon}" alt="${player.name}">
        <${headingTag}>${player.name}</${headingTag}>
        <p>Tier: ${player.tier}</p>
        <small>${player.reason}</small>
      `;

      container.appendChild(div);
    });
  });
