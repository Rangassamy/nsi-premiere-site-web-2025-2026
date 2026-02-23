def DéciEnBin (n):
    bin = " "
    while n > 0:
        reste = n % 2
        bin = str(reste) + bin
        n = n // 2
    
    return bin
