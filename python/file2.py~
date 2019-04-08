import pickle
a=int(input("enter the limit"))
f1=open("test.dat","w")
for i in range(a):
    s=int(input("enter the number"))
    pickle.dump(s,f1)
f1.close()
f1=open("test.dat","r")
for i in range(a):
    print pickle.load(f1)

