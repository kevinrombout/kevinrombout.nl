<?php	
	if($_SERVER['HTTP_HOST'] == "www.kevinrombout.nl"){
		 header('Location: ' ."/logo.html");	
	}else{
		 header('Location: ' ."http://www.google.nl");			
	}
?>