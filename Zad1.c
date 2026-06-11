#include <stdio.h>
#include <math.h>

#define EPS 1e-9

int sprawdz_odwrotnosc(double (*f)(double), double (*g)(double), int n) {
    for (int i = 1; i <= n; i++) {
        double a = f((double)i);
        double b = g((double)i);

        if (fabs(a * b - 1.0) > EPS) {
            return -1;
        }
    }
    return 1;
}

double f1(double x) {
    return 1.0 / x;
}

double g1(double x) {
    return x;
}

double f2(double x) {
    return x;
}

double g2(double x) {
    return x;
}

int main() {
    int n = 5;

    printf("Test 1 (poprawny): %d\n", sprawdz_odwrotnosc(f1, g1, n));

    printf("Test 2 (bledny): %d\n", sprawdz_odwrotnosc(f2, g2, n));

    return 0;
}