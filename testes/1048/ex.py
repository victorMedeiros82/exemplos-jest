salarioInicial = float(input())
if(salarioInicial>=0 and salarioInicial<=400):
	percentual= salarioInicial*0.15
	novoSalario=salarioInicial+percentual
	d=15
elif(salarioInicial>=400.01 and salarioInicial<=800.00):
	percentual=salarioInicial*0.12
	novoSalario=salarioInicial+percentual
	d=12
elif(salarioInicial>=800.01 and salarioInicial<=1200.00):
    percentual=salarioInicial*0.1
    novoSalario=salarioInicial+percentual
    d=10
elif(salarioInicial>=1200.01 and salarioInicial<=2000.00):
	percentual=salarioInicial*0.07
	novoSalario=salarioInicial+percentual
	d=7
elif(salarioInicial>2000):
	percentual=salarioInicial*0.04
	novoSalario=salarioInicial+percentual
	d=4