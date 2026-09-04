import React from 'react';
import { Block, Text } from '../../packages/core/src';
import { renderToEmail, getBaseStyles } from '../../packages/renderer/src';

// Example welcome email component
function WelcomeEmail() {
  return (
    <Block backgroundColor="#f4f4f4" padding={40}>
      <Block backgroundColor="#ffffff" padding={30} maxWidth={600}>
        <Text fontSize={24} fontWeight="bold" align="center" color="#333333">
          Welcome to HTMplar v2.0!
        </Text>

        <Block padding={20}>
          <Text fontSize={16} color="#666666" lineHeight={1.6}>
            Thank you for trying out HTMplar v2.0. We've completely rewritten the library with
            modern tooling including TypeScript, Vite, and Turborepo.
          </Text>
        </Block>

        <Block padding={20}>
          <Text fontSize={16} color="#666666" lineHeight={1.6}>
            This email was generated using:
          </Text>
          <Block padding="10px 0">
            <Text fontSize={14} color="#666666">
              • React components (Block, Text)
            </Text>
            <Text fontSize={14} color="#666666">
              • TypeScript for type safety
            </Text>
            <Text fontSize={14} color="#666666">
              • Email-safe table-based layouts
            </Text>
            <Text fontSize={14} color="#666666">
              • MSO conditional comments for Outlook
            </Text>
          </Block>
        </Block>

        <Block padding={20} backgroundColor="#0066cc">
          <Text fontSize={16} color="#ffffff" align="center" fontWeight="bold">
            Get Started Today
          </Text>
        </Block>

        <Block padding={20}>
          <Text fontSize={12} color="#999999" align="center">
            © 2026 HTMplar v2.0 | Built with ❤️ by the adidas team
          </Text>
        </Block>
      </Block>
    </Block>
  );
}

// Render the email
const html = renderToEmail(<WelcomeEmail />, {
  styles: getBaseStyles(),
});

console.log(html);
