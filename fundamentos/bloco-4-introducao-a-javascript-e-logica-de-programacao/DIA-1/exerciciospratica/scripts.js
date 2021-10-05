//     //pratica 1

//     let a = 10
//     let b = 15

//     console.log(a + b);
//     console.log(a - b);
//     console.log(a * b);
//     console.log(a / b);
//     console.log(a % b);

//     pratica 2

//     let n1 = 5;
//     let n2 = 10;

//     if (n1 > n2){
//         console.log(n1)
//     } else {
//         console.log(n2)
//     }

//     pratica 3

//     let n1 = 10;
//     let n2 = 15;
//     let n3 = 20;

//     if (n1 > n2 && n1 > n3){
//      console.log(n1);
//     } else if(n2 > n3){
//      console.log(n2);
//     } else {
//      console.log(n3);
//     }

//     pratica 4

//     let np = 30;

//     if (np > 0){
//         console.log("Positivo");
//     } else if (np < 0){
//         console.log("Negative");
//     }else {
//         console.log("Zero");
//     }



//     Pratica 5

//     let a1 = 50;
//     let a2 = 60;
//     let a3 = 70;

// 	let angulo = a1 + a2 + a3;

// 	if (a1 < 0 || a2 < 0 || a3 < 0){
//         console.log("error");
//     } else if (angulo === 180){
// 		console.log(true)
// 	}else {
//         console.log(false);
//     }
	
	
//     pratica 6

//     let nomeDePeca = "BISHOP";

//     switch (nomeDePeca.toLowerCase()){
// 		case "king":
// 		console.log("one square in any direction");
// 		break;
		
// 		case "queen":
// 		console.log("diagonally, horizontally, or vertically any number of squares");
// 		break;
		
// 		case "rook":
// 		console.log("horizontally or vertically any number of squares");
// 		break;
		
// 		case "bishop":
// 		console.log("diagonally any number of squares");
// 		break;
		
// 		case "knight":
// 		console.log("in an ‘L’ shape’");
// 		break;
		
// 		case "pawn":
// 		console.log("vertically forward one square, with the option to move two squares if they have not yet moved");
// 		break;
		
// 		default:
// 			console.log("Error")
// 		break;
// 		} 

//    pratica 7
 	 
//    let porcentagem = 75;

//    if(porcentagem < 0 || porcentagem > 100){ 
// 	 console.log("error")
// 	 } else if (porcentagem >= 90){
// 		 console.log("A")
// 	 }else if (porcentagem >= 80){
// 		 console.log("B")
// 	 }else if (porcentagem >= 70){
// 		 console.log("C")
// 	 }else if (porcentagem >= 60){
// 		 console.log("D")
// 	 }else if (porcentagem >= 50){
// 		 console.log("E")
// 	 }else {
//     console.log("F")
// 	 }

// 	Pratica 8

// 	let v1 = 3;
// 	let v2 = 6;
// 	let v3 = 7;
// 	let impar = false;

// 	if(v1 % 2 == 0 || v2 % 2 == 0 || v3 % 2 == 0){
// 	impar = true;
// 	}
// 	console.log(impar);

// 	Pratica 9

// 	let i1 = 5;
// 	let i2 = 4;
// 	let i3 = 7;
// 	let par = false;

// 	if(i1 % 2 == 1 || i2 % 2 == 1 || i3 % 2 == 1){
// 		par = true;
// 	}
// 	console.log(par)

// 	Pratica 10
  
// 	let valorCusto = 25;
// 	let valorVenda = 50;
// 	let imposto = 20 / 100;
	
// 	let valorCustoTotal = valorCusto + (valorCusto * imposto) ;
// 	let lucro = valorVenda - valorCustoTotal;

// 	if(valorCusto < 0 || valorVenda < 0){
// 		console.log("Error")
// 	}else {
// 		console.log(lucro)
// 	}
	
// 	Pratica 11

// let bruto = 9000;
// let inss;
// let ir;

// if (bruto <= 1556.94) {
// inss = bruto * 0.08;
// } else if (bruto <= 2594.92) {
// inss = bruto * 0.09;
// } else if (bruto <= 5189.82) {
// inss = bruto * 0.11;
// } else {
// inss = 570.88;
// }

// let semiliquido = bruto - inss

// if (semiliquido <= 1903.38) {
// ir = 0;
// } else if (semiliquido <= 2826.66) {
// ir = (semiliquido * 0.075) - 142.8;
// } else if (semiliquido <= 3751.06) {
// ir = (semiliquido * 0.15) - 354.80;
// } else if (semiliquido <= 4664.68) {
// ir = (semiliquido * 0.225) - 636.13;
// } else {
// ir = (semiliquido * 0.275) - 869.36;
// }
// console.log((semiliquido - ir).toFixed(2)); 