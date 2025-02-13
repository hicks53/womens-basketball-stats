document.addEventListener("DOMContentLoaded", function() {
    fetch("https://raw.githubusercontent.com/sportsdataverse/wehoop-wbb-data/main/your_data_file.csv")
        .then(response => response.text())
        .then(data => {
            const rows = data.split("\n").slice(1); // Skip header
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
