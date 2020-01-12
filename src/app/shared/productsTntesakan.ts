import RandomObjects from './discountProducts';

const productsTnetesakan = {
  title: 'Տնտեսական ապրանքներ',
  isActive: true,
  catalogs: [
    {
      title: 'Գալանտերեա',
      isActive: false,
      products: RandomObjects()
    },
    {
      title: 'Խաղալիքներ',
      isActive: false,
      products: RandomObjects()
    },
    {
      title: 'Նվերներ',
      isActive: false,
      products: RandomObjects()
    },
    {
      title: 'Կոսմետիկա',
      isActive: false,
      products: RandomObjects()
    },
    {
      title: 'Հիգիենայի միջոցներ',
      isActive: false,
      products: RandomObjects()
    },
    {
      title: 'Սպասք և խոհանոցային պարագաներ',
      isActive: false,
      products: RandomObjects()
    }
  ]
};

export default productsTnetesakan;
