#include <iostream>
using namespace std;

  int main(){
    int nums[4] = {2,4,7,1};
    int small= nums[0];
    for (int i = 0; i<4; i++){
        if(nums[i]<small){
            small= nums[i];
        }
    }
    cout<< small;
    return 0;
  }