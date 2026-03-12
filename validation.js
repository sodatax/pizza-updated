export function validateForm(data) {
    console.log("Server side validation happens here");
    console.log(data);

    //store error messages in an array
    const errors = [];

    //validate first name
    if(data.fname.trim() == ""){
        errors.push("First name is required.");
    }

    //validate last name
    if(data.lname.trim() == ""){
        errors.push("Last name is required.");
    }

    //validate email
    if(data.email.trim() == ""){
        errors.push("Email is required.");
    }

    //validate method (pickup/delivery)
    const validMethods = ['pickup', 'delivery'];
    if(!validMethods.includes(data.method)){
        errors.push("Method must be pickup or delivery");
    }

    //validate method (small, medium, large)
    const validSize = ['small', 'medium', 'large'];
    if(!validSize.includes(data.size)){
        errors.push("Must select a size");
    }

    console.log(errors);
    return{
        isValid: errors.length === 0,
        errors
    };
}
