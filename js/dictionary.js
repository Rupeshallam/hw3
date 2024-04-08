function searchWord() {
    var input = document.getElementById("searchInput").value.toLowerCase();
    var url = `https://api.urbandictionary.com/v0/define?term=${input}`;
    
    fetch(url)
        .then(function(response) {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(function(data) {
            displayMeanings(data.list);
        })
        .catch(function(error) {
            console.error('Error fetching meanings: ', error);
        });
}

function displayMeanings(definitions) {
    var meaningsContainer = document.getElementById("meanings");
    meaningsContainer.innerHTML = ""; // Clear previous results
    
    if (definitions && definitions.length > 0) {
        var ul = document.createElement("ul");
        definitions.forEach(function(entry) {
            var li = document.createElement("li");
            li.textContent = entry.definition;
            ul.appendChild(li);
        });
        meaningsContainer.appendChild(ul);
    } else {
        meaningsContainer.innerHTML = "<p>No meanings found.</p>";
    }
}
