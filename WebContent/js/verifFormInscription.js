function FormInscriptionControl(){

	msg = "";
	
	username = document.forms['FormInscript'].elements['username'];
	email = document.forms['FormInscript'].elements['email'];
	password = document.forms['FormInscript'].elements['password'];
	verifPwd = document.forms['FormInscript'].elements['confirmPassword'];
	
	//Traitement de la valeur du champ username
	if(username.value == ""){
		
		msg = msg + "Vous devez remplir votre nom d'utilisateur<br/>";
		username.style.backgroundColor=" #FFCCFF";
	}
	else{
		username.value = username.value;
		username.style.backgroundColor=" #FFFFFF";		
	}
	
	//Traitement de la valeur du champ e-mail
	if(email.value == ""){
		
		msg = msg + "Vous devez saisir votre adresse e-mail<br/>";
		email.style.backgroundColor=" #FFCCFF";
	}
	else{
		indice = email.value.indexOf("@",0);
		if(indice<0){
			msg = msg + "Votre adresse e-mail est invalide.<br/> Elle doit contenir l'arobase &acute;@&acute;(user@exemple.fom)<br/>";
			email.style.backgroundColor=" #FFCCFF";
		}
		else{
			if((email.value.lastIndexOf(".") < indice)){
				//alert(email.value.length);
				
				//alert("LastIndexOf: " + email.value.lastIndexOf("."));
				msg = msg + "Votre adresse e-mail est invalide.<br/>Elle doit contenir un nom du domaine suivi d'un point<br/>";
				email.style.backgroundColor=" #FFCCFF";
			}
			else{
				if((email.value.lastIndexOf("."))==(email.value.length - 1)){
					msg = msg + "Votre adresse e-mail est invalide.<br/>Il vous manque l'extenson du nom du domaine (.com par exemple)<br/>";
					email.style.backgroundColor=" #FFCCFF";
				}
				else{
					email.value = email.value;
					email.style.backgroundColor=" #FFFFFF";		
				}
			}
			
		}
	}
	
	//Traitement du mot de passe
	if(password.value == ""){
		msg = msg + "Vous devez taper votre mot de passe<br/>";
		password.style.backgroundColor=" #FFCCFF";
		verifPwd.style.backgroundColor=" #FFCCFF";
	}
	else{
		if(password.value != verifPwd.value){
			msg = msg + "Votre mot de passe ne correspond à la confirmation<br/>";
			password.style.backgroundColor=" #FFCCFF";
			verifPwd.style.backgroundColor=" #FFCCFF";
		}
	}
		
	if(msg!=""){
		
		document.getElementById("ErrorMsgContainerID").innerHTML = "<div id='ErrorMsgContainerID'><br/>" + msg + "</div>";
		
		return false;
	}
	
	return true;
}

