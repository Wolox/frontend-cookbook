import { useState, useEffect } from 'react';
import { useApolloClient } from '@apollo/react-hooks';
import flatten from 'lodash/flatten';

import { Recipe } from '~constants/interfaces/recipe';
import { getAllRecipesByCategory, getCategoriesAndTechs } from '~utils/queries';
import { getRecipesCode } from '~utils/recipes';
import { parseTechs, TechsResult } from '~utils/techs';
import { ALL_TECHS } from '~context/GlobalProvider/reducer';

const useRecipesQuery = (selectedTech: string, category: string) => {
  const client = useApolloClient();
  const [loading, setLoading] = useState(true);

  // TODO: to remove this | {} we need better typing in Recipes and getRecipesCode
  const [data, setData] = useState<(Recipe | {})[]>([]);
  useEffect(() => {
    const getTechs = () => {
      if (selectedTech !== ALL_TECHS) {
        return Promise.resolve([selectedTech]);
      }

      return client
        .query<TechsResult>({ query: getCategoriesAndTechs() })
        .then(result => parseTechs(result.data).map(tech => tech.name));
    };

    getTechs().then(techs => {
      const techQueries = techs.map(tech =>
        client.query({ query: getAllRecipesByCategory(tech, category) }).then(result => ({
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
    });
  }, [category, client, selectedTech]);

  return { loading, data };
};

export default useRecipesQuery;
