// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    projects: () => [
      { id: '1', name: 'Acala', image: 'https://picsum.photos/234/234?random=1', slug: 'acala' },
      { id: '2', name: 'approval', image: 'https://picsum.photos/234/234?random=2', slug: 'approval' },
      { id: '3', name: 'Art Blocks', image: 'https://picsum.photos/234/234?random=3', slug: 'art-blocks' },
      { id: '4', name: 'Auctus Options', image: 'https://picsum.photos/234/234?random=4', slug: 'auctus-options' },
      {
        id: '5',
        name: 'Audius Network Mainne',
        image: 'https://picsum.photos/234/234?random=5',
        slug: 'audius-network-mainne',
      },
      { id: '6', name: 'Badger DAO', image: 'https://picsum.photos/234/234?random=6', slug: 'badger-dao' },
      { id: '7', name: 'Bifrost', image: 'https://picsum.photos/234/234?random=7', slug: 'bifrost' },
      { id: '8', name: 'Crab', image: 'https://picsum.photos/234/234?random=8', slug: 'crab' },
      {
        id: '9',
        name: 'chainlink-eth-mainnet',
        image: 'https://picsum.photos/234/234?random=9',
        slug: 'chainlink-eth-mainnet',
      },
      { id: '10', name: 'ChrisTestingV3', image: 'https://picsum.photos/234/234?random=10', slug: 'chris-testing-v3' },
      {
        id: '11',
        name: 'CryptovoxelsParcel',
        image: 'https://picsum.photos/234/234?random=11',
        slug: 'cryptovoxels-parcel',
      },
      { id: '12', name: 'DODOEX V2', image: 'https://picsum.photos/234/234?random=12', slug: 'dodoex-v2' },
      { id: '13', name: 'DogeCoin', image: 'https://picsum.photos/234/234?random=13', slug: 'doge-coin' },
      { id: '14', name: 'JuiceBox', image: 'https://picsum.photos/234/234?random=14', slug: 'juice-box' },
      { id: '15', name: 'IcoDrops', image: 'https://picsum.photos/234/234?random=15', slug: 'ico-drops' },
      { id: '16', name: 'Fei', image: 'https://picsum.photos/234/234?random=16', slug: 'fei' },
      { id: '17', name: 'Fear V2', image: 'https://picsum.photos/234/234?random=17', slug: 'fear-v2' },
      { id: '18', name: 'Eth Collections', image: 'https://picsum.photos/234/234?random=18', slug: 'eth-collections' },
      { id: '19', name: 'ETH2', image: 'https://picsum.photos/234/234?random=19', slug: 'eth2' },
      { id: '20', name: 'Enzyme Finance', image: 'https://picsum.photos/234/234?random=20', slug: 'enzyme-finance' },
    ],
  },
};

export default resolvers;
