double FuzzyAND(double A, double B) return MIN(A, B);
double FuzzyOR(double A, double B) return MAX(A, B);
double FuzzyNOT(double A) return 1.0 - A;
double FuzzyGrade(double value, double x0, double x1){
	double result = 0;
	double x = value;
	if(x <= x0) result = 0;
	else if(x >= x1) result = 1;
	else result = (x/(x1-x0))-(x0/(x1-x0));
	return result;
}
double FuzzyReverseGrade(double value, double x0, double x1){
	double result = 0;
	double x = value;
	if(x <= x0) result = 1;
	else if(x >= x1) result = 0;
	else result = (-x/(x1-x0))+(x1/(x1-x0));
	return result;
}
double FuzzyTriangle(double value, double x0, double x1, double x2){
	double result = 0;
	double x = value;
	if(x <= x0) result = 0;
	else if(x == x1) result = 1;
	else if((x>x0) && (x<x1)) result = (x/(x1-x0))-(x0/(x1-x0));
	else result = (-x/(x2-x1))+(x2/(x2-x1));
	return result;
}
double FuzzyTrapezoid(double value, double x0, double x1, double x2, double x3){
	double result = 0;
	double x = value;
	if(x <= x0) result = 0;
	else if((x>=x1) && (x<=x2)) result = 1;
	else if((x>x0) && (x<x1)) result = (x/(x1-x0))-(x0/(x1-x0));
	else result = (-x/(x3-x2))+(x3/(x3-x2));
	return result;
}