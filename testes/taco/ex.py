N = int(input())
total = 0

for _ in range(N):
    t,v = map(int,input().split())
    total += t*v

print(total)