//WAP to read three number from user then determine lagerest among them
#include<stdio.h>
int main()
{
	int a,b,c;
	printf("Enter first number:");
	scanf("%d",&a);
	printf("\n Enter the Second number:");
	scanf("%d",&b);
	printf("\n Enter the Third number:");
	scanf("%d",&c);
	if(a>b){
		if(b>c && a>c)
		{
			printf("First one is the greatest");
		}
		else{
			printf("Third one is greatest");
		}
	}
	else
	{
		printf("Second one is greatest");
	}
	return 0;
}
//There is error and on going to fix the code till then go to greateragain.cpp for proper code

