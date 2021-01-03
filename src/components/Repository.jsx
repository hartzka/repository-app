import React from 'react';
import RepositoryItem from './RepositoryItem';
import useRepository from '../hooks/useRepository';
import { useParams } from 'react-router-dom';

const Repository = () => {
  const { id } = useParams(); 
  const { data, loading } = useRepository(id);
  const item = data?.repository;

  if (loading) {
    return null;
  }
  return (
    <RepositoryItem
      openButton={true}
      fullName={item.fullName}
      description={item.description}
      language={item.language}
      stars={item.stargazersCount}
      forks={item.forksCount}
      reviews={item.reviewCount}
      rating={item.ratingAverage}
      image={item.ownerAvatarUrl}
      url={item.url}
    />
  )
};

export default Repository;