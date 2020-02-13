function findN(first,second,nth){    
    var diff = second-first;
    nthTerm = (first + (nth-1) * diff);
    console.log(nthTerm + " is the " + nth +" term of the sequence");
}
findN(9,18,5)
