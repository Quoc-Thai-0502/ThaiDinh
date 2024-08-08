document.addEventListener('DOMContentLoaded', function() {
    

    var ctxProgramming = document.getElementById('programmingChart').getContext('2d');
    var programmingChart = new Chart(ctxProgramming, {
        type: 'bar',
        data: {
            labels: ['JavaScript', 'Python', 'SQL/NoSQL', 'HTML/CSS', 'Java', 'C++'],
            datasets: [{
                label: 'Proficiency level (%)',
                data: [90, 85, 80, 88, 75, 70],
                backgroundColor: [
                    'rgba(52, 152, 219, 0.8)',
                    'rgba(231, 76, 60, 0.8)',
                    'rgba(46, 204, 113, 0.8)',
                    'rgba(241, 196, 15, 0.8)',
                    'rgba(52, 73, 94, 0.8)',
                    'rgba(155, 89, 182, 0.8)'
                ],
                borderColor: [
                    'rgba(52, 152, 219, 1)',
                    'rgba(231, 76, 60, 1)',
                    'rgba(46, 204, 113, 1)',
                    'rgba(241, 196, 15, 1)',
                    'rgba(52, 73, 94, 1)',
                    'rgba(155, 89, 182, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Proficiency in programming skills',
                    font: {
                        size: 18
                    }
                }
            }
        }
    });

    // Biểu đồ kỹ năng mềm
    var ctxSoftSkills = document.getElementById('softSkillsChart').getContext('2d');
    var softSkillsChart = new Chart(ctxSoftSkills, {
        type: 'radar',
        data: {
            labels: ['Working group', 'Communicate', 'Time management', 'Problem solving', 'Creative'],
            datasets: [{
                label: 'Proficiency (%)',
                data: [95, 90, 85, 88, 92],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255, 99, 132, 1)'
            }]
        },
        options: {
            responsive: true,
            scales: {
                r: {
                    angleLines: {
                        display: false
                    },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Level of soft skill proficiency',
                    font: {
                        size: 18
                    }
                }
            }
        }
    });
});



