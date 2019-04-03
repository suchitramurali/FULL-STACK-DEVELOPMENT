a=[]
num=int(input("enter the no of list"))
for i in range (num):
	numbers=int(input("enter the number"))
	a.append(numbers)
print("maximum number in the list is",max(a))
print("minimum number in the list is",min(a))
