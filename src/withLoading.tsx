import Loadable from 'react-loadable';
import Loading from './Loading';

// * not feasible with webpack
// const withLoading = (componentPath: string) =>
//   Loadable({
//     loader: () => import(componentPath),
//     loading: Loading,
//   });

// const withLoading = <Props extends {}>(
//   loader: () => Promise<{ default: React.ComponentType<Props> }>,
// ) =>
//   Loadable<Props, { default: React.ComponentType<Props> }>({
//     loader,
//     loading: Loading,
//   });

const withLoading = <Props extends {}>(
  loader: () => Promise<{ default: React.ComponentType<Props> }>,
) =>
  Loadable<Props, { default: React.ComponentType<Props> }>({
    loader: () =>
      loader().then(
        payload =>
          new Promise(resolve => setTimeout(() => resolve(payload), 2000)),
      ),
    loading: Loading,
  });

export default withLoading;
