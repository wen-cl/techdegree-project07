let trafficChartCanvas = document.getElementById("traffic-chart-canvas");
let dailyTrafficChartCanvas = document.getElementById('daily-traffic-chart');
let mobileUserCanvas = document.getElementById('mobile-users-chart');

const trafficData = {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31',],
    datasets: [{
        label: 'traffic',
        data: [ 750, 900, 1780, 2000, 1740, 1900, 1200, 1800, 2350, 2000, 2350],
        backgroundColor: [
            'rgba(116, 119, 191, 0.2)',
        ],
        borderColor: [
            'rgba(116, 119, 191, 1)',
        ],
        borderWidth: 1,

    }]
};

const trafficOptions = {
    layout: {
      padding: 10
    },
    pointStyle: 'circle',
    scales: {
        xAxes: [{
            gridLines: {
                offsetGridLines: true
            },
        }],
        yAxes: [{
            gridLines: {
                offsetGridLines: true
            },
                ticks: {
                beginAtZero: false
                }
        }]
    },
    legend : {
        display: true
    },
    maintainAspectRatio: false
};

const dailyTrafficData = {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [{
        data: [75, 125, 175, 150, 190, 220, 188],
        backgroundColor:'rgba(116, 119, 191, .8)',
        borderColor:'rgba(116, 119, 191, 1)',
        borderWidth: 2,
        barPercentage: .5
    }]
};

const dailyTrafficOptions = {
    layout: {
        padding: 100
    } ,
    scales: {
        xAxes: [{
        gridLines: {
            offsetGridLines: true
        }
    }],
        yAxes: [{
            gridLines: {
                offsetGridLines: true
            },
            ticks: {
                beginAtZero: true

            }
        }]
    },
    legend : {
        display: false
    },
    maintainAspectRatio: false
};

const mobileUserChartData = {
    labels: ['Phones', 'Tablets', 'Desktops'],
    datasets: [{
        data: [188,75, 275],
        backgroundColor:[
            'rgba(102, 153, 153, 1)',
            'rgba(0, 204, 102, .8)',
            'rgba(111, 119, 191, .8)'
            ],
        borderColor:'rgba(116, 119, 191, 1)',
        borderWidth: 0,
        hoverBackgroundColor: 'rgba(0, 85, 128, 1)'
    }]
};

const mobileUserChartOptions = {
    legend: {
        position:'right',
        labels: {
        boxWidth: 20,
        fontStyle: 'bold'
        }
    },
    layout: {
    padding: 100
    },
    cutoutPercentage: 60,
    maintainAspectRatio: false
};

const trafficChart = new Chart(trafficChartCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});

const dailyTrafficChart = new Chart(dailyTrafficChartCanvas, {
    type: 'bar',
    data: dailyTrafficData,
    options: dailyTrafficOptions
});

const mobileUserChart = new Chart(mobileUserCanvas, {
    type: 'doughnut',
    data: mobileUserChartData,
    options: mobileUserChartOptions
});

$(document).ready(()=>{
    $('.message-succeed').hide();
});

$(".alert-message").on("click", () => {
    $(".alert").hide();
    $(".notification-dot").hide();
});


$("#message-form").submit((event)=>{
    event.preventDefault();
    const user = $("#search-user").val();
    const message = $("#message-for-user").val();

    if (user === 'search for user' || user === ''){
        alert("Enter a valid user in MyApp");
    } 
    else if (message === 'Message for user' || message === '')
    {
        alert("Enter your message to the user");
    }
    else
    {
        $(".message-succeed").show();
    }

});

$(".message-close-fa").on("click", () => {
    $(".message-succeed").hide();
});