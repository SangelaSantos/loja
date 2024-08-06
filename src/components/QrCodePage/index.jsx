// src/components/QRCodePage.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import QRCode from 'qrcode.react';

const QRCodePage = () => {
  const location = useLocation();
  const { total } = location.state || { total: 0 };

  return (
    <div style={{ marginTop: '60px', textAlign: 'center' }}>
      <h3>Leia este código QR para prosseguir com o pagamento e concluir sua compra.</h3>
      <QRCode value={`Payment amount: $${total}`} size={256} />
    </div>
  );
};

export default QRCodePage;
