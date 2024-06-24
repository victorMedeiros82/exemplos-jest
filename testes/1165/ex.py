n = int(input())
print(n)
for e in range(n):
    num = int(input())
    if num % 2 == 0 and num != 2 or num % 3 == 0 and num != 3 or num % 5 == 0 and num != 5 or num % 7 == 0 and num != 7:
        print(f'{num} nao eh primo')
    else:
        print(f'{num} eh primo')