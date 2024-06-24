n = int(input())
pretoTotal = 0
brancoTotal = 255

while True:
    if n == 0: break
    else:
        for _ in range(n):
            questoes = list(map(int,input().split()))
            print(len(questoes))
            for e in range(questoes):
                print(e)
            