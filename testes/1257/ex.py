palavra = []
alfabeto = {
    "A":0,"B":1,"C":2,"D":3,"E":4,"F":5,"G":6,"H":7,"I":8,"J":9,"K":10,"L":11,"M":12 ,"N":13,"O":14,"P":15,"Q":16,"R":17,"S":18,"T":19,"U":20,"V":21,"W":22,"Y":23,"X":24,
    "Z":25
}
somatoria=0
casosTestes = int(input())
for casoTeste in range(casosTestes):
    linhas = int(input())
    for linha in range(linhas):
        palavra = list(input())
        print(palavra)
        for p in palavra:
            print(p)