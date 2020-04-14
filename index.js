submitFormulaire = (event) => {

				event.preventDefault();

				const form = document.getElementById('form');
				const info = document.getElementById('info');

				const email = document.getElementById('email').value;
				const email_confirmation = document.getElementById('email_confirmation').value;
				const first_name = document.getElementById('first_name').value;
				const last_name = document.getElementById('last_name').value;
				const old = document.getElementById('old').value;
				const exampleCheck1 = document.getElementById('exampleCheck1');

				const error_first_name = document.getElementById('error_first_name')
				const error_last_name = document.getElementById('error_last_name');
				const error_old = document.getElementById('error_old');
				const error_email = document.getElementById('error_email');
				const error_email_confirmation = document.getElementById('error_email_confirmation');
				const error_CGU = document.getElementById('error_CGU')

				const emailRegex = new RegExp('([A-Za-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3})$');


				verification_first_name = () => {
					if (first_name !== "" && first_name.length > 2){
						error_first_name.setAttribute('hidden','');
				    	return true;
				    }
					else {
						error_first_name.removeAttribute('hidden','');
					}
				}
				
				verification_last_name = () => {
					if (last_name !== ""){
						error_last_name.setAttribute('hidden','');
				    	return true;
				    }
					else {
						error_last_name.removeAttribute('hidden','');
					}
				}

				verification_old = () => {
				
					if (old !== "") {	
						if (!isNaN(old)) {
							// nombre
								
								    // nombre positif					
									if (old > 18) {
										error_old.setAttribute('hidden','');
										return true;
									}

									// nombre negatif
									else {
									error_old.removeAttribute('hidden','');
									}
						} 

						else {
						error_old.removeAttribute('hidden','');
						}
					}

					else{
						error_old.removeAttribute('hidden','');
					}
				}

				verification_email = () => {

					if (emailRegex.test(email) && email.length > 8 && email.length < 30){
						// console.log(email.length);
						// console.log(error_email);
						// console.log(emailRegex.test(email));

						error_email.setAttribute('hidden','');
						return true;
					}
					else{
						// console.log(email.length);
						error_email.removeAttribute('hidden','');
					}
				}

				verification_email_confirmation = () => {
					// console.log(email)
					// console.log(email_confirmation)

					if (email === email_confirmation){
						error_email_confirmation.setAttribute('hidden','');
					}
					else{
						error_email_confirmation.removeAttribute('hidden','');
					}
				}
				
				verification_radio_button = () => {
					if (exampleCheck1.checked == true) {
						error_CGU.setAttribute('hidden','');
					}
					else{
						error_CGU.removeAttribute('hidden','');
					}
				}

				submit = () => {
					if (verification_radio_button(), verification_email(), verification_email_confirmation(),verification_first_name(),verification_last_name(), verification_old()) {
							form.setAttribute('hidden','');
							info.removeAttribute('hidden','');
					}
				}
	submit();
};


document.getElementById("submit_formulaire").addEventListener("click", submitFormulaire);

