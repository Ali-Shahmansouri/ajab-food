interface ICategory {
  name: string;
  image: string;
}

interface IDish {
  name: string;
  shortDescription: string;
  price: number;
  image: string;
}

interface IRestaurant {
  name: string;
  shortDescription: string;
  image: string;
  lat: number;
  lng: number;
  address: string;
  rating: number;
  category: ICategory;
  dishes: IDish[];
}

interface IFeaturedCategory {
  title: string;
  shortDescription: string;
  restaurants: IRestaurant[];
}
