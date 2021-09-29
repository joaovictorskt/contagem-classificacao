var pessoas = window.prompt("Digite a quantidade de pessoas para o baile de duplas")
var pessoas = 10
for (let i = 0 ; i <= pessoas; i = i+1){
     if (i % 2 ==0 && i !=0){
        console.log(i + "   Par está Classificado!")
     } else if(i % 2 !=0){
         console.log(i +"  Impar está Desclassificado!")
        } else { console.log(i +'   Numero "ZERO" 0')
    }
     }
    