def sum(a,b):
	return a+b
def sub(a,b):
	return a-b
def mul(a,b):
	return a*b
def div(a,b):
	if b==0:
		print "enter a no not equal to 0"
	else:
		return a/b
print "1.add\n2.sub\n3.mul\n4.div"
ch=int(input("enter u r choice"))
a=int(input("enter 1st no"))
b=int(input("enter 2nd no"))
if ch==1:
	print sum(a,b)
elif ch==2:
	print sub(a,b)
elif ch==3:
	print mul(a,b)
elif ch==4:
	print div(a,b)
else:
	print"invalid choice"
		
	

