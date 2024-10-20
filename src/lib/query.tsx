interface GraphQLQuery {
  query: string;
  variables?: object;
  noRevalidate?: boolean;
}

export const graphFetchApi = {
  async post<T>({ query, variables, noRevalidate }: GraphQLQuery): Promise<T> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`, {
      ...(!noRevalidate && { next: { revalidate: 10 } }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    });

    const json = await response.json();

    if (json.errors) {
      throw new Error(json.errors[0].message);
    }

    return json.data;
  },
};
