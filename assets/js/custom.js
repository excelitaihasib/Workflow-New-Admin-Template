
    function doughnutTask() {
        const data = {
            labels: [
                'In Progress',
                'Complete',
                'Upcoming'
            ],
            datasets: [{
                data: [50, 30, 20],
                backgroundColor: [
                    '#FE8F1C',
                    '#099F0B',
                    '#49C9E2'
                ],
                hoverOffset: 4,
                borderWidth: [0, 0, 0, 0]
            }]
        };
    
        // ------------------- Chart Options ------------------
        const chartOptions = {
            plugins: {
                responsive: true,
                legend: {
                    labels: {
                        font: {
                            size: 16
                        },
                        boxWidth: 48,
                        padding: 20
                    },
                    display: true,
                    position: "right",
                    align: "center"
    
                }
            }
        }
    
        // ------------------- Chart Config ------------------
        const config = {
            type: 'doughnut',
            data: data,
            options: chartOptions
        };
    
        // ------------------- Initialize Chart ------------------
        const myChart = new Chart(
            document.getElementById('doughnut-chart-Task'),
            config
        );
    }
    
    function doughnutTicketStatus() {
        const data = {
            labels: [
                'In Progress',
                'Complete',
                'Upcoming',
                'Declined',
            ],
            datasets: [{
                data: [40, 30, 25,05],
                backgroundColor: [
                    '#FE8F1C',
                    '#099F0B',
                    '#49C9E2',
                    '#FE4A1C'
                ],
                hoverOffset: 4,
                borderWidth: [0, 0, 0, 0]
            }]
        };
    
        // ------------------- Chart Options ------------------
        const chartOptions = {
            plugins: {
                responsive: true,
                legend: {
                    labels: {
                        font: {
                            size: 16
                        },
                        boxWidth: 48,
                        padding: 20
                    },
                    display: true,
                    position: "right",
                    align: "center"
    
                }
            }
        }
    
        // ------------------- Chart Config ------------------
        const config = {
            type: 'doughnut',
            data: data,
            options: chartOptions
        };
    
        // ------------------- Initialize Chart ------------------
        const myChart = new Chart(
            document.getElementById('doughnut-ticket'),
            config
        );
    }
    function doughnutIncomeVsExpense() {
        const data = {
            labels: [
                'Income',
                'Expenses'

            ],
            datasets: [{
                data: [30,70],
                backgroundColor: [
                    '#B0DDF9',
                    '#7b2182'

                ],
                hoverOffset: 4,
                borderWidth: [0, 0, 0, 0]
            }]
        };
    
        // ------------------- Chart Options ------------------
        const chartOptions = {
            plugins: {
                responsive: true,
                legend: {
                    labels: {
                        font: {
                            size: 16
                        },
                        boxWidth: 48,
                        padding: 20
                    },
                    display: true,
                    position: "right",
                    align: "center"
    
                }
            }
        }
    
        // ------------------- Chart Config ------------------
        const config = {
            type: 'doughnut',
            data: data,
            options: chartOptions
        };
    
        // ------------------- Initialize Chart ------------------
        const myChart = new Chart(
            document.getElementById('doughnut-InVSEx'),
            config
        );
    }
    
    function pieChartStatus() {
        const data = {
            labels: [
                'In Progress',
                'Complete',
                'Upcoming'
            ],        
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: [
                    '#FE8F1C',
                    '#099F0B',
                    '#49C9E2'
                ],
                hoverOffset: 4,
                borderWidth: [0, 0, 0, 0]
            }]
        };
    
        // ------------------- Chart Options ------------------
        const chartOptions = {
            plugins: {
                responsive: true,
                legend: {
                    labels: {
                        font: {
                            size: 16
                        },
                        boxWidth: 48,
                        padding: 20
                    },
                    display: true,
                    position: "right",
                    align: "center"
    
                }
            }
        }
    
        // ------------------- Chart Config ------------------
        const config = {
            type: 'pie',
            data: data,
            options: chartOptions
        };
    
        // ------------------- Initialize Chart ------------------
        const myChart = new Chart(
            document.getElementById('pie-chart'),
            config
        );
    }
