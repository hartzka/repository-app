import React from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
import RepositoryItem from './RepositoryItem'
import useRepositories from '../hooks/useRepositories'
import { useHistory } from 'react-router-dom';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  const history = useHistory();

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item, index, separators }) => (
        <TouchableOpacity onPress={() => {history.push(`/repository/${item.id}`);}}>
          <RepositoryItem
            fullName={item.fullName}
            description={item.description}
            language={item.language}
            stars={item.stargazersCount}
            forks={item.forksCount}
            reviews={item.reviewCount}
            rating={item.ratingAverage}
            image={item.ownerAvatarUrl}
          />
        </TouchableOpacity>
      )}
    />
  );
};

const RepositoryList = () => {
  const { repositories, loading } = useRepositories();

  if (loading) {
    return 'loading'
  }

  return <RepositoryListContainer repositories={repositories} />;
}

export default RepositoryList;