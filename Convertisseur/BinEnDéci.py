def BinEnDéci(n):
    decimal=0
    n=str (n)
    puissance=len(n)-1
    for chiffre in n :
        decimal=decimal+ int (chiffre)*2**puissance
        puissance=puissance-1
    return decimal
    
        
        
                                                                                            
    