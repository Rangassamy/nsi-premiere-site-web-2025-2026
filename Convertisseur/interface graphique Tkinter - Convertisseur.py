from tkinter import *

fenetre = Tk()                                                                 #formaliter
titre = Label (fenetre, text = "Bonjour, bienvenue sur notre convertisseur!Vous pouvez entrer votre nombre ci-dessous:")
titre.configure(fg = 'purple')
fenetre.minsize(400,300)
titre.pack()
cadre = Frame(fenetre)
cadre.pack()

expression = StringVar()                                                        #pour entrer son choix
expression.set(" ")
entree = Entry(cadre, textvariable = expression, width = 30 )
entree.pack()
resultat = StringVar()
sortie = Label(cadre, textvariable =resultat )
sortie.pack()

def calculer ():                                                                #bouton pour calculer à conditionner avec les convertisseurs
    resultat.set(eval(expression.get()))
bouton = Button(cadre, text = "Calculer", command = calculer)
bouton.pack()

mode = StringVar()                                                              #options de calcule
bouton1 = Radiobutton(cadre, text="DeciEnBin", variable=mode, value="db",
                      command = calculer)
bouton2 = Radiobutton(cadre, text="DeciEnHexa", variable=mode, value="dh",
                      command = calculer)
bouton3 = Radiobutton(cadre, text="BinEnDeci", variable=mode, value="bd",
                      command = calculer)
bouton4 = Radiobutton(cadre, text="BinEnHexa", variable=mode, value="bh",
                      command = calculer)
bouton5 = Radiobutton(cadre, text="HexaEnDeci", variable=mode, value="hd",
                      command = calculer)
bouton6 = Radiobutton(cadre, text="HexaEnBin", variable=mode, value="hb",
                      command = calculer)
bouton1.pack()
bouton2.pack()
bouton3.pack()
bouton4.pack()
bouton5.pack()
bouton6.pack()
bouton1.select()


bouton_quitter = Button(cadre, text = "Quitter", command = fenetre.quit)    #bouton pour quitter la page
bouton_quitter.pack()
fenetre.mainloop()
fenetre.destroy()