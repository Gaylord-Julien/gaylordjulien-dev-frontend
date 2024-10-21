export type MenuItem = {
  id: string;
  attributes?: {
    title?: string;
    parent?: {
      data?: {
        attributes?: {
          title?: string;
        };
      };
    };
  };
  children?: MenuItem[];
};
