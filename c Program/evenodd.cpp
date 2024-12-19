//wAP to read a number from user and identify the number is even or odd
#include<stdio.h>
int main()
{
	int a;
	printf("Enter any nuber:");
	scanf("%d",&a);
	if(a%2==0)
	{
		printf("The given number is even");
	}
	else
	{
		printf("The given number is odd");
	}
	return 0;
}
