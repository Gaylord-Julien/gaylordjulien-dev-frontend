import { renderHook, act } from '@testing-library/react';
import useMediaQuery from '@/common/utils/useMediaQuery';

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});
describe('useMediaQuery', () => {
  let matchMediaSpy: jest.SpyInstance;

  beforeEach(() => {
    matchMediaSpy = jest.spyOn(window, 'matchMedia');
  });

  afterEach(() => {
    matchMediaSpy.mockRestore();
  });

  it('returns true when query matches', () => {
    matchMediaSpy.mockImplementation(() => ({
      matches: true,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }));

    const { result } = renderHook(() => useMediaQuery('(min-width: 800px)'));
    expect(result.current).toBe(true);
  });

  it('returns false when query does not match', () => {
    matchMediaSpy.mockImplementation(() => ({
      matches: false,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }));

    const { result } = renderHook(() => useMediaQuery('(min-width: 800px)'));
    expect(result.current).toBe(false);
  });

  it('updates value when media query changes', () => {
    let matches = false;
    const listeners: Array<() => void> = [];
    matchMediaSpy.mockImplementation(() => ({
      get matches() {
        return matches;
      },
      addEventListener: jest.fn((event, callback) => {
        if (event === 'change') {
          listeners.push(callback);
        }
      }),
      removeEventListener: jest.fn((event, callback) => {
        if (event === 'change') {
          const index = listeners.indexOf(callback);
          if (index !== -1) {
            listeners.splice(index, 1);
          }
        }
      }),
    }));

    const { result } = renderHook(() => useMediaQuery('(min-width: 800px)'));
    act(() => {
      matches = true;
      listeners.forEach((listener) => listener());
    });

    expect(result.current).toBe(true);
  });
});
