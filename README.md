
# 🏭 Industrial IoT Monitoring Platform

<p align="center">
  <b>A Smart Industrial Monitoring Simulation Using Operating System Concepts</b>
  <br>
  Monitor • Manage • Schedule • Analyse
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-Frontend-orange?logo=html5" />
  <img src="https://img.shields.io/badge/CSS3-Styling-blue?logo=css3" />
  <img src="https://img.shields.io/badge/JavaScript-Logic-yellow?logo=javascript" />
  <img src="https://img.shields.io/badge/Project-Academic-success" />
</p>

---

## 📌 About the Project

The **Industrial IoT Monitoring Platform** is a browser-based project developed to demonstrate the practical application of Operating System concepts in an industrial monitoring environment.

The platform simulates different industrial parameters, including temperature, pressure, vibration, and machine load. It continuously updates sensor readings, identifies abnormal conditions, and generates alerts whenever predefined safety thresholds are crossed.

Along with sensor monitoring, the project implements different CPU scheduling algorithms to demonstrate how industrial monitoring activities can be managed as individual processes.

The main objective is to connect theoretical Operating System concepts with a practical and interactive industrial monitoring simulation.

> ⚠️ **Note:** This project uses simulated sensor readings and is intended for educational purposes. It does not connect to physical industrial sensors or control real machinery.

---

## ✨ Key Features

### 🌡️ 1. Live Sensor Monitoring
The platform simulates four important industrial parameters:

- Temperature (°C)
- Pressure (bar)
- Vibration (mm/s)
- Machine Load (%)

Sensor readings are automatically refreshed every **3 seconds**.

### 🚨 2. Industrial Alert System

The application checks sensor readings against predefined thresholds and generates alerts when critical conditions are detected.

| Parameter | Warning Threshold | Critical Threshold |
|:---|:---:|:---:|
| Temperature | Above 80°C | Above 90°C |
| Pressure | Above 7 bar | Above 8 bar |
| Vibration | Above 6 mm/s | Above 8 mm/s |
| Machine Load | Above 80% | Above 90% |

### ⚙️ 3. Process Management

The project represents industrial monitoring activities as individual processes.

Five predefined processes are included:

| PID | Process Name | Priority | Burst Time | Arrival Time |
|:---:|:---|:---:|:---:|:---:|
| P1 | Temperature Monitor | 3 | 5 | 0 |
| P2 | Pressure Monitor | 2 | 3 | 1 |
| P3 | Vibration Monitor | 1 | 4 | 2 |
| P4 | Alert Processing | 1 | 2 | 3 |
| P5 | Dashboard Update | 4 | 6 | 4 |

### 🖥️ 4. CPU Scheduling Algorithms

The platform implements four major CPU scheduling algorithms:

| Algorithm | Description |
|:---|:---|
| **FCFS** | Executes processes in their order of arrival. |
| **SJF** | Selects the available process with the shortest burst time. |
| **Priority Scheduling** | Executes the available process with the highest priority. |
| **Round Robin** | Allocates CPU time to processes using a fixed time quantum. |

**Round Robin Time Quantum:** 2 time units.

*Note: In Priority Scheduling, a smaller priority number represents a higher priority.*

### 📊 5. Scheduling Performance Analysis

The application calculates and displays important CPU scheduling metrics:

- Average Waiting Time
- Average Turnaround Time
- Average Response Time
- CPU Utilization

A **Gantt Chart** is also generated to visualize the process execution sequence.

### 📈 6. Interactive Dashboard

The dashboard brings together:

- Live sensor readings
- Industrial alerts
- System statistics
- Process management
- CPU scheduling controls
- Scheduling performance results
- Gantt chart visualization

---

## 🛠️ Technologies Used

| Technology | Purpose |
|:---|:---|
| HTML5 | Structure of the web application |
| CSS3 | Styling and dashboard layout |
| JavaScript | Application logic and functionality |

The project uses vanilla HTML, CSS, and JavaScript without requiring any external frontend framework.

---

## 📂 Project Structure

```text
Industrial-IoT-Monitoring-Platform/
│
├── index.html       # Main application structure
├── style.css        # Styling and dashboard design
├── script.js        # Application logic and algorithms
│
└── README.md        # Project documentation
```

---

## 🚀 Getting Started

Follow these simple steps to run the project locally.

### Prerequisites

- A modern web browser (Google Chrome, Firefox, or Microsoft Edge).
- Visual Studio Code (optional).

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/your-username/your-repository-name.git
```

**2. Navigate to the project directory**

```bash
cd Industrial-IoT-Monitoring-Platform
```

**3. Run the application**

Open the `index.html` file in your preferred web browser.

Alternatively, use the **Live Server** extension in Visual Studio Code.

---

## 🎮 How to Use

1. Open the application in your browser.
2. Observe the four simulated sensor readings on the dashboard.
3. Wait for automatic sensor updates and observe the generated alerts.
4. Click **Generate Processes** to display the predefined processes.
5. Select your preferred CPU scheduling algorithm.
6. Click **Run Scheduler** to execute the scheduling simulation.
7. Analyse the Gantt chart and calculated performance metrics.
8. Click **Clear Processes** to reset the process and scheduling information.

---

## 📚 Operating System Concepts Demonstrated

This project demonstrates several important Operating System concepts:

- Process Creation and Management
- CPU Scheduling
- First Come First Serve (FCFS)
- Shortest Job First (SJF)
- Priority Scheduling
- Round Robin Scheduling
- Waiting Time and Turnaround Time
- Response Time and CPU Utilization
- Gantt Chart-Based Process Visualization
- Periodic Task Execution
- Event-Based Alert Generation

---

## 🎯 Project Objectives

- To demonstrate the practical application of Operating System concepts.
- To understand process management in an industrial monitoring scenario.
- To implement and compare different CPU scheduling algorithms.
- To analyse scheduling performance using standard metrics.
- To simulate industrial sensor monitoring and threshold-based alerts.
- To develop an interactive dashboard using web technologies.

---

## 🔮 Future Enhancements

The project can be extended with several additional features:

- 🔌 Integration with real sensors using ESP32 or Arduino.
- 📉 Live graphical representation of sensor readings.
- 🗄️ Database integration for storing historical data.
- 🧠 Machine learning-based predictive maintenance.
- 🔔 Advanced alert notifications and sound warnings.
- 🌐 Remote industrial monitoring.
- 📄 Exporting sensor and scheduling reports in PDF or CSV format.
- ⚙️ Implementation of additional CPU scheduling algorithms.

---

## 🎓 Learning Outcomes

Through this project, we gained practical experience in:

- Understanding and implementing CPU scheduling algorithms.
- Managing processes using different scheduling policies.
- Calculating and comparing scheduling performance metrics.
- Developing dynamic web applications using HTML, CSS, and JavaScript.
- Simulating sensor readings and generating automated alerts.
- Integrating multiple modules into a single application.
- Applying theoretical Operating System concepts to a practical scenario.

---

## 👥 Project Contributors

| S. No. | Name |
|:---:|:---|
| 1 | Riyan Bindal |
| 2 | Shashwat Mishra |
| 3 | Aryan Asthana |

---

## 📖 References

- Abraham Silberschatz, Peter B. Galvin and Greg Gagne — *Operating System Concepts*.
- William Stallings — *Operating Systems: Internals and Design Principles*.
- [MDN Web Docs](https://developer.mozilla.org/)
- [GeeksforGeeks – Operating Systems](https://www.geeksforgeeks.org/operating-systems/)
- [W3Schools – JavaScript](https://www.w3schools.com/js/)

---

<p align="center">
  <b>🚀 Industrial IoT Monitoring Platform</b>
  <br>
  <i>Bridging Operating System Concepts with Industrial Monitoring</i>
  <br><br>
  Made with ❤️ by Team 61
</p>
