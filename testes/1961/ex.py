linha1 = input().split(' ')
cano = input().split(' ')
pulo = int(linha1[0])
n = int(linha1[1])
for i in range(n-1):
    atual = int(cano[i])
    proximo = int(cano[i+1])
    if proximo > atual:
        altura = proximo - atual
        if pulo < altura:
            print('GAME OVER')
            break
    else:
        altura = atual - proximo
        if altura > pulo:
            print('GAME OVER')
            break
else:
    print('YOU WIN')