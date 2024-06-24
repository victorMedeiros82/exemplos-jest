N,garrafa,cuia = map(float, input().split())
nomes = input().split()
acc = 0
while garrafa > cuia:
    garrafa -= cuia 
    acc += 1
pessoa = int(acc % N)
print(f'{nomes[pessoa]} {garrafa:.1f} ')