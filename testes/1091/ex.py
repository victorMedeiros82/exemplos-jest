consultasRealizadas = int(input())
while True:
    if consultasRealizadas == 0 : break
    else:
        n,m = list(map(int,input().split(' ')))
        for e in range(1,consultasRealizadas+1):
            x,y=map(int,input().split(' '))
            if x == n or y == m : print('divisa')
            elif x > n and y > m: print('NE')
            elif x > n and y < m: print('SE')
            elif x < n and y > m: print('NO')
            elif x < n and y < m: print('SO')
        consultasRealizadas = int(input())