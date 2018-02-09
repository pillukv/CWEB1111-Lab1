//Creating an array for each team and sorting each player object into the correct array
var teamLebronArray = [];
var teamStephenArray = [];
for (i = 0; i < data.length; i++) {
    if (data[i].captain == 'lebron') {
        teamLebronArray.push(data[i]);
    } else {
        teamStephenArray.push(data[i]);
    }
}

//Function for determining the Points Per Game and True Shooting Percentage of each player in an array
function scoringScatterPoints(playerArray) {
    scoringArray = [];
    scoringObject = {};
    for (i = 0; i < playerArray.length; i++) {
        scoringObject.x = playerArray[i].true_shooting_rate;
        scoringObject.y = playerArray[i].points_per_game;
        scoringArray.push(scoringObject);
        scoringObject = {};
    }
    return scoringArray;
}

//Function for calculating the average values of the advanced statistics of an array of players
function advancedStatisticsAverage(playerArray) {
    totalWS = 0;
    totalBPM = 0;
    totalVORP = 0;
    for (i = 0; i < playerArray.length; i++) {
        totalWS += playerArray[i].WS;
        totalBPM += playerArray[i].BPM;
        totalVORP += playerArray[i].VORP;
    }
    averageWS = (totalWS/playerArray.length).toFixed(2);
    averageBPM = (totalBPM/playerArray.length).toFixed(2);
    averageVORP = (totalVORP/playerArray.length).toFixed(2);
    averageValuesArray = [averageWS, averageBPM, averageVORP];
    return averageValuesArray;
}


const CHART1 = document.getElementById("chart1");
let scoringScatterChart = new Chart(CHART1, {
    type: 'scatter',
    data: {
        datasets: [
            {
                label: 'Team LeBron',
                backgroundColor: 'rgba(128,0,0,.7)',
                borderColor: 'rgba(128,0,0,1)',
                pointBackgroundColor: 'rgba(128,0,0,.7)',
                pointBorderColor: 'rgba(128,0,0,1)',
                borderWidth: 3,
                data: scoringScatterPoints(teamLebronArray)
            },
            {
                label: 'Team Stephen',
                backgroundColor: 'rgba(36,62,144,.7)',
                borderColor: 'rgba(36,62,144,1)',
                pointBackgroundColor: 'rgba(36,62,144,.7)',
                pointBorderColor: 'rgba(36,62,144,1)',
                borderWidth: 3,
                data: scoringScatterPoints(teamStephenArray)
            }
        ]
    },    
});

Chart.defaults.scale.ticks.beginAtZero = true;

const CHART2 = document.getElementById("chart2");
let advancedStatisticsChart = new Chart(CHART2, {
    type: 'bar',
    data: {
        labels: ['WS', 'BPM', 'VORP'],
        datasets: [
            {
                label: 'Team LeBron',
                backgroundColor: 'rgba(128,0,0,.7)',
                borderColor: 'rgba(128,0,0,1)',
                borderWidth: 3,
                hoverBackgroundColor: 'rgba(128,0,0,1)',
                data: advancedStatisticsAverage(teamLebronArray)
            },
            {
                label: 'Team Stephen',
                backgroundColor: 'rgba(36,62,144,.7)',
                borderColor: 'rgba(36,62,144,1)',
                borderWidth: 3,
                hoverBackgroundColor: 'rgba(36,62,144,1)',
                data: advancedStatisticsAverage(teamStephenArray)
            }
        ]
    },
});


