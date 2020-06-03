import { useState, useEffect } from 'react';
import { useApolloClient } from '@apollo/react-hooks';
import flatten from 'lodash/flatten';

import { Recipe } from '~constants/interfaces/recipe';
import { getAllRecipesByCategory } from '~utils/queries';
import { getRecipesCode } from '~utils/recipes';

const useRecipesQuery = (selectedTech: string, techs: string[], category: string) => {
  // TODO: move selectedTech out of the hook?

  const client = useApolloClient();
  const [loading, setLoading] = useState(true);
  // TODO: to remove this | {} we need better typing in Recipes and getRecipesCode

  const [data, setData] = useState<(Recipe | {})[]>([]);
  useEffect(() => {
    const techQueries = (selectedTech === 'all' ? techs : [selectedTech]).map(tech =>
      client.query({ query: getAllRecipesByCategory(tech, category as string) }).then(result => ({
        tech,
        result
      }))
    );
    Promise.all(techQueries)
      .then(results =>
        results.map(({ tech, result }) =>
          getRecipesCode(result.data?.repository.object?.entries.map((entry: any) => ({ ...entry, tech })))
        )
      )
      .then(flatten)
      .then(setData)
      .catch(/* TODO: Handle error */)
      .then(() => setLoading(false));
  }, [category, client, techs, selectedTech]);

  return [loading, data];
};

export default useRecipesQuery;
