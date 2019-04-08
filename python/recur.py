def fact(m):
	if m==0:
		return 1
	else:
		return m*fact(m-1)
m=int(input("enter a number"))
print fact(m)
