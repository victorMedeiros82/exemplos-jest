n = int(input())
for e in range(n):
    tomadas = list(map(int,input().split(' ')))
    print(sum(tomadas)-tomadas[0]*2+1)
    