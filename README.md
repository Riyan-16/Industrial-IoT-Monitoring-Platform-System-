Industrial IoT Monitoring Platform
A browser-based educational project that demonstrates how Operating System concepts can be applied to an industrial monitoring environment. The application simulates industrial sensor readings, generates alerts for critical conditions, manages monitoring processes, and compares CPU scheduling algorithms.
Note: This is a simulation built with HTML, CSS, and JavaScript. It does not connect to physical industrial sensors or control real machinery.
Features
1. Live Sensor Monitoring
The dashboard simulates four industrial parameters:
Temperature (°C)
Pressure (bar)
Vibration (mm/s)
Machine Load (%)
Sensor readings are refreshed automatically every three seconds.
2. Threshold-Based Alerts
The application checks sensor readings against predefined thresholds and displays alerts when critical values are detected.
Parameter        Warning threshold   Critical threshold
Temperature             Above 80°C           Above 90°C Pressure               Above 7 bar          Above 8 bar Vibration             Above 6 mm/s         Above 8 mm/s Machine Load             Above 80%            Above 90%
3. Process Management
The project represents industrial monitoring activities as processes. Five predefined processes are used:
Process ID   Process name            Priority   Burst time   Arrival time
P1           Temperature Monitor            3            5              0 P2           Pressure Monitor               2            3              1 P3           Vibration Monitor              1            4              2 P4           Alert Processing               1            2              3 P5           Dashboard Update               4            6              4
4. CPU Scheduling Algorithms
Users can select and run four scheduling algorithms:
First Come First Serve (FCFS): Executes processes in arrival order.
Shortest Job First (SJF): Selects the available process with the shortest burst time.
Priority Scheduling: Selects the available process with the highest priority. A smaller priority number represents a higher priority.
Round Robin (RR): Allocates CPU time in fixed time slices. The configured time quantum is 2 time units.
5. Scheduling Performance Analysis
After scheduling, the application displays performance measures such as:
Average waiting time
Average turnaround time
Average response time
CPU utilization
A Gantt chart visualizes the process execution sequence.
6. Dashboard and System Information
The interface brings sensor readings, system statistics, process information, scheduling controls, results, and industrial alerts together in one dashboard.
Technologies Used
HTML --- page structure
CSS --- layout and styling
JavaScript --- sensor simulation, alert logic, process management, scheduling algorithms, and dashboard updates
No backend server, database, or external JavaScript framework is required for the current version.
Project Structure
Industrial-IoT-Monitoring-Platform/
│
├── index.html
├── style.css
├── script.js
└── README.md
Getting Started
Prerequisites
A modern web browser such as Google Chrome, Microsoft Edge, or Firefox.
No additional installation or package manager is required.
Run Locally
Download or clone this repository.
Open the project folder.
Open index.html in your web browser.
Alternatively, use the Live Server extension in Visual Studio Code:
Open the project folder in VS Code.
Install the Live Server extension if it is not already installed.
Right-click index.html.
Select Open with Live Server.
How to Use
Open the application in your browser.
View the four simulated sensor readings on the dashboard.
Wait for the readings to refresh and observe any generated alerts.
Use Generate Processes to display the predefined process list.
Select a CPU scheduling algorithm.
Click Run Scheduler to execute the scheduling simulation.
Review the Gantt chart and calculated performance metrics.
Use Clear Processes to reset the process and scheduling information.
Operating System Concepts Demonstrated
Process creation and process attributes
CPU scheduling and resource allocation
FCFS, SJF, Priority, and Round Robin scheduling
Waiting time, turnaround time, and response time
CPU utilization
Gantt chart-based scheduling visualization
Periodic task execution and event-based alert generation
Project Scope and Limitations
Sensor readings are randomly simulated; they are not collected from physical devices.
The scheduler demonstrates process execution in JavaScript; it does not change the actual operating system's CPU scheduler.
The application is intended for learning and demonstration, not for industrial safety decisions or real-time machine control.
The current version does not include persistent database storage or user authentication.
Future Enhancements
Possible extensions include:
Connecting real sensors through an ESP32 or Arduino.
Storing sensor history and alerts in a database.
Adding live charts for sensor readings.
Implementing additional scheduling algorithms.
Adding alert notifications and downloadable reports.
Introducing remote monitoring and predictive maintenance features.
Learning Outcomes
This project provides practical exposure to:
Applying Operating System concepts to an industrial monitoring scenario.
Implementing and comparing CPU scheduling algorithms.
Calculating scheduling performance metrics.
Building a dynamic dashboard using HTML, CSS, and JavaScript.
Simulating sensor data and generating threshold-based alerts.
Organizing a project into separate frontend files.
Contributors
Riyan Bindal
Shashwat Mishra
Aryan Asthana 
License
This project was created for educational and academic purposes. If you intend to publish or reuse it beyond that context, add a license that reflects the permissions you want to grant.
