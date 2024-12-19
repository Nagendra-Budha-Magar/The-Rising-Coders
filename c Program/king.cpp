#include<stdio.h>
int main()
{
  float per1, per2;
  printf("Enter the percentage in SEE:");
  scanf("%f",&per1);
  printf("Enter the percentage in SLC:");
  scanf("%f",&per2);
  if (per1>=60)
  {
  	if(per2>=60){
  		printf("\nCongratulation you are good at stuides");
	  }
  }
  printf("You are not bad");
  return 0;
}
