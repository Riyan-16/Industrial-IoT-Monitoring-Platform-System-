/* =========================================================
   INDUSTRIAL IoT MONITORING PLATFORM
   OPERATING SYSTEMS PBL PROJECT
   ========================================================= */


/* =========================================================
   GLOBAL VARIABLES
   ========================================================= */

let processes = [];

let alerts = [];

let startTime = Date.now();

let criticalAlertCount = 0;


/* =========================================================
   SENSOR DATA
   ========================================================= */

function randomValue(min, max) {

    return Math.random() * (max - min) + min;

}


function updateSensors() {

    const temperature =
        randomValue(55, 105);

    const pressure =
        randomValue(3, 10);

    const vibration =
        randomValue(1, 12);

    const machineLoad =
        randomValue(35, 100);


    document.getElementById("temperature")
        .textContent = temperature.toFixed(1);


    document.getElementById("pressure")
        .textContent = pressure.toFixed(1);


    document.getElementById("vibration")
        .textContent = vibration.toFixed(1);


    document.getElementById("machineLoad")
        .textContent = machineLoad.toFixed(1);


    updateSensorStatus(
        temperature,
        pressure,
        vibration,
        machineLoad
    );


    generateSensorAlerts(
        temperature,
        pressure,
        vibration,
        machineLoad
    );

}


/* =========================================================
   SENSOR STATUS
   ========================================================= */

function updateSensorStatus(
    temperature,
    pressure,
    vibration,
    load
) {

    const tempStatus =
        document.getElementById("temperatureStatus");

    const pressureStatus =
        document.getElementById("pressureStatus");

    const vibrationStatus =
        document.getElementById("vibrationStatus");

    const loadStatus =
        document.getElementById("loadStatus");


    tempStatus.textContent =
        temperature > 90
        ? "CRITICAL"
        : temperature > 80
        ? "Warning"
        : "Normal";


    pressureStatus.textContent =
        pressure > 8
        ? "CRITICAL"
        : pressure > 7
        ? "Warning"
        : "Normal";


    vibrationStatus.textContent =
        vibration > 8
        ? "CRITICAL"
        : vibration > 6
        ? "Warning"
        : "Normal";


    loadStatus.textContent =
        load > 90
        ? "CRITICAL"
        : load > 80
        ? "Warning"
        : "Normal";

}


/* =========================================================
   ALERT GENERATION
   ========================================================= */

function generateSensorAlerts(
    temperature,
    pressure,
    vibration,
    load
) {

    const currentAlerts = [];


    if (temperature > 90) {

        currentAlerts.push({
            type: "Temperature",
            message:
            "High temperature detected.",
            priority: 1
        });

    }


    if (pressure > 8) {

        currentAlerts.push({
            type: "Pressure",
            message:
            "Abnormally high pressure detected.",
            priority: 1
        });

    }


    if (vibration > 8) {

        currentAlerts.push({
            type: "Vibration",
            message:
            "Excessive machine vibration detected.",
            priority: 1
        });

    }


    if (load > 90) {

        currentAlerts.push({
            type: "Machine Load",
            message:
            "Machine operating at critical load.",
            priority: 1
        });

    }


    if (currentAlerts.length > 0) {

        alerts = currentAlerts;

        criticalAlertCount +=
            currentAlerts.length;

        displayAlerts();

    }

}


/* =========================================================
   DISPLAY ALERTS
   ========================================================= */

function displayAlerts() {

    const container =
        document.getElementById(
            "alertContainer"
        );


    container.innerHTML = "";


    alerts.forEach(alert => {

        const div =
            document.createElement("div");


        div.className = "alert";


        div.innerHTML = `
            <strong>
                ${alert.type} ALERT
            </strong>

            <p>
                ${alert.message}
            </p>

            <small>
                Priority: HIGH
            </small>
        `;


        container.appendChild(div);

    });


    document.getElementById(
        "criticalAlerts"
    ).textContent =
        criticalAlertCount;

}


/* =========================================================
   PROCESS CREATION
   ========================================================= */

function generateProcesses() {

    processes = [

        {
            pid: "P1",
            name: "Temperature Monitor",
            priority: 3,
            burst: 5,
            arrival: 0,
            status: "READY"
        },

        {
            pid: "P2",
            name: "Pressure Monitor",
            priority: 2,
            burst: 3,
            arrival: 1,
            status: "READY"
        },

        {
            pid: "P3",
            name: "Vibration Monitor",
            priority: 1,
            burst: 4,
            arrival: 2,
            status: "READY"
        },

        {
            pid: "P4",
            name: "Alert Processing",
            priority: 1,
            burst: 2,
            arrival: 3,
            status: "READY"
        },

        {
            pid: "P5",
            name: "Dashboard Update",
            priority: 4,
            burst: 6,
            arrival: 4,
            status: "READY"
        }

    ];


    displayProcesses();

}


/* =========================================================
   DISPLAY PROCESSES
   ========================================================= */

function displayProcesses() {

    const table =
        document.getElementById(
            "processTable"
        );


    table.innerHTML = "";


    processes.forEach(process => {

        const row =
            document.createElement("tr");


        let statusClass =
            "status-ready";


        if (process.priority === 1) {

            statusClass =
                "status-critical";

        }


        row.innerHTML = `

            <td>${process.pid}</td>

            <td>${process.name}</td>

            <td>${process.priority}</td>

            <td>${process.burst}</td>

            <td>${process.arrival}</td>

            <td class="${statusClass}">
                ${process.status}
            </td>

        `;


        table.appendChild(row);

    });


    document.getElementById(
        "activeProcesses"
    ).textContent =
        processes.length;

}


/* =========================================================
   FCFS SCHEDULING
   ========================================================= */

function fcfs(processList) {

    let time = 0;

    const result = [];


    processList
        .sort((a, b) =>
            a.arrival - b.arrival
        )
        .forEach(process => {

            if (time < process.arrival) {

                time = process.arrival;

            }


            const start = time;

            const finish =
                time + process.burst;


            result.push({

                ...process,

                start: start,

                finish: finish,

                waiting:
                    start - process.arrival,

                turnaround:
                    finish - process.arrival,

                response:
                    start - process.arrival

            });


            time = finish;

        });


    return result;

}


/* =========================================================
   SJF SCHEDULING
   ========================================================= */

function sjf(processList) {

    let time = 0;

    let remaining =
        [...processList];

    const result = [];


    while (remaining.length > 0) {

        const available =
            remaining.filter(
                p => p.arrival <= time
            );


        if (available.length === 0) {

            time =
                Math.min(
                    ...remaining.map(
                        p => p.arrival
                    )
                );

            continue;

        }


        available.sort(
            (a, b) =>
                a.burst - b.burst
        );


        const process =
            available[0];


        const start = time;

        const finish =
            time + process.burst;


        result.push({

            ...process,

            start,

            finish,

            waiting:
                start - process.arrival,

            turnaround:
                finish - process.arrival,

            response:
                start - process.arrival

        });


        time = finish;


        remaining =
            remaining.filter(
                p => p.pid !== process.pid
            );

    }


    return result;

}


/* =========================================================
   PRIORITY SCHEDULING
   Lower number = Higher priority
   ========================================================= */

function priorityScheduling(processList) {

    let time = 0;

    let remaining =
        [...processList];

    const result = [];


    while (remaining.length > 0) {

        const available =
            remaining.filter(
                p => p.arrival <= time
            );


        if (available.length === 0) {

            time =
                Math.min(
                    ...remaining.map(
                        p => p.arrival
                    )
                );

            continue;

        }


        available.sort(
            (a, b) =>
                a.priority - b.priority
        );


        const process =
            available[0];


        const start = time;

        const finish =
            time + process.burst;


        result.push({

            ...process,

            start,

            finish,

            waiting:
                start - process.arrival,

            turnaround:
                finish - process.arrival,

            response:
                start - process.arrival

        });


        time = finish;


        remaining =
            remaining.filter(
                p => p.pid !== process.pid
            );

    }


    return result;

}


/* =========================================================
   ROUND ROBIN
   ========================================================= */

function roundRobin(
    processList,
    quantum
) {

    let time = 0;

    let queue = [];

    let remaining =
        processList.map(
            p => ({
                ...p,
                remaining: p.burst
            })
        );


    let result = [];

    let firstResponse = {};

    let completed = {};


    while (
        remaining.some(
            p => p.remaining > 0
        )
    ) {

        remaining.forEach(p => {

            if (
                p.remaining > 0 &&
                p.arrival <= time &&
                !queue.includes(p)
            ) {

                queue.push(p);

            }

        });


        if (queue.length === 0) {

            time++;

            continue;

        }


        const process =
            queue.shift();


        if (
            firstResponse[process.pid]
            === undefined
        ) {

            firstResponse[process.pid] =
                time - process.arrival;

        }


        const execution =
            Math.min(
                quantum,
                process.remaining
            );


        result.push({

            pid: process.pid,

            name: process.name,

            start: time,

            finish:
                time + execution

        });


        time += execution;

        process.remaining -= execution;


        remaining.forEach(p => {

            if (
                p.remaining > 0 &&
                p.arrival <= time &&
                !queue.includes(p) &&
                p !== process
            ) {

                queue.push(p);

            }

        });


        if (process.remaining > 0) {

            queue.push(process);

        }

        else {

            completed[process.pid] =
                time;

        }

    }


    /*
       Convert execution data into
       process performance data.
    */

    const finalResult =
        processList.map(process => {

            const finish =
                completed[process.pid];


            return {

                ...process,

                finish,

                turnaround:
                    finish - process.arrival,

                waiting:
                    finish -
                    process.arrival -
                    process.burst,

                response:
                    firstResponse[
                        process.pid
                    ]

            };

        });


    return {

        metrics: finalResult,

        timeline: result

    };

}


/* =========================================================
   RUN SCHEDULER
   ========================================================= */

function runScheduling() {

    if (processes.length === 0) {

        generateProcesses();

    }


    const algorithm =
        document.getElementById(
            "algorithm"
        ).value;


    let result;

    let timeline;


    if (algorithm === "FCFS") {

        result =
            fcfs(
                [...processes]
            );

        timeline =
            result.map(p => ({
                pid: p.pid,
                start: p.start,
                finish: p.finish
            }));

    }


    else if (algorithm === "SJF") {

        result =
            sjf(
                [...processes]
            );

        timeline =
            result.map(p => ({
                pid: p.pid,
                start: p.start,
                finish: p.finish
            }));

    }


    else if (algorithm === "PRIORITY") {

        result =
            priorityScheduling(
                [...processes]
            );

        timeline =
            result.map(p => ({
                pid: p.pid,
                start: p.start,
                finish: p.finish
            }));

    }


    else if (algorithm === "RR") {

        const quantum =
            Number(
                document.getElementById(
                    "quantum"
                ).value
            );


        const rr =
            roundRobin(
                [...processes],
                quantum
            );


        result =
            rr.metrics;

        timeline =
            rr.timeline;

    }


    calculateMetrics(result);

    displayGantt(timeline);

}


/* =========================================================
   CALCULATE PERFORMANCE METRICS
   ========================================================= */

function calculateMetrics(result) {

    const avgWaiting =
        result.reduce(
            (sum, p) =>
                sum + p.waiting,
            0
        ) / result.length;


    const avgTurnaround =
        result.reduce(
            (sum, p) =>
                sum + p.turnaround,
            0
        ) / result.length;


    const avgResponse =
        result.reduce(
            (sum, p) =>
                sum + p.response,
            0
        ) / result.length;


    document.getElementById(
        "avgWaiting"
    ).textContent =
        avgWaiting.toFixed(2);


    document.getElementById(
        "avgTurnaround"
    ).textContent =
        avgTurnaround.toFixed(2);


    document.getElementById(
        "avgResponse"
    ).textContent =
        avgResponse.toFixed(2);


    /*
       Simple CPU utilization calculation.
    */

    const totalBurst =
        result.reduce(
            (sum, p) =>
                sum + p.burst,
            0
        );


    const lastFinish =
        Math.max(
            ...result.map(
                p => p.finish
            )
        );


    const utilization =
        (
            totalBurst /
            lastFinish
        ) * 100;


    document.getElementById(
        "cpuUtilization"
    ).textContent =
        utilization.toFixed(1) + "%";

}


/* =========================================================
   GANTT CHART
   ========================================================= */

function displayGantt(timeline) {

    const container =
        document.getElementById(
            "ganttChart"
        );


    container.innerHTML = "";


    timeline.forEach(block => {

        const div =
            document.createElement(
                "div"
            );


        div.className =
            "gantt-block";


        div.innerHTML = `

            <strong>
                ${block.pid}
            </strong>

            <br>

            ${block.start} - ${block.finish}

        `;


        container.appendChild(div);

    });

}


/* =========================================================
   CLEAR PROCESSES
   ========================================================= */

function clearProcesses() {

    processes = [];

    document.getElementById(
        "processTable"
    ).innerHTML = "";


    document.getElementById(
        "ganttChart"
    ).innerHTML = `
        <p class="empty">
            Run the scheduler to generate
            the timeline.
        </p>
    `;


    document.getElementById(
        "activeProcesses"
    ).textContent = "0";


    document.getElementById(
        "avgWaiting"
    ).textContent = "0";


    document.getElementById(
        "avgTurnaround"
    ).textContent = "0";


    document.getElementById(
        "avgResponse"
    ).textContent = "0";

}


/* =========================================================
   SYSTEM UPTIME
   ========================================================= */

function updateUptime() {

    const seconds =
        Math.floor(
            (Date.now() - startTime)
            / 1000
        );


    document.getElementById(
        "uptime"
    ).textContent =
        seconds + " sec";

}


/* =========================================================
   INITIALIZATION
   ========================================================= */

generateProcesses();

updateSensors();


setInterval(
    updateSensors,
    3000
);


setInterval(
    updateUptime,
    1000
);
