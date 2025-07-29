function valid_form(from){ // The form's 'name' attribute is "from"

    // Helper function remains the same, defined locally
    function fix_element(msg, element){
        alert(msg);
        element.focus();
    }

    // Validate UserName (input with name="name")
    if(from.name.value.trim() === ""){
        fix_element("Please enter your GitHub UserName.", from.name);
        from.name.value = ""; // Clear the field
        return false;
    }

    // Validate Email (input with name="email")
    const email = from.email.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex for format check

    if(email === ""){
        fix_element("Please enter your email address.", from.email);
        from.email.value = ""; // Clear the field
        return false;
    } else if (!emailPattern.test(email)) {
        // If the email is not empty but doesn't match the pattern
        fix_element("Please enter a valid email address (e.g., you@example.com).", from.email);
        from.email.value = ""; // Clear the field
        return false;
    }

    // Validate Complain Message (textarea with name="message")
    if(from.message.value.trim() === ""){
        fix_element("Please write what you want to complain about.", from.message);
        from.message.value = ""; // Clear the field
        return false;
    }

    // If all validations pass, return true to allow form submission
    return true;
}
 