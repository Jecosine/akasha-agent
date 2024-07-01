
'use client';

import { OpenAIProviderCard } from '@/config/modelProviders';
import { featureFlagsSelectors, useServerConfigStore } from '@/store/serverConfig';
import AkashaIcon from './Icon';
import { ProviderItem } from '../../type';

export const useAkashaWhisperProvider = (): ProviderItem => {
  const { showOpenAIProxyUrl, showOpenAIApiKey } = useServerConfigStore(featureFlagsSelectors);
  return {
    ...OpenAIProviderCard,
    // [Alioth] updated attributes
    // checkModel: 'gpt-3.5-turbo',
    id: 'akasha-whisper',
    name: 'Akasha Whisper',
    proxyUrl: showOpenAIProxyUrl && {
      placeholder: 'https://api.openai.com/v1',
    },
    showApiKey: showOpenAIApiKey,
    title: <AkashaIcon.Combine size={24} />,
  };
};
