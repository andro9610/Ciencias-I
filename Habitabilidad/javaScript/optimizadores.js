matriz[][];
for(var i = 0; i < 5; i++){
	for(var j = 0; j < 4; j++){
		matriz[i][j] = new Habitacion();
	}
}

toleracia = Math.random() * 10 + 1 * (2 / Math.random() * 5 + 1);

tolerabilidad = (incidencia * Math.random() * 10 + 1)/toleranciaTotal;

dispersionEdificio = tolerabilidad * (1/Math.pow(2, n));

//n -> es lo alejado del piso, es decir si escogemos el piso 2, entonces en el propio piso es uno, el piso 1 es uno
// el piso 3 es uno, el piso 4 es dos y así

if(tolerabilidad - matriz[x][y].toleracia > 3){
	inhabitabilidad += 1;
}

if(inhabitabilidad > 5){
	console.log("El edificio no es habitable")
}

function juegoVida(){
    var stateOfGame = {
        playing: false,
        cellsAlive: {
            previous: [],
            actual: []
        }
    };
    var sizeOfCell = 5;
    var btnRandom = document.querySelector('#random');
    var btnPlay = document.querySelector('#start');
    var btnStop = document.querySelector('#stop');
    var btnClear = document.querySelector('#clear');
    var myCanvas = document.querySelector('#mycanvas');
    var canvasContext = myCanvas.getContext('2d');
    myCanvas.style.backgroundColor = '#000';
    canvasContext.fillStyle = '#fff';
    myCanvas.addEventListener('click', function(e) {
        if (stateOfGame.playing) {
            return;
        }
        var pos = getPos(e, this);
        if (!!getStateOfCell(pos)) {
            clearCell(pos);
        } else {
            drawCell(pos);
        }
    });
    btnRandom.addEventListener('click', function(e) {
        var sizeOfCanvas = getSizeOfCanvas();
        if (stateOfGame.playing) {
            return;
        }
        var cellsToCreate = Math.floor((Math.random() * sizeOfCanvas.w) + 1) + 1;
        var dynamicCell = {x: 0, y:0};
        var randomBase = {
            x: Math.ceil(sizeOfCanvas.w / sizeOfCell),
            y: Math.ceil(sizeOfCanvas.h / sizeOfCell)
        };
        while (cellsToCreate--) {
            dynamicCell.x = Math.floor(Math.random() * randomBase.x) * sizeOfCell;
            dynamicCell.y = Math.floor(Math.random() * randomBase.y) * sizeOfCell;
            drawCell(dynamicCell);
        }
    });
    btnPlay.addEventListener('click', function(e) {
        if (stateOfGame.playing) {
            return;
        }
        stateOfGame.process = setTimeout(function run() {
            play();
            if (stateOfGame.cellsAlive.previous.length < 1) {
                stateOfGame.playing = false;
                return;
            }
            stateOfGame.playing = true;
            stateOfGame.process = setTimeout(run, 50);
        }, 50);
    });
    btnStop.addEventListener('click', function(e) {
        if (stateOfGame.playing) {
            clearTimeout(stateOfGame.process);
            stateOfGame.playing = false;
        }
    });
    btnClear.addEventListener('click', function(e) {
        var sizeOfCanvas = getSizeOfCanvas();
        if (stateOfGame.playing) {
            return;
        }
        canvasContext.clearRect(0, 0, sizeOfCanvas.w, sizeOfCanvas.h);
        stateOfGame.cellsAlive.previous = [];
        stateOfGame.cellsAlive.actual = [];
    });
    function play() {
        stateOfGame.cellsAlive.previous = stateOfGame.cellsAlive.actual.slice();
        var i, posCellToCheck, s;
        var cellsToCheck = stateOfGame.cellsAlive.previous.slice();
        for (i = 0, s = stateOfGame.cellsAlive.previous.length; i < s; i++) {
            cellsToCheck = cellsToCheck.concat(
                getCoordsNeighbors(
                    strToPos(stateOfGame.cellsAlive.previous[i])
                ).filter(function(v) {
                    return cellsToCheck.indexOf(v) < 0;
                })
            );
        }
        for (i = 0, s = cellsToCheck.length; i < s; i++) {
            posCellToCheck = strToPos(cellsToCheck[i]);
            var newStateOfCell = determinateStateOfCell(posCellToCheck);
            if (typeof newStateOfCell === 'undefined') {
                continue;
            }
            if (newStateOfCell > 0) {
                drawCell(posCellToCheck);
            } else {
                clearCell(posCellToCheck);
            }
        }
    }
    function getPos(e, elem) {
        var pos = elem.getBoundingClientRect();
        return {
            x: Math.floor((e.clientX - pos.left) / sizeOfCell) * sizeOfCell,
            y: Math.floor((e.clientY - pos.top) / sizeOfCell) * sizeOfCell
        };
    }
    function drawCell(pos) {
        var strPos = posToStr(pos);
        canvasContext.fillRect(pos.x, pos.y, sizeOfCell, sizeOfCell);
        if (stateOfGame.cellsAlive.actual.indexOf(strPos) < 0) {
            stateOfGame.cellsAlive.actual.push(strPos);
        }
    }
    function clearCell(pos) {
        canvasContext.clearRect(pos.x, pos.y, sizeOfCell, sizeOfCell);
        stateOfGame.cellsAlive.actual.splice(
            stateOfGame.cellsAlive.actual.indexOf(posToStr(pos)),
            1
        );
    }
    function determinateStateOfCell(pos) {
        var neighborsAlive = getNeighborsAlive(
            getCoordsNeighbors(pos)
        );
        var stateOfCell = getPrevStateOfCell(pos);
        if (stateOfCell > 0) {
            if (neighborsAlive < 2 || neighborsAlive > 3) {
                return 0;
            }
        }
        if (stateOfCell === 0) {
            if (neighborsAlive === 3) {
                return 1;
            }
        }
    }
    function getStateOfCell(pos) {
        if (stateOfGame.cellsAlive.actual.indexOf(posToStr(pos)) > -1) {
            return 1;
        }
        return 0;
    }
    function getPrevStateOfCell(pos, str) {
        if (str === true) {
            if (stateOfGame.cellsAlive.previous.indexOf(pos) > -1) {
                return 1;
            }
            return 0;
        }
        if (stateOfGame.cellsAlive.previous.indexOf(posToStr(pos)) > -1) {
            return 1;
        }
        return 0;
    }
    function getCoordsNeighbors(pos) {
        var sizeOfCanvas = getSizeOfCanvas();
        var getPosNeighbor = function(x, y, neighbor) {
            return ((neighbor[0] * sizeOfCell) + x) + ',' + ((neighbor[1] * sizeOfCell) + y);
        };
        var neighbors =[
            [-1, -1],
            [0, -1],
            [1, -1],
            [-1, 0],
            [1, 0],
            [-1, 1],
            [0, 1],
            [1, 1]
        ];
        var i = neighbors.length;
        while (i--) {
            neighbors[i] = getPosNeighbor(pos.x, pos.y, neighbors[i]);
        }
        return neighbors;
    }
    function getNeighborsAlive(coords) {
        return coords.filter(function(v) {
            return getPrevStateOfCell(v, true) > 0;
        }).length;
    }
    function getSizeOfCanvas() {
        return {
            w: myCanvas.width,
            h: myCanvas.height
        };
    }
    function posToStr(pos) {
        return pos.x + ',' + pos.y;
    }
    function strToPos(pos) {
        var arrPos = pos.split(',');
        return {
            x: parseInt(arrPos[0]),
            y: parseInt(arrPos[1])
        };
    }
}();

function Backtrack(){
    var solucionActual=[], resultadoActual=0;
    var solucionMejor=[], resultadoMejor=0;
    var OP = { SUM:0, RES:1, MUL:2, DIV:3 };
    function calcula(op1,op2,operador) {
        switch(operador) {
            case OP.SUM:
                return op1+op2;
            case OP.RES:
                return Math.abs(op1-op2);
            case OP.MUL:
                if (op1==1 || op2==1) {
                    return 0;
                } else {
                    return op1*op2;
                }
            default:
                var aux=0;
                if (op2>op1) {
                    aux=op1;
                    op1=op2;
                    op2=aux;
                }
                if (op2>1 && op1%op2==0) {
                    return op1/op2;
                } else {
                    return 0;
                }
        }
    }

    function backtracking(valores) {
        var nlengh=valores.length;
        if (nlengh==1) {
            return;
        }
        for (var i=0;i<nlengh-1;i++) {
            for (var j=i+1; j<nlengh; j++) {
                var op1=valores[i], op2 =valores[j];
                valores.splice(j,1);
                valores.splice(i,1);
                var res = calcula(op1,op2,op);
                    if (res>0) {
                        solucionActual.push({op1:op1, op2:op2, op: op, res: res});
                        if (Math.abs(obtener-resultadoMejor)>Math.abs(obtener-res) || resultadoMejor==res && solucionMejor.length>solucionActual.length) {
                            solucionMejor=solucionActual.slice(0);
                            resultadoMejor=res;
                        }
                        valores.push(res);
                        backtracking(valores);
                        valores.pop();
     
                        solucionActual.pop();
                    }
            }
            valores.splice(i,0,op1);
            valores.splice(j,0,op2);
        }
    }

    function imprimirResultado() {
        var cadena="";
        var n=solucionMejor.length;
        for (var i=0;i<n;i++) {
            switch(solucionMejor[i].op) {
                case OP.SUM:
                    cadena+=solucionMejor[i].op1+" + "+solucionMejor[i].op2;
                    break;
                case OP.RES:
                    if (solucionMejor[i].op1>=solucionMejor[i].op2) {
                        cadena+=solucionMejor[i].op1+" - "+solucionMejor[i].op2;
                    } else {
                        cadena+=solucionMejor[i].op2+" - "+solucionMejor[i].op1;
                    }
                    break;
                case OP.MUL:
                    cadena+=solucionMejor[i].op1+" x "+solucionMejor[i].op2;
                    break;
                default:
                    if (solucionMejor[i].op1>=solucionMejor[i].op2) {
                        cadena+=solucionMejor[i].op1+" / "+solucionMejor[i].op2;
                    } else {
                        cadena+=solucionMejor[i].op2+" / "+solucionMejor[i].op1;
                    }
                    break;
            }
            cadena+=" = "+solucionMejor[i].res+"\n";
        }
        return cadena;
    }

    function reset(){
        solucionActual=[];
        resultadoActual=0;
        solucionMejor=[];
        resultadoMejor=0;
    }
}