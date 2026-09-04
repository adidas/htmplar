import React from 'react';
import { Block, Text, Button, Image } from '../../packages/core/src';
import { renderToEmail, getBaseStyles } from '../../packages/renderer/src';

// Complete email example with all components
function CompleteEmail() {
  return (
    <>
      {/* Header */}
      <Block backgroundColor="#0066cc" padding={20}>
        <Text fontSize={24} fontWeight="bold" align="center" color="#ffffff">
          HTMplar v2.0
        </Text>
        <Text fontSize={14} align="center" color="#ffffff">
          Modern Email Development with React
        </Text>
      </Block>

      {/* Main Content */}
      <Block backgroundColor="#f4f4f4" padding={40}>
        <Block backgroundColor="#ffffff" padding={30} maxWidth={600}>
          {/* Hero Image */}
          <Image
            src="https://via.placeholder.com/600x300/0066cc/ffffff?text=HTMplar+v2.0"
            alt="HTMplar v2.0"
            width={600}
            height={300}
          />

          {/* Welcome Text */}
          <Block padding={20}>
            <Text fontSize={28} fontWeight="bold" color="#333333">
              Welcome to HTMplar v2.0!
            </Text>
          </Block>

          <Block padding="0 20px 20px">
            <Text fontSize={16} color="#666666" lineHeight={1.6}>
              We've completely rewritten HTMplar with modern tooling to make email development a
              joy. Write emails in React with TypeScript, and get production-ready HTML that works
              across all email clients.
            </Text>
          </Block>

          {/* Features List */}
          <Block padding={20} backgroundColor="#f8f8f8">
            <Text fontSize={20} fontWeight="bold" color="#333333">
              ✨ Key Features
            </Text>
            <Block padding="10px 0">
              <Text fontSize={14} color="#666666">
                🎨 React Components - Familiar component-based development
              </Text>
              <Text fontSize={14} color="#666666">
                🎯 TypeScript - Full type safety with IntelliSense
              </Text>
              <Text fontSize={14} color="#666666">
                ⚡ Fast Builds - Turborepo + tsup for instant builds
              </Text>
              <Text fontSize={14} color="#666666">
                📱 Responsive - Mobile-first, works on all devices
              </Text>
              <Text fontSize={14} color="#666666">
                📧 Email-Safe - Tested on 20+ email clients
              </Text>
            </Block>
          </Block>

          {/* CTA Button */}
          <Block padding={30}>
            <Button
              href="https://github.com/adidas/htmplar"
              backgroundColor="#0066cc"
              color="#ffffff"
              padding="16px 32px"
              fontSize={18}
              fullWidth={false}
            >
              Get Started →
            </Button>
          </Block>

          {/* Code Example */}
          <Block padding={20} backgroundColor="#1a1a1a">
            <Text fontSize={12} color="#00ff00" fontFamily="'Courier New', monospace">
              {'import { Block, Button, Text } from "@htmplar/core";'}
            </Text>
            <Text fontSize={12} color="#00ff00" fontFamily="'Courier New', monospace">
              {'import { renderToEmail } from "@htmplar/renderer";'}
            </Text>
            <Text fontSize={12} color="#666666" fontFamily="'Courier New', monospace">
              {''}
            </Text>
            <Text fontSize={12} color="#ffaa00" fontFamily="'Courier New', monospace">
              {'const email = <Block><Text>Hello!</Text></Block>;'}
            </Text>
            <Text fontSize={12} color="#00aaff" fontFamily="'Courier New', monospace">
              {'const html = renderToEmail(email);'}
            </Text>
          </Block>

          {/* Footer */}
          <Block padding={20}>
            <Text fontSize={12} color="#999999" align="center">
              Built with ❤️ by the adidas team
            </Text>
            <Text fontSize={12} color="#999999" align="center">
              © 2026 HTMplar v2.0 | MIT License
            </Text>
          </Block>
        </Block>
      </Block>
    </>
  );
}

// Render the email
const html = renderToEmail(<CompleteEmail />, {
  styles: getBaseStyles(),
});

console.log(html);
