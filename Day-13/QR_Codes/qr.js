const QRCode = require('qrcode');

// URL to encode into the QR code
const url = 'https://example.com';

// Generate and display the QR code in the terminal
QRCode.toString(url, { type: 'terminal' }, (err, qrCode) => {
  if (err) {
    console.error('Error generating QR code:', err);
    return;
  }

  console.log('QR Code for the URL:');
  console.log(qrCode);
});
