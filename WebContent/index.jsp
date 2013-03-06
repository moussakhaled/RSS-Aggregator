<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Welcome to our RSS Flux Aggregator</title>
<script type="text/javascript" 	src="${pageContext.request.contextPath}/js/verifFormInscription.js"></script>
</head>
<body>
	<div align="right">
		<form id="login" name="LoginButton" action="${pageContext.request.contextPath}/jsp/login.jsp">
			<input type="button" value="Sign in" align="right">
		</form>
	</div>
	<center>
		
		<div class="main-content container-fluid">
			<p>Welcome to our RSS Flux Aggregator</p>
		</div>
		<div id="ErrorMsgContainerID">
		</div>
		<div id="FormInscriptDivID" class="" >
			<fieldset style="width:25%">
    			<legend>Inscription</legend>
				<form id="FormInscriptID" name="FormInscript" method="post" action="${pageContext.request.contextPath}/Inscription" onSubmit="return FormInscriptionControl()">
					<table>
					
					<tr>
						<td><label for="username">Nom d'utilisateur</label></td>
						<td><input type="text" name="username"></td>
					</tr>
					<tr>
						<td><label for="email">Email</label></td> 
						<td><input type="text" name="email"></td>
					</tr>
					<tr>
						<td><label for="password">Password</label></td> 
						<td><input type="password" name="password"></td>
					</tr>
					<tr>
						<td><label for="confirmPassword">Confirmation Password</label></td> 
						<td><input type="password" name="confirmPassword"></td>
					</tr>
					<tr>
						<td/> <td align="center"><input type="submit" value="Inscription"></td>
					</tr> 
					</table>
				</form>
			</fieldset>
		</div>
	</center>
</body>
</html>