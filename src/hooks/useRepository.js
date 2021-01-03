import { useQuery } from '@apollo/react-hooks';

import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (repository_id) => {
  const { data, error, loading } = useQuery(GET_REPOSITORY, {
    variables: { id: repository_id }
  })

  return { data, loading }
};

export default useRepository;