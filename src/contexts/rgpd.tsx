'use client';
import React, { createContext, useEffect, useReducer, useMemo } from 'react';
import { setCookie, getCookie } from 'cookies-next';

type State = {
  youtubeConsent: boolean | undefined;
  mapboxConsent: boolean;
};

type Action =
  | { type: 'SET_YOUTUBE_CONSENT'; payload: boolean }
  | { type: 'SET_MAPBOX_CONSENT'; payload: boolean };

type RGPDContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

const initialState: State = {
  youtubeConsent: undefined,
  mapboxConsent: false,
};

export const RGPDContext = createContext<RGPDContextType>({
  state: initialState,
  dispatch: () => {},
});

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_YOUTUBE_CONSENT':
      return { ...state, youtubeConsent: action.payload };
    case 'SET_MAPBOX_CONSENT':
      return { ...state, mapboxConsent: action.payload };
    default:
      return state;
  }
};

type RGPDProviderProps = {
  children: React.ReactNode;
};

export const RGPDProvider = ({ children }: RGPDProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const youtubeConsentCookie = getCookie('youtubeConsentPreprod');
    const mapboxConsentCookie = getCookie('mapboxConsent');

    if (youtubeConsentCookie) {
      dispatch({ type: 'SET_YOUTUBE_CONSENT', payload: true });
    }

    if (mapboxConsentCookie) {
      dispatch({ type: 'SET_MAPBOX_CONSENT', payload: true });
    }
  }, []);

  useEffect(() => {
    const youtubeConsentCookie = getCookie('youtubeConsentPreprod');

    if (!youtubeConsentCookie) {
      dispatch({ type: 'SET_YOUTUBE_CONSENT', payload: false });
    }
  }, []);

  useEffect(() => {
    if (state.youtubeConsent) {
      const expires = new Date();
      setCookie('youtubeConsentPreprod', 'true', {
        path: '/',
        expires: new Date(expires.setFullYear(expires.getFullYear() + 1)),
      });
    }

    if (state.mapboxConsent) {
      setCookie('mapboxConsent', 'true', { path: '/' });
    }
  }, [state]);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <RGPDContext.Provider value={value}>{children}</RGPDContext.Provider>;
};
