import { submitForm} from "./components/form/submitForm.js";
//import { formValidation} from "./components/form/formValidation.js";

import { form } from "./components/form/formVariables.js";

// Listen for "SEND" button
form.addEventListener("submit", submitForm);