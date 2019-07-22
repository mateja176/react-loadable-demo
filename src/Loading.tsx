import React from 'react';
import { AtomSpinner } from 'react-epic-spinners';
import { LoadingComponentProps } from 'react-loadable';

const Loading: React.FC<LoadingComponentProps> = ({ isLoading }) =>
  isLoading ? <AtomSpinner /> : null;

export default Loading;
