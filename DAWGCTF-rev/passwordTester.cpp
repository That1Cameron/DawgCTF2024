// hashTester.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>

long long compute_hash(std::string const& s) {
    const int p = 67; // prime number close to number of chars allowed (A-Z,a-z,0-9)
    const int m = 1e9 + 9;
    long long hash_value = 0;
    long long p_pow = 1;
    for (char c : s) {
        hash_value = (hash_value + (c - 'a' + 1) * p_pow) % m;
        p_pow = (p_pow * p) % m;
    }
    return hash_value;
}


int main(){
    std::string username;   
    long long key;
    //
    std::cout << "Enter a Username:";
    std::cin >> username;
    std::cout << "Enter a password:";
    std::cin >> key;
    if (key == compute_hash(username)) {
        std::cout << "Valid key and username\n";
    }else {
        std::cout << "Invalid key and username\n";
    }
}
