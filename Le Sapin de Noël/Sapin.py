def sapin(taille,hauteur):
    for i in range(taille):
        espace= " " * (taille - i)
        if i == 0 :
            print(" " * taille +"*")
            print(espace + "^")
        else:
            print(espace + "/"  + ('"'"'") * (2 * i - 1) * 2 +"\\")
    for i in range(hauteur):
        print(" " * (taille - 1) + "|||")