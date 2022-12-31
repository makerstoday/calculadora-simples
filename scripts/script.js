function calcular(n1, n2){
    n1 = parseFloat(document.getElementById("n1").value)
    n2 = parseFloat(document.getElementById("n2").value)

    selector = document.getElementById("selector").value

    switch(selector){
        case'+':
            calculo = (n1 + n2)
            document.getElementById("resultado").innerHTML=`o resultado da soma de ${n1} + ${n2} é = ${calculo}`
            break

        case'-':
            calculo = (n1-n2)
            document.getElementById("resultado").innerHTML=`o resultado da subtração de ${n1} - ${n2} é=${calculo}`
            break

        case'*':
            calculo = (n1*n2)
            document.getElementById("resultado").innerHTML=`o resultado da multiplicação de ${n1} * ${n2} é=${calculo}`
            break

        case'/':
            calculo = Math.round((n1/n2))
            if(Number.isNaN(calculo)){
                document.getElementById("resultado").innerHTML=`insira um numero valido!`
            } else{
            document.getElementById("resultado").innerHTML=`o resultado da divisão de ${n1} / ${n2} é=${calculo}`}
            break
            }
    }
 