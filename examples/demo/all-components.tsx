import {
  Block,
  Text,
  Button,
  Image,
  Link,
  Heading,
  Spacer,
  Divider,
  Row,
  Column,
  Container,
} from '@htmplar/core';

/**
 * Comprehensive demo showcasing all 11 HTMplar components
 */
export default function AllComponentsDemo() {
  return (
    <Block backgroundColor="#f4f4f4" padding={40}>
      {/* Hero Section */}
      <Block backgroundColor="#ffffff" maxWidth={600}>
        <Image
          src="https://via.placeholder.com/600x300/0066cc/ffffff?text=HTMplar+v2.0"
          alt="HTMplar Hero"
          width={600}
          height={300}
        />

        <Block padding={30}>
          <Heading level={1} align="center" color="#0066cc">
            All Components Demo
          </Heading>

          <Text fontSize={16} align="center" color="#666666">
            HTMplar v2.0 - Modern email development with React
          </Text>

          <Spacer height={20} />

          <Button href="https://github.com/adidas/htmplar">Get Started →</Button>
        </Block>
      </Block>

      <Spacer height={30} />

      {/* Two Column Layout */}
      <Block backgroundColor="#ffffff" maxWidth={600} padding={0}>
        <Row>
          <Column width="50%" padding={20} backgroundColor="#f0f8ff">
            <Heading level={3} fontSize={18}>
              Column One
            </Heading>
            <Text>Two-column layouts work perfectly across all email clients.</Text>
          </Column>

          <Column width="50%" padding={20} backgroundColor="#fff0f0">
            <Heading level={3} fontSize={18}>
              Column Two
            </Heading>
            <Text>Responsive and mobile-friendly by default.</Text>
          </Column>
        </Row>
      </Block>

      <Spacer height={30} />

      {/* Features Section */}
      <Container maxWidth={600} backgroundColor="#ffffff" padding={30}>
        <Heading level={2} align="center">
          Key Features
        </Heading>

        <Divider color="#0066cc" height={2} />

        <Heading level={4}>✅ Email-Safe Components</Heading>
        <Text>
          All components use table-based layouts for maximum compatibility with email clients
          including Outlook.
        </Text>

        <Spacer height={15} />

        <Heading level={4}>✅ TypeScript Support</Heading>
        <Text>Full type safety with IntelliSense support for all props and components.</Text>

        <Spacer height={15} />

        <Heading level={4}>✅ Responsive Design</Heading>
        <Text>Mobile-first approach with automatic responsive behavior.</Text>

        <Divider marginTop={20} marginBottom={20} />

        <Text align="center">
          <Link href="https://github.com/adidas/htmplar" color="#0066cc">
            View Documentation
          </Link>
          {' • '}
          <Link href="https://github.com/adidas/htmplar/issues" color="#666666">
            Report Issues
          </Link>
        </Text>
      </Container>

      <Spacer height={30} />

      {/* Footer */}
      <Block backgroundColor="#333333" maxWidth={600} padding={20}>
        <Text fontSize={14} color="#ffffff" align="center">
          Built with HTMplar v2.0
        </Text>
        <Text fontSize={12} color="#999999" align="center">
          React components for email development
        </Text>
      </Block>
    </Block>
  );
}
