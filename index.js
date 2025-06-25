let data = {}
const p = document.getElementById('display-grade');


  Papa.parse("./DSCI-grades-S24.csv", {
// Papa.parse("test.csv", {
    download: true,
    encoding: "utf-8",
    complete: function(results) {
        let header = results.data.slice(0, 1)[0];
        let res = results.data.slice(1);

        grades = res.map(item => {
            let grade = {};
            for (i = 0; i < header.length; i++) {
                grade[header[i]] = item[i];
            }
            return grade;
        })

        for (const grade of grades) {
            data[grade[`Key`]]= grade;
        }
	}
})

function display() {
    const id = document.getElementById('sid-mid').value;
    if (id=="") return;
    // p.innerText = JSON.stringify(data[id]);
    const display = `
    SID:${data[id].學號}
    GroupID:${data[id].Group}
    
    Homework Sets (30%)
    H1 (10%): ${data[id].HW1}
    H2 (10%): ${data[id].HW2}
    H3 (10%): ${data[id].HW3}

    Project (65%)
    Proposal    (20%): ${data[id].Proposal}
    Final Demo  (20%): ${data[id].Final}
    Final Report(25%): ${data[id].Report}

    Attendance (including taking surveys)(5%)
    Attend: ${data[id].Attend}
    
    Semester Grade (Mark): ${data[id].SEM}
    `;
    p.innerText = display;
}
