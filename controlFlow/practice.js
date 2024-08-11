let role="Employee";

if(role==="Employee"){
    console.log("Eligible for Deitery Services");
}
else if(role==="Enrolled Member"){
    console.log("Eligible for Deitery Services and one-on-one interaction with a dietician");
}
else if(role==="Subscriber"){
    console.log("Eligible for partial Deitery Services");
}

else{
    console.log("Enroll first or Subscribe to avail service");
}