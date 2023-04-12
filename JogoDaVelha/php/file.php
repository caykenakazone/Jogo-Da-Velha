<?
    
    $user = $_POST['user'];
    $senha = $_POST['senha'];
    $record = array("user"=>$user,"senha"=>$senha);

    $registros = json_decode(file_get_contents("../json/users.json"),true);
    array_push($registros["usuarios"],$record);
    file_put_contents("../json/users.json",json_encode($registros));
    header("Location: ../login.html");

?>