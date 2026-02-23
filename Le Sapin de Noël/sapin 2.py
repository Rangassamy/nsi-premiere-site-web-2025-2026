from random import *

def sapin (taille,hauteur):
    for i in range(taille):
        espace=" " * (taille - i)
        feuillage="'"'"' * (taille - i)
        if i==0:
            print(" " *taille + "*")
            print(espace + "^")
        elif i==1:
            print(espace + "/" *(2 *i - 1) + "\\")
        else:
            print(espace + "/" + feuillage *(i - 1) + "\\")
    for i in range (hauteur):
        print(" " * (taille - 1) +"|||")
        