import { useAuth } from '../contexts/UserAuthContext';

import Error from '../screens/error/Error';

export const RequireAuth = (props) => {

  const { children } = props;

  const auth = useAuth();

  if (!auth.user) {
    return (
      <Error/>
    )
  }

  return children;
}
