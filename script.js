document.addEventListener("DOMContentLoaded", function() {
    // URL of the CSV file on the GitHub repo
    fetch("https://raw.githubusercontent.com/hicks53/wehoop-wbb-data/main/play_by_play_2005.csv")
        .then(response => response.text())
        .then(data => {
            console.log("CSV Data Loaded: ", data); // Log the raw CSV data for debugging

            const rows = data.split("\n").slice(1); // Skip header row
            const tableBody = document.querySelector("#statsTable tbody");

            if (rows.length === 0) {
                console.error("No data available in the CSV file.");
                return;
            }

            rows.forEach(row => {
                const columns = row.split(",");
                if (columns.length > 1) { // Ignore empty rows
                    const tr = document.createElement("tr");

                    // Log the columns to make sure they're correctly split
                    console.log("Row Data: ", columns);

                    // Create table cells for each column
                    columns.forEach(col => {
                        const td = document.createElement("td");
                        td.textContent = col.trim();  // Trim to remove extra spaces
                        tr.appendChild(td);
                    });

                    // Append the row to the table body
                    tableBody.appendChild(tr);
                }
            });
        })
        .catch(error => console.error("Error loading stats:", error));
});
