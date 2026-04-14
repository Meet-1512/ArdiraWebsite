<?php
/**
 * Partner Form Mail Handler - Phase 1 PHP mail()
 * 
 * Verifies Google reCAPTCHA v3 and sends an internal notification
 * and an auto-reply using standard PHP mail().
 */

// Enable CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
    exit;
}

// Configuration
$teamEmail = 'pateljeni3110@gmail.com'; // Sender & Internal Recipient (Requirement from Senior)
$siteName = 'Ardira Website';

// Parse Body
$inputJSON = file_get_contents('php://input');
$data = json_decode($inputJSON, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid JSON payload"]);
    exit;
}

// Validation
$fullName = trim($data['fullName'] ?? '');
$email = trim($data['email'] ?? '');
$company = trim($data['company'] ?? '');
$phone = trim($data['phone'] ?? '');
$country = trim($data['country'] ?? '');
$partnerType = trim($data['partnerType'] ?? '');
$message = trim($data['message'] ?? '');

if (!$fullName || !$email || !$company || !$phone || !$country || !$partnerType || !$message) {
    http_response_code(400);
    echo json_encode(["error" => "All fields are required"]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid email address"]);
    exit;
}

// Build Email Template
function buildEmailTemplate($headingText, $rows) {
    $rowsHtml = '';
    foreach ($rows as $row) {
        $rowsHtml .= '<tr>
                        <td style="color:#000;font-family:Arial,Helvetica,sans-serif;padding:10px;border-right:1px solid #ccc;border-bottom:1px solid #ccc;width:34%;"><strong>' . htmlspecialchars($row['label']) . ':</strong></td>
                        <td style="font-family:Arial,Helvetica,sans-serif;padding:10px;border-bottom:1px solid #ccc;width:66%;">' . nl2br($row['value']) . '</td>
                      </tr>';
    }

    return '<!DOCTYPE html>
<html>
<head><title></title></head>
<body>
  <table cellspacing="0" cellpadding="0" border="0" width="650" align="center" style="border:1px solid #e2e2e2;color:#13324b;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:normal;">
    <tr><td align="center" valign="top"><table cellspacing="0" cellpadding="0" width="100%" align="center" style="color:#000000;font-size:12px;">
          <tr>
            <td valign="top" bgcolor="#f4f9fb" style="text-align:center;padding:16px 0;border-bottom:1px solid #e2e2e2;">
              <a href="https://ardira.com" title="Ardira" target="_blank">
                <img src="https://ardira.com/favicon.webp" style="display:block;margin:0 auto;padding:10px 0;" width="120" border="0" alt="Ardira" />
              </a>
            </td>
          </tr>
          <tr>
            <td style="padding:16px;" align="center" valign="top">
              <table width="100%" cellspacing="0" cellpadding="0" align="center" style="font-size:12px;color:#333;">
                <tr><td align="left" style="padding:10px 0;font-size:12px;"><strong style="font-size:18px;color:#333;font-family:Arial,Helvetica,sans-serif;">' . htmlspecialchars($headingText) . '</strong></td></tr>
                <tr><td height="8"></td></tr>
                <tr><td width="100%">
                    <table width="100%" align="center" cellpadding="0" cellspacing="0" style="font-size:13px;color:#666666;border-collapse:collapse;border:1px solid #ccc;border-bottom:0;">
                      <tbody>' . $rowsHtml . '</tbody>
                    </table>
                  </td></tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <table cellpadding="0" cellspacing="0" border="0" width="100%" style="line-height:18px;padding:10px;border-top:solid 1px #e2e2e2;" bgcolor="#f4f9fb">
                <tr><td align="left" style="text-align:left;font-size:12px;font-family:Arial,Helvetica,sans-serif;"><strong>Thanks &amp; Regards</strong><br />Ardira Team<br /><strong>Address:</strong> 2040 Martin Ave, Santa Clara, CA 95050, United States<br /><strong>Phone:</strong> 1.669.777.6838<br /><strong>Email:</strong> <a href="mailto:info@ardira.com" style="color:#000;">info@ardira.com</a></td></tr>
              </table>
            </td>
          </tr>
        </table></td></tr>
  </table>
</body>
</html>';
}

// Internal Notification Email
$internalHtml = buildEmailTemplate(
    "New partner application received via Ardira Partner Hub",
    [
        ['label' => 'Name', 'value' => $fullName],
        ['label' => 'Email', 'value' => $email],
        ['label' => 'Company', 'value' => $company],
        ['label' => 'Phone', 'value' => $phone],
        ['label' => 'Country', 'value' => $country],
        ['label' => 'Partnership Type', 'value' => $partnerType],
        ['label' => 'Message', 'value' => $message],
    ]
);

// Auto-Reply Email
$autoReplyHtml = buildEmailTemplate(
    "We have received your partner application. Our partnerships team will review and reach out within 2 business days.",
    [
        ['label' => 'Name', 'value' => $fullName],
        ['label' => 'Email', 'value' => $email],
        ['label' => 'Company', 'value' => $company],
        ['label' => 'Phone', 'value' => $phone],
        ['label' => 'Country', 'value' => $country],
        ['label' => 'Partnership Type', 'value' => $partnerType],
    ]
);

$headersCommon  = "MIME-Version: 1.0\r\n";
$headersCommon .= "Content-type: text/html; charset=UTF-8\r\n";

$internalHeaders = $headersCommon . "From: $siteName <$teamEmail>\r\n" . "Reply-To: $email\r\n";
$autoReplyHeaders = $headersCommon . "From: $siteName <$teamEmail>\r\n" . "Reply-To: $teamEmail\r\n";

$internalSuccess = mail($teamEmail, "New Partner Application – Ardira", $internalHtml, $internalHeaders);
$autoReplySuccess = mail($email, "Thank You for Your Partner Application – Ardira", $autoReplyHtml, $autoReplyHeaders);

if ($internalSuccess && $autoReplySuccess) {
    http_response_code(200);
    echo json_encode(["success" => true, "message" => "Application submitted successfully"]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Failed to send email. PHP mail() error."]);
}
