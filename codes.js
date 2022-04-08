module.exports = {
    answers: [
        `#include<bits/stdc++.h>
        using namespace std;
        
        int main(){
            int number_of_elements;
            cin >> number_of_elements;
            vector<int> array(number_of_elements);
            int sum_of_array = 0;
            for(int i = 0; i < number_of_elements; i++){
                cin >> array[i];
                sum_of_array += array[i];
            }
            cout << sum_of_array;
            return 0;
        }`,
        `#include <bits/stdc++.h>

        template<typename T> T gcd(T a, T b) {
            if(!b) return a;
            return gcd(b, a % b);
        }
        template<typename T> T lcm(T a, T b) {
            return a * b / gcd(a, b);
        }
        
        template<typename T> void chmin(T& a, T b) { a = (a > b) ? b : a; }
        template<typename T> void chmax(T& a, T b) { a = (a < b) ? b : a; }
        int in() { int x; scanf("%d", &x); return x; }
        
        using namespace std;
        
        #ifdef ONLINE_JUDGE
        #define debug(args...)
        #else
        #define debug(args...) fprintf(stderr,args)
        #endif
        
        typedef long long Int;
        typedef unsigned long long uInt;
        typedef unsigned uint;
        
        int A[5], B[5];
        
        int main(void) {
            int ia = 0;
            int ib = 0;
            
            for (int i = 0; i < 3; i++) {
                cin >> A[i];
            }
            for (int i = 0; i < 3; i++) {
                cin >> B[i];
        
                if (A[i] < B[i]) {
                    ib += 1;
                } else if (A[i] > B[i]) {
                    ia += 1;
                }
            }
        
            cout << ia << " " << ib << "\n";
            return 0;
        }`,
        `#include <cmath>
        #include <cstdio>
        #include <vector>
        #include <iostream>
        #include <algorithm>
        #include <iomanip>
        using namespace std;
        
        
        int main() {
            int t;
            double res=0;
            cin>>t;
            int table[5];
            for(int i=0;i<t;i++){
                cin>>table[i];
                res+=table[i];
            }
            cout<<fixed<<std::setprecision(0)<<res;
            /* Enter your code here. Read input from STDIN. Print output to STDOUT */   
            return 0;
        }`,
        `#include <cmath>
        #include <cstdio>
        #include <vector>
        #include <iostream>
        #include <algorithm>
        using namespace std;
        
        
        int main() {
            /* Enter your code here. Read input from STDIN. Print output to STDOUT */   
            int matrix[100][100];
            int i;
            cin>>i;
            for(int x=0;x<i;x++){
                for(int y=0;y<i;y++){
                    cin>>matrix[x][y];
                }
            }
           int diag1,diag2;
        diag1=0;diag2=0;
            for(int x=0;x<i;x++)
                {
                diag1=diag1+matrix[x][x];
            }
            for(int x=i-1;x>-1;x--)
                {
               
                diag2=(diag2+matrix[i-x-1][x]);   
            }
            int diff = diag1-diag2;
            if(diff<0){
                cout<<-(diff);
            }
            else
                cout<<diff;
            
            return 0;
        }`,
        `#include <cmath>
        #include <cstdio>
        #include <vector>
        #include <iostream>
        #include <algorithm>
        using namespace std;
        
        
        int main() {
            int N, n, total;
            float pos = 0., neg = 0., zer = 0.;
            
            cin >> N;
            
            total = N;
            
            while (N--) {
                cin >> n;
                if (n > 0) pos++;
                else if (n < 0) neg++;
                else zer++;
            }
            
            cout << pos / total << endl;
            cout << neg / total << endl;
            cout << zer / total << endl;
            
            return 0;
        }`,
        `#include <cmath>
        #include <cstdio>
        #include <vector>
        #include <iostream>
        #include <algorithm>
        using namespace std;
        
        
        int main() {
            /* Enter your code here. Read input from STDIN. Print output to STDOUT */   
            int n;
            cin >> n;
            for (int i = 0; i < n; ++i) {
                for (int j = 0; j < n - i - 1; ++j) {
                    printf(" ");
                }
                for (int j = n - i -1; j < n; ++j) {
                    printf("#");
                }
                printf("\n");
            }
            return 0;
        }`,
        `#include <algorithm>
        #include <string.h>
        #include <vector>
        #include <cstdio>
        #include <climits>
        #include <iostream>
        using namespace std;
        typedef long long lld;
        
        lld arr[6], N = 5;
        
        int main ()
        {
            //freopen("input.txt", "r", stdin);
        
            lld allsum = 0;
            lld MN = LLONG_MAX, MX = LLONG_MIN;
        
            for (int i=1; i<=N; i++)
            {
                scanf("%lld", &arr[i]);
                allsum += arr[i];
            }
        
            for (int i=1; i<=N; i++)
            {
                lld cur = allsum - arr[i];
                MN = min(MN, cur);
                MX = max(MX, cur);
            }
        
            printf("%lld %lld\n", MN, MX);
        }`,
        `#include <iostream>

        using namespace std;
        
        int main() {
            
            int n, maks = 0, kolko, x;
            
            cin >> n;
            
            for( int i=0; i<n; i++ ) {
                cin >> x;
                
                if( x > maks ) {
                    maks = x; 
                    kolko = 1;
                }
                else if( x == maks )
                    kolko++;
            }
            
            cout << kolko;
            
            
            return 0;
        }`,
        `#include <cstdio>
        #include <iostream>
        #include <vector>
        
        using namespace std;
        using std::vector;
        
        void solve(){
            int hour, minute, second;
            char c1, c2;
            scanf("%d:%d:%d%c%c", &hour, &minute, &second, &c1, &c2);
            // printf("%d\n%d\n%d\n%c\n%c", hour, minute, second, c1, c2);
            hour = hour % 12;
            if (c1 == 'P'){
                hour = hour + 12;
            }
            printf("%02d:%02d:%02d\n", hour, minute, second);
        
            return;
        }
        
        int main(){
        
            solve();
        
            return 0;
        }`
    ]
}