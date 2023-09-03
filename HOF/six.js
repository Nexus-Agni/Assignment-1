const linkedInRegEx = /[(https:\/\/www\.linkedin.com)]{20}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/=]*)+/g;

function validateProfile(profile) {
    if (linkedInRegEx.test(profile)==true) {
        console.log("Profile is valid");
    } else {
        console.log("Profile is invalid");
    }
}

validateProfile("https://www.linkedin.com/in/agnibha-chakraborty-682339250") // true
 