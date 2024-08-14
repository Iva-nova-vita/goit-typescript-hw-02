export type Image = {
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
  id: string;
};

export type Response = {
    total_pages: number,
    results: Image[],
    total: number
}


