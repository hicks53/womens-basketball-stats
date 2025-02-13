document.addEventListener("DOMContentLoaded", function() {
    fetch("https://raw.githubusercontent.com/hicks53/wehoop-wbb-data/main/play_by_play_2005.csv")
        .then(response => response.text())
        .then(data => {
            const rows = data.split("\n").slice(1); // Skip header row
            const tableBody = document.querySelector("#statsTable tbody");

            rows.forEach(row => {
                const columns = row.split(",");
                if (columns.length > 1) { // Ignore empty rows
                    const tr = document.createElement("tr");

                    // Extract and map the necessary columns (adjust based on your needs)
                    const id = columns[0];
                    const sequenceNumber = columns[1];
                    const type = columns[3];
                    const text = columns[4];
                    const awayScore = columns[6];
                    const homeScore = columns[7];
                    const period = columns[8];
                    const clock = columns[9];
                    const scoringPlay = columns[10];
                    const scoreValue = columns[11];
                    const gameDate = columns[48]; // Adjust this to correct column index if needed

                    // Create table cells for the extracted columns
                    const dataCells = [id, sequenceNumber, type, text, awayScore, homeScore, period, clock, scoringPlay, scoreValue, gameDate];
                    dataCells.forEach(cellData => {
                        const td = document.createElement("td");
                        td.textContent = cellData.trim();  // Trim to remove any extra spaces
                        tr.appendChild(td);
                    });

                    // Append the row to the table body
                    tableBody.appendChild(tr);
                }
            });
        })
        .catch(error => console.error("Error loading stats:", error));
});
