interface ICategory {
  _id: string;
  name: string;
  image: string;
}

interface IDish {
  _id: string;
  name: string;
  shortDescription: string;
  price: number;
  image: string;
}

interface IRestaurant {
  _id: string;
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
  _id: string;
  title: string;
  shortDescription: string;
  restaurants: IRestaurant[];
}
