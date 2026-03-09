<?php
/**
 * processa.php
 * 
 * Script para processar e salvar dados do formulário de captura
 * em arquivo CSV com encoding UTF-8 (BOM para Excel)
 * 
 * @author Full Stack Developer
 * @version 1.0
 */

// Define o cabeçalho JSON para resposta
header('Content-Type: application/json; charset=utf-8');

// Permite requisições apenas via POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode([
        'status' => 'erro',
        'mensagem' => 'Método não permitido. Use POST.'
    ]);
    exit;
}

// Verifica se os campos obrigatórios foram enviados
$campos_obrigatorios = ['name', 'email', 'whatsapp'];
foreach ($campos_obrigatorios as $campo) {
    if (!isset($_POST[$campo]) || empty(trim($_POST[$campo]))) {
        echo json_encode([
            'status' => 'erro',
            'mensagem' => "O campo {$campo} é obrigatório."
        ]);
        exit;
    }
}

// Sanitiza e valida os dados recebidos
// Remove tags HTML e espaços extras, mantém apenas texto limpo
$nome = strip_tags(trim($_POST['name']));
$email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
$whatsapp = strip_tags(trim($_POST['whatsapp']));

// Remove caracteres não numéricos do WhatsApp (mantém apenas números)
$whatsapp = preg_replace('/[^0-9]/', '', $whatsapp);

$tipo = isset($_POST['tipo']) ? strip_tags(trim($_POST['tipo'])) : 'Não informado';

// Validação adicional
if (empty($nome) || strlen($nome) < 3) {
    echo json_encode([
        'status' => 'erro',
        'mensagem' => 'Nome deve ter pelo menos 3 caracteres.'
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        'status' => 'erro',
        'mensagem' => 'E-mail inválido.'
    ]);
    exit;
}

if (empty($whatsapp) || strlen($whatsapp) < 10 || strlen($whatsapp) > 11) {
    echo json_encode([
        'status' => 'erro',
        'mensagem' => 'WhatsApp inválido. Informe um número de celular válido com DDD (11 dígitos).'
    ]);
    exit;
}

// Obtém o IP do usuário (considera proxy/load balancer)
$ip = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? 'N/A';
if (strpos($ip, ',') !== false) {
    $ip = trim(explode(',', $ip)[0]);
}

// Data e hora atual no formato brasileiro
$data_hora = date('d/m/Y H:i:s');

// Nome do arquivo CSV
$arquivo_csv = 'leads_db_secure_list.csv';

// Verifica se o arquivo já existe para adicionar BOM apenas na primeira vez
$arquivo_existe = file_exists($arquivo_csv);
$modo_escrita = $arquivo_existe ? 'a' : 'w';

// Abre o arquivo para escrita (append ou write)
$handle = @fopen($arquivo_csv, $modo_escrita);

if ($handle === false) {
    echo json_encode([
        'status' => 'erro',
        'mensagem' => 'Erro ao abrir arquivo para escrita. Verifique as permissões do servidor.'
    ]);
    exit;
}

// Se for um arquivo novo, adiciona o BOM UTF-8 para Excel reconhecer acentos
if (!$arquivo_existe) {
    fwrite($handle, "\xEF\xBB\xBF");
    
    // Adiciona cabeçalho do CSV
    $cabecalho = ['Data/Hora', 'Nome', 'E-mail', 'WhatsApp', 'Tipo', 'IP'];
    fputcsv($handle, $cabecalho, ';');
}

// Prepara os dados para escrita (usa ponto e vírgula como delimitador para Excel)
$dados = [
    $data_hora,
    $nome,
    $email,
    $whatsapp,
    $tipo,
    $ip
];

// Escreve os dados no CSV
fputcsv($handle, $dados, ';');

// Fecha o arquivo
fclose($handle);

// Retorna sucesso
echo json_encode([
    'status' => 'sucesso',
    'mensagem' => 'Obrigado! Você foi adicionado à nossa lista de espera VIP. Em breve entraremos em contato.'
], JSON_UNESCAPED_UNICODE);

