async function fetchResources() {
  const category = document.getElementById("category").value;
  const age = document.getElementById("age").value;
  const sex = document.getElementById("sex").value;
  const pregnant = document.getElementById("pregnant").value;
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "<p>Loading...</p>";

  const topicIdMap = {
    stress: "30560",
    depression: "30604",
    anxiety: "34692",
    wellness: "30567"
  };

  const topicId = topicIdMap[category];
  if (!topicId) {
    resultsDiv.innerHTML = `<p>Invalid category selected.</p>`;
    return;
  }

  // Use public proxy for bypassing CORS (safe for dev use)
  const proxy = "https://corsproxy.io/?";

  const topicUrl = `${proxy}https://odphp.health.gov/myhealthfinder/api/v4/topicsearch.json?TopicId=${topicId}`;
  const healthfinderUrl = `${proxy}https://odphp.health.gov/myhealthfinder/api/v4/myhealthfinder.json?${new URLSearchParams({
    age,
    sex,
    pregnant
  }).toString()}`;

  try {
    const [topicResponse, healthfinderResponse] = await Promise.all([
      fetch(topicUrl),
      fetch(healthfinderUrl)
    ]);

    if (!topicResponse.ok || !healthfinderResponse.ok) {
      throw new Error("One of the API responses failed.");
    }

    const [topicData, healthfinderData] = await Promise.all([
      topicResponse.json(),
      healthfinderResponse.json()
    ]);

    const topicResourcesRaw = topicData?.Result?.Resources?.Resource;
    const healthfinderResourcesRaw = healthfinderData?.Result?.Resources?.All?.Resource;

    const topicResources = Array.isArray(topicResourcesRaw)
      ? topicResourcesRaw
      : topicResourcesRaw
      ? [topicResourcesRaw]
      : [];

    const healthfinderResources = Array.isArray(healthfinderResourcesRaw)
      ? healthfinderResourcesRaw
      : healthfinderResourcesRaw
      ? [healthfinderResourcesRaw]
      : [];

    const allResources = [...topicResources, ...healthfinderResources];
    const uniqueResources = Array.from(
      new Map(allResources.map(resource => [resource.Title, resource])).values()
    );

    if (uniqueResources.length === 0) {
      resultsDiv.innerHTML = `<p>No resources found for your criteria.</p>`;
      return;
    }

    resultsDiv.innerHTML = "";
    uniqueResources.forEach(resource => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${resource.Title}</h3>
        <p>${resource.Categories || resource.MyHFCategory || 'No description available.'}</p>
        ${
          resource.AccessibleVersion
            ? `<p><a href="${resource.AccessibleVersion}" target="_blank">Read More</a></p>`
            : resource.URL
            ? `<p><a href="${resource.URL}" target="_blank">Read More</a></p>`
            : ""
        }
        ${
          resource.ImageUrl
            ? `<img src="${resource.ImageUrl}" alt="${resource.ImageAlt || ''}" style="max-width: 100%;">`
            : ""
        }
      `;
      resultsDiv.appendChild(card);
    });

  } catch (error) {
    resultsDiv.innerHTML = `<p style="color: red;">Error fetching data. Please try again later.</p>`;
    console.error("Error:", error);
  }
}

