document.addEventListener("DOMContentLoaded", function() {
    // URL of the CSV file on the GitHub repo
    fetch("https://raw.githubusercontent.com/hicks53/wehoop-wbb-data/main/play_by_play_2005.csv")
        .then(response => response.text())
        .then(data => {
            const rows = data.split("\n").slice(1); // Skip header row
            const tableBody = document.querySelector("#statsTable tbody");

            rows.forEach(row => {
                const columns = row.split(",");
                if (columns.length > 1) { // Ignore empty rows
                    const tr = document.createElement("tr");
                    columns.forEach(col => {
                        const td = document.createElement("td");
                        td.textContent = col;
                        tr.appendChild(td);
                    });
                    tableBody.appendChild(tr);
                }
            });
        })
        .catch(error => console.error("Error loading stats:", error));
});
