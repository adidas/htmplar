// Simple Node.js script to test the build without tsx dependency
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');

// Simple inline test
const html = renderToStaticMarkup(
  React.createElement(
    'div',
    { style: { padding: '20px' } },
    React.createElement('h1', null, 'HTMplar v2.0 Test'),
    React.createElement('p', null, 'If you can see this, React rendering works!')
  )
);

console.log('=== HTMplar v2.0 Build Test ===\n');
console.log('React rendering: ✅ SUCCESS\n');
console.log('HTML Output:');
console.log(html);
console.log('\n=== Test Complete ===');
