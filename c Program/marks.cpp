// WAP that reads total marks in seven subject then calculate the perentage and determine division use following condition 
//i> percentage >80 is distinction
//ii> percentage between 60 to 80 is first division
//iii> percnetage between 39 to 59 is second division
//iv> percentage betn 32 to 38 is third division 
//v> percentage >31 is fail
#include<stdio.h>
int main()
{
	int a,b,c,d,e,f,g,total;
	float per;
	printf("Enter the marks in first subject:");
	scanf("%d",&a);
	printf("Enter the marks in second subject:");
	scanf("%d",&b);	
	printf("Enter the marks in third subject:");
	scanf("%d",&c);	
	printf("Enter the marks in fourth subject:");
	scanf("%d",&d);	
	printf("Enter the marks in fifth subject:");
	scanf("%d",&e);	
	printf("Enter the marks in sixth subject:");
	scanf("%d",&f);	
	printf("Enter the marks in seventh subject:");
	scanf("%d",&g);
	total=(a+b+c+d+e+f+g);
	printf("\n The total is %d out of 700",total);
	per=(total/7);
	printf("\nYour percentage is %f",per);
	if(per>=80)
	{
		printf("\nYour division is distinction");
	}
	else if(per>60 && per<80)
	{
		printf("\nYour division is first division");
	}
	else if(per>39 && per<59){
		printf("\nYour division is second division");
	}
	else if(per<31)
	{
		printf("\nYou are fail");
	}
	return 0;
}
