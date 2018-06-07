var obtener=952;
var numeros=[25, 50, 75, 100, 3, 6];
 
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

