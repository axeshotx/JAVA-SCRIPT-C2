// 3 times 

while (count<3) { 
    let pass = prompt ("ENTER PASSWORD")
    if (pass === real ) {
        console.log("Access Granted ✅");
        break;
    }
     else if (count === 0) {
        console.log("Wrong Password ❌, 2 Attempts Left")  // only this for every attempt
        count++
    } else if (count === 1) {
        let pass2 = prompt ("ENTER PASSWORD")
        if (pass2 === real ) {
            console.log("Access Granted ✅");
            break;
        }
        else {console.log ("Wrong Password ❌, 1 Attempt Left")
        count++}
    } else if (count === 2 ) {
        let pass3 = prompt ("ENTER PASSWORD")
        if (pass3 === real ) {
            console.log("Access Granted ✅");
            break;
        }
        else {console.log ("Account Locked 🔒")
        count++}
    }
    
}    // the wrong pass message was showing line 10 message only.