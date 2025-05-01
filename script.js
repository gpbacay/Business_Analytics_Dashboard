// Main JavaScript for the dashboard
document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.analytics-section');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all nav items and sections
            navItems.forEach(nav => nav.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked nav item
            this.classList.add('active');
            
            // Show corresponding section
            const targetId = this.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // Simulate data loading (in real app, this would fetch from CSV files)
    simulateDataLoading();
});

// Function to simulate data loading (in a real app, this would fetch actual data)
function simulateDataLoading() {
    // Show loading indicator
    const loading = document.getElementById('loading');
    
    // Set timeout to simulate loading time
    setTimeout(() => {
        // Update last updated timestamp
        const now = new Date();
        document.getElementById('last-updated').textContent = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
        
        // Load KPI data
        document.getElementById('total-sales').textContent = '$2,345,678,912';
        document.getElementById('avg-weekly-sales').textContent = '$20,465';
        document.getElementById('avg-temp').textContent = '61.5';
        
        // Load correlation table data
        loadCorrelationTable();
        
        // Load forecast table
        loadForecastTable();
        
        // Load recommendations
        loadRecommendations();
        
        // Create charts
        createCharts();
        
        // Hide loading indicator
        loading.style.display = 'none';
    }, 1500);
}

// Function to create all charts
function createCharts() {
    // Sales Over Time Chart
    createSalesTimeChart();
    
    // Store Performance Chart
    createStorePerformanceChart();
    
    // Holiday Impact Chart
    createHolidayImpactChart();
    
    // Sales vs Temperature Chart
    createSalesTempChart();
    
    // Sales vs Fuel Price Chart
    createSalesFuelChart();
    
    // Sales vs Unemployment Chart
    createSalesUnemploymentChart();
    
    // Markdown Impact Chart
    createMarkdownImpactChart();
    
    // Forecast Chart
    createForecastChart();
    
    // Forecast by Store Type Chart
    createForecastByStoreTypeChart();
    
    // Confidence Intervals Chart
    createConfidenceChart();
    
    // Inventory Strategy Chart
    createInventoryStrategyChart();
    
    // Staffing Recommendations Chart
    createStaffingRecsChart();
    
    // Impact Chart
    createImpactChart();
}

// Function to create Sales Time Chart
function createSalesTimeChart() {
    const ctx = document.getElementById('sales-time-chart').getContext('2d');
    
    // Sample data - in real app this would come from CSV
    const labels = ['Jan 2010', 'Feb 2010', 'Mar 2010', 'Apr 2010', 'May 2010', 'Jun 2010', 
                   'Jul 2010', 'Aug 2010', 'Sep 2010', 'Oct 2010', 'Nov 2010', 'Dec 2010',
                   'Jan 2011', 'Feb 2011', 'Mar 2011', 'Apr 2011', 'May 2011', 'Jun 2011',
                   'Jul 2011', 'Aug 2011', 'Sep 2011', 'Oct 2011', 'Nov 2011', 'Dec 2011',
                   'Jan 2012', 'Feb 2012', 'Mar 2012', 'Apr 2012', 'May 2012', 'Jun 2012'];
    
    const data = [
        19000, 18500, 20000, 21000, 20500, 19800, 
        19200, 20100, 21500, 22000, 25000, 28000,
        20000, 19500, 21000, 22000, 21500, 20800, 
        20200, 21100, 22500, 23000, 26000, 29000,
        21000, 20500, 22000, 23000, 22500, 21800
    ];
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Average Weekly Sales ($)',
                data: data,
                borderColor: '#4299e1',
                backgroundColor: 'rgba(66, 153, 225, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4,
                pointRadius: 3,
                pointHoverRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            },
            scales: {
                x: {
                    ticks: {
                        maxRotation: 45,
                        minRotation: 45
                    }
                },
                y: {
                    beginAtZero: false,
                    title: {
                        display: true,
                        text: 'Average Weekly Sales ($)'
                    }
                }
            }
        }
    });
}

// Function to create Store Performance Chart
function createStorePerformanceChart() {
    const ctx = document.getElementById('store-performance-chart').getContext('2d');
    
    // Sample data
    const labels = ['Store 20', 'Store 4', 'Store 14', 'Store 13', 'Store 2', 'Store 10', 'Store 35', 'Store 9', 'Store 17', 'Store 28'];
    const data = [41000, 38500, 36200, 35800, 34500, 32000, 31200, 30500, 29800, 29000];
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Average Weekly Sales ($)',
                data: data,
                backgroundColor: [
                    'rgba(66, 153, 225, 0.8)',
                    'rgba(72, 187, 120, 0.8)',
                    'rgba(237, 100, 166, 0.8)',
                    'rgba(246, 173, 85, 0.8)',
                    'rgba(159, 122, 234, 0.8)',
                    'rgba(237, 137, 54, 0.8)',
                    'rgba(72, 187, 120, 0.7)',
                    'rgba(66, 153, 225, 0.7)',
                    'rgba(237, 100, 166, 0.7)',
                    'rgba(246, 173, 85, 0.7)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Average Weekly Sales ($)'
                    }
                }
            }
        }
    });
}

// Function to create Holiday Impact Chart
function createHolidayImpactChart() {
    const ctx = document.getElementById('holiday-impact-chart').getContext('2d');
    
    // Sample data
    const labels = ['Super Bowl', 'Labor Day', 'Thanksgiving', 'Christmas', 'New Year', 'Regular Weeks'];
    const holidaySales = [26500, 24000, 32000, 35000, 27500, 20000];
    const regularSales = [20000, 20000, 20000, 20000, 20000, 20000];
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Holiday Week Sales',
                    data: holidaySales,
                    backgroundColor: 'rgba(66, 153, 225, 0.8)',
                    borderColor: 'rgba(66, 153, 225, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Average Regular Week Sales',
                    data: regularSales,
                    backgroundColor: 'rgba(160, 174, 192, 0.5)',
                    borderColor: 'rgba(160, 174, 192, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    title: {
                        display: true,
                        text: 'Average Weekly Sales ($)'
                    }
                }
            }
        }
    });
}

// Function to create Sales vs Temperature Chart
function createSalesTempChart() {
    const ctx = document.getElementById('sales-temp-chart').getContext('2d');
    
    // Generate sample scatter data
    const data = [];
    for (let i = 0; i < 50; i++) {
        const temp = 30 + Math.random() * 70; // Random temp between 30-100°F
        // Sales formula with some correlation to temp + noise
        const sales = 15000 + (temp - 65) * 100 + (Math.random() - 0.5) * 10000;
        data.push({x: temp, y: sales});
    }
    
    new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Sales vs Temperature',
                data: data,
                backgroundColor: 'rgba(66, 153, 225, 0.6)',
                borderColor: 'rgba(66, 153, 225, 1)',
                borderWidth: 1,
                pointRadius: 5,
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Temperature (°F)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Weekly Sales ($)'
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Temp: ${context.parsed.x.toFixed(1)}°F, Sales: $${context.parsed.y.toFixed(0)}`;
                        }
                    }
                }
            }
        }
    });
}

// Function to create Sales vs Fuel Price Chart
function createSalesFuelChart() {
    const ctx = document.getElementById('sales-fuel-chart').getContext('2d');
    
    // Generate sample scatter data
    const data = [];
    for (let i = 0; i < 50; i++) {
        const fuelPrice = 2.5 + Math.random() * 1.5; // Random fuel price $2.50-$4.00
        // Sales formula with slight negative correlation to fuel price + noise
        const sales = 25000 - (fuelPrice - 3) * 3000 + (Math.random() - 0.5) * 10000;
        data.push({x: fuelPrice, y: sales});
    }
    
    new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Sales vs Fuel Price',
                data: data,
                backgroundColor: 'rgba(72, 187, 120, 0.6)',
                borderColor: 'rgba(72, 187, 120, 1)',
                borderWidth: 1,
                pointRadius: 5,
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Fuel Price ($/gallon)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Weekly Sales ($)'
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Fuel: $${context.parsed.x.toFixed(2)}/gal, Sales: $${context.parsed.y.toFixed(0)}`;
                        }
                    }
                }
            }
        }
    });
}

// Function to create Sales vs Unemployment Chart
function createSalesUnemploymentChart() {
    const ctx = document.getElementById('sales-unemployment-chart').getContext('2d');
    
    // Generate sample scatter data
    const data = [];
    for (let i = 0; i < 50; i++) {
        const unemployment = 5 + Math.random() * 6; // Random unemployment 5-11%
        // Sales formula with moderate negative correlation to unemployment + noise
        const sales = 25000 - (unemployment - 7) * 1000 + (Math.random() - 0.5) * 8000;
        data.push({x: unemployment, y: sales});
    }
    
    new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Sales vs Unemployment',
                data: data,
                backgroundColor: 'rgba(237, 100, 166, 0.6)',
                borderColor: 'rgba(237, 100, 166, 1)',
                borderWidth: 1,
                pointRadius: 5,
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Unemployment Rate (%)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Weekly Sales ($)'
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Unemployment: ${context.parsed.x.toFixed(1)}%, Sales: $${context.parsed.y.toFixed(0)}`;
                        }
                    }
                }
            }
        }
    });
}

// Function to create Markdown Impact Chart
function createMarkdownImpactChart() {
    const ctx = document.getElementById('markdown-impact-chart').getContext('2d');
    
    // Sample data
    const labels = ['No Markdown', 'Markdown 1', 'Markdown 2', 'Markdown 3', 'Markdown 4', 'Markdown 5'];
    const salesData = [19500, 22000, 24500, 27000, 25500, 21000];
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Avg Weekly Sales with Markdown ($)',
                data: salesData,
                backgroundColor: [
                    'rgba(160, 174, 192, 0.7)',
                    'rgba(66, 153, 225, 0.7)',
                    'rgba(66, 153, 225, 0.8)',
                    'rgba(66, 153, 225, 0.9)',
                    'rgba(66, 153, 225, 0.8)',
                    'rgba(66, 153, 225, 0.7)'
                ],
                borderColor: [
                    'rgba(160, 174, 192, 1)',
                    'rgba(66, 153, 225, 1)',
                    'rgba(66, 153, 225, 1)',
                    'rgba(66, 153, 225, 1)',
                    'rgba(66, 153, 225, 1)',
                    'rgba(66, 153, 225, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    title: {
                        display: true,
                        text: 'Average Weekly Sales ($)'
                    }
                }
            }
        }
    });
}

// Function to create Forecast Chart
function createForecastChart() {
    const ctx = document.getElementById('forecast-chart').getContext('2d');
    
    // Sample data - historical and forecast
    const labels = [
        'Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 
        'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'
    ];
    
    const historicalData = [
        20500, 21000, 20800, 21200, 22000, 23500, 25000, 23000
    ];
    
    const forecastData = Array(8).fill(null).concat([
        22500, 23000, 24000, 26500, 28000, 26000, 24000, 23500
    ]);
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Historical Sales',
                    data: historicalData,
                    borderColor: 'rgba(66, 153, 225, 1)',
                    backgroundColor: 'rgba(66, 153, 225, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 3,
                    pointHoverRadius: 5
                },
                {
                    label: 'Forecasted Sales',
                    data: forecastData,
                    borderColor: 'rgba(72, 187, 120, 1)',
                    backgroundColor: 'rgba(72, 187, 120, 0.1)',
                    borderWidth: 2,
                    borderDash: [5, 5],
                    fill: true,
                    tension: 0.4,
                    pointRadius: 3,
                    pointHoverRadius: 5
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    title: {
                        display: true,
                        text: 'Weekly Sales ($)'
                    }
                }
            }
        }
    });
}

// Function to create Forecast by Store Type Chart
function createForecastByStoreTypeChart() {
    const ctx = document.getElementById('forecast-by-store-type-chart').getContext('2d');
    
    // Sample data
    const labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'];
    
    const typeA = [25000, 25500, 26000, 28500, 30000, 28000, 26000, 25500];
    const typeB = [20500, 21000, 22000, 24500, 26000, 24000, 22000, 21500];
    const typeC = [15500, 16000, 17000, 19500, 21000, 19000, 17000, 16500];
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Type A Stores',
                    data: typeA,
                    borderColor: 'rgba(66, 153, 225, 1)',
                    backgroundColor: 'rgba(66, 153, 225, 0.1)',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4
                },
                {
                    label: 'Type B Stores',
                    data: typeB,
                    borderColor: 'rgba(72, 187, 120, 1)',
                    backgroundColor: 'rgba(72, 187, 120, 0.1)',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4
                },
                {
                    label: 'Type C Stores',
                    data: typeC,
                    borderColor: 'rgba(237, 100, 166, 1)',
                    backgroundColor: 'rgba(237, 100, 166, 0.1)',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    title: {
                        display: true,
                        text: 'Forecasted Weekly Sales ($)'
                    }
                }
            }
        }
    });
}

// Function to create Confidence Intervals Chart
function createConfidenceChart() {
    const ctx = document.getElementById('confidence-chart').getContext('2d');
    
    // Sample data
    const labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'];
    
    const forecast = [22500, 23000, 24000, 26500, 28000, 26000, 24000, 23500];
    const upperBound = [24000, 24800, 26200, 29000, 30500, 28500, 26200, 25500];
    const lowerBound = [21000, 21200, 21800, 24000, 25500, 23500, 21800, 21500];
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Forecast',
                    data: forecast,
                    borderColor: 'rgba(66, 153, 225, 1)',
                    backgroundColor: 'rgba(66, 153, 225, 0.1)',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4
                },
                {
                    label: 'Upper Bound (95%)',
                    data: upperBound,
                    borderColor: 'rgba(237, 100, 166, 0.5)',
                    backgroundColor: 'transparent',
                    borderWidth: 1,
                    borderDash: [5, 5],
                    fill: false,
                    tension: 0.4
                },
                {
                    label: 'Lower Bound (95%)',
                    data: lowerBound,
                    borderColor: 'rgba(237, 100, 166, 0.5)',
                    backgroundColor: 'transparent',
                    borderWidth: 1,
                    borderDash: [5, 5],
                    fill: '-1',
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                },
                filler: {
                    propagate: false
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    title: {
                        display: true,
                        text: 'Forecasted Weekly Sales ($)'
                    }
                }
            }
        }
    });
}

// Function to create Inventory Strategy Chart
function createInventoryStrategyChart() {
    const ctx = document.getElementById('inventory-strategy-chart').getContext('2d');
    
    // Sample data
    const labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'];
    
    const forecast = [22500, 23000, 24000, 26500, 28000, 26000, 24000, 23500];
    const inventory = [23500, 24000, 25500, 28000, 29500, 27500, 25000, 24500];
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Forecasted Sales',
                    type: 'line',
                    data: forecast,
                    borderColor: 'rgba(66, 153, 225, 1)',
                    backgroundColor: 'transparent',
                    borderWidth: 2,
                    tension: 0.4,
                    yAxisID: 'y'
                },
                {
                    label: 'Recommended Inventory Level',
                    data: inventory,
                    backgroundColor: 'rgba(72, 187, 120, 0.6)',
                    borderColor: 'rgba(72, 187, 120, 1)',
                    borderWidth: 1,
                    yAxisID: 'y'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    title: {
                        display: true,
                        text: 'Sales & Inventory Value ($)'
                    },
                    position: 'left'
                }
            }
        }
    });
}

// Function to create Staffing Recommendations Chart
function createStaffingRecsChart() {
    const ctx = document.getElementById('staffing-recs-chart').getContext('2d');
    
    // Sample data
    const labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'];
    
    const normalStaff = [95, 95, 95, 95, 95, 95, 95, 95];
    const recommendedStaff = [95, 97, 100, 110, 115, 108, 100, 97];
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Normal Staffing Level (%)',
                    data: normalStaff,
                    borderColor: 'rgba(160, 174, 192, 1)',
                    backgroundColor: 'rgba(160, 174, 192, 0.1)',
                    borderWidth: 2,
                    borderDash: [5, 5],
                    fill: false,
                    tension: 0.4
                },
                {
                    label: 'Recommended Staffing Level (%)',
                    data: recommendedStaff,
                    borderColor: 'rgba(237, 100, 166, 1)',
                    backgroundColor: 'rgba(237, 100, 166, 0.1)',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    title: {
                        display: true,
                        text: 'Staffing Level (% of base)'
                    }
                }
            }
        }
    });
}

// Function to create Impact Chart
function createImpactChart() {
    const ctx = document.getElementById('impact-chart').getContext('2d');
    
    // Sample data
    const labels = ['Stockout Reduction', 'Markdown Efficiency', 'Staff Utilization', 'Inventory Turnover', 'Customer Satisfaction'];
    
    const beforeData = [65, 70, 75, 68, 72];
    const afterData = [85, 88, 90, 82, 87];
    
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Current Performance',
                    data: beforeData,
                    backgroundColor: 'rgba(160, 174, 192, 0.2)',
                    borderColor: 'rgba(160, 174, 192, 1)',
                    pointBackgroundColor: 'rgba(160, 174, 192, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(160, 174, 192, 1)'
                },
                {
                    label: 'Projected After Implementation',
                    data: afterData,
                    backgroundColor: 'rgba(66, 153, 225, 0.2)',
                    borderColor: 'rgba(66, 153, 225, 1)',
                    pointBackgroundColor: 'rgba(66, 153, 225, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(66, 153, 225, 1)'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: {
                        display: true
                    },
                    suggestedMin: 50,
                    suggestedMax: 100
                }
            }
        }
    });
}

// Load correlation table data
function loadCorrelationTable() {
    const tableBody = document.getElementById('correlation-table');
    
    const correlationData = [
        { factor: 'Temperature', correlation: 0.42, significance: 'High', impact: 'Medium' },
        { factor: 'Fuel Price', correlation: -0.31, significance: 'Medium', impact: 'Medium' },
        { factor: 'CPI', correlation: 0.18, significance: 'Low', impact: 'Low' },
        { factor: 'Unemployment', correlation: -0.38, significance: 'Medium', impact: 'Medium' },
        { factor: 'Markdown 1', correlation: 0.27, significance: 'Medium', impact: 'Medium' },
        { factor: 'Markdown 5', correlation: 0.23, significance: 'Low', impact: 'Low' }
    ];
    
    let html = '';
    correlationData.forEach(item => {
        const correlationClass = item.correlation > 0 ? 'text-green-600' : 'text-red-600';
        
        html += `
        <tr>
            <td>${item.factor}</td>
            <td class="${correlationClass} font-semibold">${item.correlation.toFixed(2)}</td>
            <td>${item.significance}</td>
            <td>${item.impact}</td>
        </tr>
        `;
    });
    
    tableBody.innerHTML = html;
}

// Load forecast table data
function loadForecastTable() {
    const tableBody = document.getElementById('forecast-table');
    
    const forecastData = [
        { week: 'Week 1', forecast: 22500, lower: 21000, upper: 24000, change: '+2.3%' },
        { week: 'Week 2', forecast: 23000, lower: 21200, upper: 24800, change: '+2.2%' },
        { week: 'Week 3', forecast: 24000, lower: 21800, upper: 26200, change: '+4.3%' },
        { week: 'Week 4', forecast: 26500, lower: 24000, upper: 29000, change: '+10.4%' },
        { week: 'Week 5', forecast: 28000, lower: 25500, upper: 30500, change: '+5.7%' },
        { week: 'Week 6', forecast: 26000, lower: 23500, upper: 28500, change: '-7.1%' },
        { week: 'Week 7', forecast: 24000, lower: 21800, upper: 26200, change: '-7.7%' },
        { week: 'Week 8', forecast: 23500, lower: 21500, upper: 25500, change: '-2.1%' }
    ];
    
    let html = '';
    forecastData.forEach(item => {
        const changeClass = item.change.startsWith('+') ? 'text-green-600' : 'text-red-600';
        
        html += `
        <tr>
            <td>${item.week}</td>
            <td>$${item.forecast.toLocaleString()}</td>
            <td>$${item.lower.toLocaleString()}</td>
            <td>$${item.upper.toLocaleString()}</td>
            <td class="${changeClass} font-semibold">${item.change}</td>
        </tr>
        `;
    });
    
    tableBody.innerHTML = html;
}

// Load recommendations
function loadRecommendations() {
    const recommendationsList = document.getElementById('recommendations-list');
    
    const recommendations = [
        "Increase inventory levels by 10-15% in weeks 4-5 to prepare for forecasted sales peak",
        "Implement markdown strategy in weeks 6-8 to manage inventory levels as sales decline",
        "Adjust staffing levels to align with forecasted demand peaks and valleys",
        "Focus promotional efforts on high-performing stores during peak forecast periods",
        "Monitor temperature trends closely, as they show strong correlation with sales performance",
        "Optimize inventory allocation between store types based on their specific forecast patterns"
    ];
    
    let html = '';
    recommendations.forEach(recommendation => {
        html += `
        <li class="flex items-start mb-3">
            <div class="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></div>
            <span>${recommendation}</span>
        </li>
        `;
    });
    
    recommendationsList.innerHTML = html;
}