tempoInicial,minutoInicial,tempoFinal,minutoFinal=list(map(int,input().split()))
xxx = tempoFinal - tempoInicial
if(xxx < 0):
    xxx = 24 + (tempoFinal - tempoInicial)
yyy = minutoFinal - minutoInicial
if(yyy < 0):
     yyy = 60 + (minutoFinal - minutoInicial)
     xxx=xxx-1
if (tempoFinal == tempoInicial and minutoFinal == minutoInicial):
    print("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)")
else:
    print(f'O JOGO DUROU {xxx} HORA(S) E {yyy} MINUTO(S).')