#include<stdio.h>
int main()
{
	int i = 1, n, fac = 1;
	printf("Enter any number");
	scanf("%d", &n);
	while(i<=n)
	{
		fac = fac*i;
		i++;
	}
	printf("%d \n", fac);
	return 0;
}
