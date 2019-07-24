import React from 'react';
import { CircularProgress } from '@material-ui/core/';

interface WithLoadingProps {
  fetching: boolean;
}

const withLoading = <P extends object>(Component: React.ComponentType<P>) =>
  class WithLoading extends React.Component<P & WithLoadingProps> {
    render() {
      const { fetching, ...props } = this.props;
      return fetching ? <CircularProgress /> : <Component {...props as P} />;
    }
  };

export default withLoading