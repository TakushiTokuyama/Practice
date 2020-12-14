import {salesMembers} from './salesMembers.js';
import {experts} from './salesMembers.js'; 

// 初期値
var label = '経験年数';
var data = [7,2,5,9,20];
var labels = ['soccer','swim','golf','baseball','ranning'];

// ButtonEvent
document.getElementById('change').addEventListener('click',function(){
    if(myChart.data.datasets[0].label === '訪問回数'){
    myChart.data.labels = ['soccer', 'swim', 'golf', 'baseball', 'ranning'];
    myChart.data.datasets[0].label = '経験年数';
    myChart.data.datasets[0].data = [7,2,5,9,20];
    }else{
    myChart.data.labels = ['osaka', 'tokyo', 'hokkaido', 'hukuoka', 'hiroshima'];
    myChart.data.datasets[0].label = '訪問回数';
    myChart.data.datasets[0].data = [4,2,3,1,7];
    }
    myChart.update();
});

// SelectEvent
document.getElementById('selected').addEventListener('click',function(){
    myChart.data.datasets[0].label = experts[selected.value];
    var filterExperts = expertFilter(experts[selected.value]);
    SetlabelsAndData(filterExperts);
    myChart.update();
});

// filterExpert
function expertFilter(exp){
    var result = [];
    switch(exp){
        case '金融':
         result = salesMembers.filter(function(salesMember){
                return salesMember.expertArea01 === exp || salesMember.expertArea02 === exp || salesMember.expertArea03 === exp;
            });
            return result;
            case '物流':
         result = salesMembers.filter(function(salesMember){
                return salesMember.expertArea01 === exp || salesMember.expertArea02 === exp || salesMember.expertArea03 === exp;
            });
            return result;
            case '通信':
         result = salesMembers.filter(function(salesMember){
                return salesMember.expertArea01 === exp || salesMember.expertArea02 === exp || salesMember.expertArea03 === exp;
            });
            return result;
            case '飲食':
         result = salesMembers.filter(function(salesMember){
                return salesMember.expertArea01 === exp || salesMember.expertArea02 === exp || salesMember.expertArea03 === exp;
            });
            return result;
            case '小売':
         result = salesMembers.filter(function(salesMember){
                return salesMember.expertArea01 === exp || salesMember.expertArea02 === exp || salesMember.expertArea03 === exp;
            });
            return result;
            default:
                break;
    }
}

// Changechart
function SetlabelsAndData(filterExperts){
    var salesHistorys = [];
    var names = []; 
    filterExperts.forEach(function(expert){
        salesHistorys.push(expert.salesHistory);
        names.push(expert.name);
    });
    myChart.data.datasets[0].data = salesHistorys;
    myChart.data.labels = names;
}

// chart.js
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
type: 'bar',
data: {
    labels: labels,
    datasets: [{
        label: label,
        data: data,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1
    },]
},
options: {
    scales: {
        yAxes: [{
            ticks: {
                max: 30,
                min: 0,
                stepSize: 5
            }
        }]
    }
}
});