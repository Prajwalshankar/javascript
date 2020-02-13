function checkPrime (n) {
  if ( n === 1)
  {
    console.log(n + " is not a prime number");
  }
  else if ( n === 2) {
    console.log(n + " is a prime number");
  }
  else {
    for(var i = 2; i < n; i++)
    {
      if (n % i === 0)
      {
        return false;
      }
    }    
    return true;
  }
}
console.log(checkPrime(5));
