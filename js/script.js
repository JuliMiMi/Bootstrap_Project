/**
 * Created by Julia on 30.08.2016.
 */
var data = [
    ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
    ['w', 'c', 'c', 'c', 'c', 'c', 'c', 'w', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'w'],
    ['w', 'c', 'c', 'c', 'c', 'c', 'c', 'w', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'w'],
    ['w', 'c', 'c', 'c', 'c', 'c', 'c', 'w', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'w'],
    ['w', 'c', 'c', 'c', 'c', 'c', 'c', 'w', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'w'],
    ['w', 'c', 'c', 'c', 'c', 'c', 'c', 'w', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'w'],
    ['w', 'c', 'c', 'c', 'c', 'c', 'c', 'w', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'w'],
    ['w', 'c', 'c', 'c', 'c', 'c', 'c', 'w', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'w'],
    ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
    ['w', 'c', 'c', 'c', 'c', 'c', 'c', 'w', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'w'],
    ['w', 'c', 'c', 'c', 'c', 'c', 'c', 'w', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'w'],
    ['w', 'c', 'c', 'c', 'c', 'c', 'c', 'w', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'w'],
    ['w', 'c', 'c', 'c', 'c', 'c', 'c', 'w', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'w'],
    ['w', 'c', 'c', 'c', 'c', 'c', 'c', 'w', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'w'],
    ['w', 'c', 'c', 'c', 'c', 'c', 'c', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
    ['w', 'c', 'c', 'c', 'c', 'c', 'c', 'w', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'w'],
    ['w', 'c', 'c', 'c', 'c', 'c', 'c', 'w', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'w'],
    ['w', 'c', 'c', 'c', 'c', 'c', 'c', 'w', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'w'],
    ['w', 'c', 'c', 'c', 'c', 'c', 'c', 'w', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'w'],
    ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w']
];

var create = function (containerConfig) {
    var container = document.createElement('div');

    container.className = 'container';
    for (var i = 0; i < containerConfig.length; i++) {
        var rowConfig = containerConfig[i];
        var row = createRow(rowConfig);
        container.appendChild(row);
    }

    document.body.appendChild(container);

    //var modCell = document.querySelectorAll('div');
    //modCell.addEventListener('click', function () {
    //    modCell.className = 'wall';
    //    console.log("Кнопка нажата");
    //});

};

var createRow = function (rowConfig) {
    var row = document.createElement('div');
    row.className = 'row';
    for (var i = 0; i < rowConfig.length; i++) {
        var cellConfig = rowConfig[i];
        var cell = createCell(cellConfig);
        row.appendChild(cell);
    }
    return row;
};

var createCell = function (cellConfig) {
    var cell = document.createElement('div');

    if (cellConfig === 'w') {
        cell.className = 'wall';
    }

    if (cellConfig === 'c') {
        cell.className = 'cell';
    }
    return cell;


};


create(data);





