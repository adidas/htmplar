import { describe, it, expect } from 'vitest';
import { version } from '../src/index';

describe('@htmplar/cli', () => {
  it('should export version', () => {
    expect(version).toBeDefined();
    expect(typeof version).toBe('string');
  });

  it('should have correct version format', () => {
    expect(version).toMatch(/^\d+\.\d+\.\d+/);
  });
});
