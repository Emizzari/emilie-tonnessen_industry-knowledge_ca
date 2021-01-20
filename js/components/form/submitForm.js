import { formValidation } from "./formValidation.js";
import displayMessage from "../messages/displayMessage.js";
import { feedback } from "./formVariables.js";

// Submit Form after the formm is validated
export function submitForm(event) {
    event.preventDefault();

    feedback.innerHTML = "";

    if (formValidation() === false){
        displayMessage(
            "feedback feedback--error", 
            "Please enter proper values", 
            ".feedback"
        );

        return false;
    } else{
        displayMessage(
            "feedback feedback--success", 
            "Your Message was sent! I will contact you shortly", 
            ".feedback"
        );

        return true;
    }
}