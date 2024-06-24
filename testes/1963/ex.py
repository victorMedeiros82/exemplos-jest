valores = list(map(float,input().split()))
aumento = ((valores[1]-valores[0])/valores[0])*100
print(f'{aumento}%')