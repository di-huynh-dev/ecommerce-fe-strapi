interface IRequest {
  url: string;
  method: string;
  body?: { [key: string]: any };
  queryParams?: any;
  useCredentials?: boolean;
  headers?: any;
  nextOption?: any;
}

interface Product {
  id: number;
  attributes: {
    name: string;
    price: number;
    size: Array<{ size: string; enabled: boolean }>;
    images: Array<{ attributes: { thumbnail: { url: string } } }>;
    thumbnail: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    original_price: number;
    slug: string;
    subtitle: string;
    description: string;
    categories: string;
    rating: number;
  };
}
