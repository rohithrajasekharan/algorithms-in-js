function recursion(n){
    if(n<=1){
        return n;
    }
    return recursion(n-1)+recursion(n-2);
}

function memoization(n,cache){
    if(n<=1){
        return 1;
    }
    if(cache[n]!=0){
        return cache[n];
    }
    cache[n] = memoization(n-1, cache) + memoization(n-2, cache);
    return cache[n];
}

function dp(n){
    if(n<2){
        return n;
    }
    let dp = [0,1];
    let i =2;
    while(i<=n){
        let temp = dp[1];
        dp[1] = dp[0] + dp[1];
        dp[0] = temp;
        i++;
    }
    return dp[1];
}