/**
 * Email-safe base styles
 */

export function getBaseStyles(): string {
  return `
/* Email Client Resets */
body {
  margin: 0;
  padding: 0;
  width: 100%;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}

table {
  border-collapse: collapse;
  mso-table-lspace: 0pt;
  mso-table-rspace: 0pt;
}

img {
  border: 0;
  height: auto;
  line-height: 100%;
  outline: none;
  text-decoration: none;
  -ms-interpolation-mode: bicubic;
}

p {
  margin: 0;
  padding: 0;
}

/* Link Resets */
a {
  text-decoration: none;
}

a[x-apple-data-detectors] {
  color: inherit !important;
  text-decoration: none !important;
  font-size: inherit !important;
  font-family: inherit !important;
  font-weight: inherit !important;
  line-height: inherit !important;
}

/* Outlook Specific */
#outlook a {
  padding: 0;
}

.ReadMsgBody,
.ExternalClass {
  width: 100%;
}

.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
  line-height: 100%;
}

/* Dark Mode Support */
@media (prefers-color-scheme: dark) {
  .dark-mode-bg {
    background-color: #1a1a1a !important;
  }
  .dark-mode-text {
    color: #ffffff !important;
  }
}

/* Mobile Responsive */
@media only screen and (max-width: 480px) {
  .mobile-full-width {
    width: 100% !important;
    max-width: 100% !important;
  }

  .mobile-hide {
    display: none !important;
  }

  .mobile-show {
    display: block !important;
    max-height: none !important;
    visibility: visible !important;
  }

  .mobile-padding {
    padding: 10px !important;
  }
}
`;
}
