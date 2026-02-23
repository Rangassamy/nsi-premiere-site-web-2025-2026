def DeciEnBin ():
    n= int(input("choisissez un nombre décimal"))
    choix = 1
    binaire = " "
    while n > 0 :
        reste = n % 2
        binaire = str(reste) + binaire
        n = n // 2
    return binaire

def DeciEnHexa():
    n = int(input("choisissez un nombre décimal"))
    choix == 2
    hexa = ""
    while n > 0 :
        reste=n%16
        if reste==10 :
            reste="A"
        elif reste==11 :
            reste="B"
        elif reste == 12 :
            reste="C"
        elif reste == 13 :
            reste="D"
        elif reste == 14 :
            reste="E"
        elif reste == 15 :
            reste="F"
        hexa = str(reste) + hexa
        n = n//16
    return hexa
    print(hexa)
    
def BinEnDeci():
    n= str(input("choisissez un nombre binaire"))
    choix == 3
    decimal = 0
    puissance = len(n) - 1
    for chiffre in n :
        decimal = decimal + int (chiffre) * 2**puissance
        puissance = puissance- 1
    return decimal

def BinEnHexa ():
    n= str(input("choisissez un nombre binaire"))
    choix == 4
    decimal = 0
    puissance = len(n) - 1
    for chiffre in n :
        decimal = decimal + int(chiffre) * 2**puissance
        puissance = puissance - 1
    hexa =""
    while decimal > 0 :
        reste = decimal %16
        if reste==10 :
            reste="A"
        elif reste== 11 :
            reste="B"
        elif reste == 12 :
            reste="C"
        elif reste == 13 :
            reste="D"
        elif reste == 14 :
            reste="E"
        elif reste == 15 :
            reste="F"
        hexa = str(reste) + hexa
        decimal = decimal //16
    return hexa
    print (hexa)

    
def HexaEnDeci ():
    n = str(input("choisissez un nombre hexadécimal "))
    choix == 5
    decimal = 0
    puissance = len(n) - 1
    for chiffre in n :
        if chiffre == "A" :
            chiffre = 10
        elif chiffre == "B" :
            chiffre = 11
        elif chiffre == "C" :
            chiffre = 12
        elif chiffre == "D" :
            chiffre = 13
        elif chiffre == "E" :
            chiffre = 14
        elif chiffre == "F" :
            chiffre = 15
        decimal = decimal + int(chiffre) * 16**puissance
        puissance = puissance - 1
    return(decimal)

def HexaEnBin ():
    n = str(input("choisissez un nombre hexadécimal "))
    choix == 6
    decimal = 0
    puissance = len(n) - 1
    for chiffre in n :
        if chiffre=="A" :
            chiffre=10
        elif chiffre== "B" :
            chiffre=11
        elif chiffre == "C" :
            chiffre=12
        elif chiffre == "D" :
            chiffre=13
        elif chiffre == "E" :
            chiffre=14
        elif chiffre == "F" :
            chiffre=15
        decimal = decimal + int(chiffre) * 16**puissance
        puissance = puissance - 1
    binaire = ""
    while decimal > 0:
        reste = decimal %2
        binaire = str(reste) + binaire
        decimal = decimal //2
    return binaire
    print(binaire)

print("MENU")
print("Convertir un nombre en Decimal en Binaire (bouton 1)")
print("Convertir un nombre en Decimal en Hexadecimal (bouton 2)")
print("Convertir un nombre en Binaire en Decimal (bouton 3)")
print("Convertir un nombre en Binaire en Hexadecimal (bouton 4)")
print("Convertir un nombre en Hexadecimal en Decimal (bouton 5)")
print("Convertir un nombre en Hexadecimal en Binaire (bouton 6)")
choix = int(input("Comment voulez-vous convertir ?"))
    
    
if choix ==1:
    print (DeciEnBin ())
elif choix ==2:
    print (DeciEnHexa ())
elif choix ==3:
    print (BinEnDeci ())
elif choix ==4:
    print (BinEnHexa ())
elif choix ==5:
    print (HexaEnDeci ())
elif choix ==6:
    print (HexaEnBin ())