<?php
// guardar_mensaje.php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "portfolio_db";

// Crear conexión
$conn = new mysqli($servername, $username, $password);

// Crear base de datos si no existe
$conn->query("CREATE DATABASE IF NOT EXISTS $dbname");
$conn->select_db($dbname);

// Crear tabla de mensajes
$table = "CREATE TABLE IF NOT EXISTS mensajes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefono VARCHAR(20),
    asunto VARCHAR(200) NOT NULL,
    mensaje TEXT NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";
$conn->query($table);

// Recibir datos del formulario
$nombre = $_POST['nombre'] ?? '';
$email = $_POST['email'] ?? '';
$telefono = $_POST['telefono'] ?? '';
$asunto = $_POST['asunto'] ?? '';
$mensaje = $_POST['mensaje'] ?? '';

// Validar campos obligatorios
if(empty($nombre) || empty($email) || empty($asunto) || empty($mensaje)) {
    echo "error: Campos obligatorios vacíos";
    exit;
}

// Guardar en la base de datos
$stmt = $conn->prepare("INSERT INTO mensajes (nombre, email, telefono, asunto, mensaje) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $nombre, $email, $telefono, $asunto, $mensaje);

if($stmt->execute()) {
    echo "success: Mensaje guardado";
} else {
    echo "error: " . $conn->error;
}

$stmt->close();
$conn->close();
?>