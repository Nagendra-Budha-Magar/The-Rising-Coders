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
		if(a>c)
		{
			printf("\nFirst one is the greatest");
		}
		else{
			printf("\nThird one is the greatest");
		}
	}
	else{
		if(b>c){
				printf("\nSecond one is the greatest");
		}
		else{
				printf("\nThird one is the greatest");
		}
	}
	return 0;
}
