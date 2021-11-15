import { cloneDeep } from 'lodash';

// Provide resolver functions for your schema fields
let projects = [
  {
    id: '1',
    name: 'Acala',
    image: 'https://picsum.photos/234/234?random=1',
    slug: 'OnFinality-io',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6756.png',
    deployed: true,
  },
  {
    id: '2',
    name: 'approval',
    image: 'https://picsum.photos/234/234?random=2',
    slug: 'wuminzhe',
    icon: 'https://api.thegraph.com/ipfs/api/v0/cat?arg=QmdSeSQ3APFjLktQY3aNVu3M5QXPfE9ZRK5LqgghRgB7L9',
    deployed: true,
  },
  {
    id: '3',
    name: 'Art Blocks',
    image: 'https://picsum.photos/234/234?random=3',
    slug: 'OnFinality-io',
    icon: 'https://api.thegraph.com/ipfs/api/v0/cat?arg=QmaSdMXUU1PWYNxZGZpUG85ce4taMdfibDQgidTNb2jYuJ',
    deployed: true,
  },
  {
    id: '4',
    name: 'Auctus Options',
    image: 'https://picsum.photos/234/234?random=4',
    slug: 'Decentraland',
    icon: 'https://api.thegraph.com/ipfs/api/v0/cat?arg=QmPc3RLXPexdfxcUr4XvoPxJnyTJzG7HniLe3eLkwu1C95',
    deployed: true,
  },
  {
    id: '5',
    name: 'Audius Network Mainnet',
    image: 'https://picsum.photos/234/234?random=5',
    slug: 'OnFinality-io',
    icon: 'https://ipfs.network.thegraph.com/api/v0/cat?arg=QmRj2EMJ4MTva6r7vqS8pPRxjG7p2m9jek7RC2ZfKPXLU9',
    deployed: true,
  },
  {
    id: '6',
    name: 'Badger DAO',
    image: 'https://picsum.photos/234/234?random=6',
    slug: 'demo1',
    icon: 'https://api.thegraph.com/ipfs/api/v0/cat?arg=QmSqRALRoe2nkt2dExYs3tGy9eCAk8asjBq3Ai568UtUnA',
    deployed: true,
  },
  {
    id: '7',
    name: 'Bifrost',
    image: 'https://picsum.photos/234/234?random=7',
    slug: 'bifrost-finance',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7817.png',
    deployed: true,
  },
  {
    id: '8',
    name: 'Crab',
    image: 'https://picsum.photos/234/234?random=8',
    slug: 'demo-1',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8977.png',
    deployed: true,
  },
  {
    id: '9',
    name: 'chainlink-eth-mainnet',
    image: 'https://picsum.photos/234/234?random=9',
    slug: 'C98subgraph',
    icon: 'https://assets.coingecko.com/coins/images/877/small/chainlink-new-logo.png?1547034700',
  },
  {
    id: '10',
    name: 'ChrisTestingV3',
    image: 'https://picsum.photos/234/234?random=10',
    slug: 'CHRISWHITED.ETH',
    icon: 'http://ipfs.network.thegraph.com/api/v0/cat?arg=QmcvmwVZH3pbVB43v8QRAnDDmun4VEGKGyiCxZQd45jWk7',
  },
  {
    id: '11',
    name: 'CryptovoxelsParcel',
    image: 'https://picsum.photos/234/234?random=11',
    slug: 'Curve',
    icon: 'https://api.thegraph.com/ipfs/api/v0/cat?arg=QmdSeSQ3APFjLktQY3aNVu3M5QXPfE9ZRK5LqgghRgB7L9',
  },
  {
    id: '12',
    name: 'DODOEX V2',
    image: 'https://picsum.photos/234/234?random=12',
    slug: 'Decentraland',
    icon: 'https://ipfs.network.thegraph.com/api/v0/cat?arg=Qmao586HmvZ3ZctgFpC2421u2ykPzLdAT9Z3ywdGyMCpHH',
    deployed: true,
  },
  {
    id: '13',
    name: 'DogeCoin',
    image: 'https://picsum.photos/234/234?random=13',
    slug: 'brunovale91',
    icon: 'https://api.thegraph.com/ipfs/api/v0/cat?arg=QmVswpZFoQWgPbBXZjMuvPGjqzvTKVnPAZ5h3Hd7QacocE',
  },
  {
    id: '14',
    name: 'JuiceBox',
    image: 'https://picsum.photos/234/234?random=14',
    slug: 'yooml',
    icon: 'https://api.thegraph.com/ipfs/api/v0/cat?arg=QmVJDauaPgh56etnzw89eGFA56wcdBAYixt2wkWfsmCThB',
    deployed: true,
  },
  {
    id: '15',
    name: 'IcoDrops',
    image: 'https://picsum.photos/234/234?random=15',
    slug: 'C98subgraph',
    icon: 'https://api.thegraph.com/ipfs/api/v0/cat?arg=QmR7uBF4amcfXt3YL6xXab7sisG7cUWM4WaGXzBfXXRCZj',
  },
  {
    id: '16',
    name: 'Fei',
    image: 'https://picsum.photos/234/234?random=16',
    slug: 'magick',
    icon: 'https://api.thegraph.com/ipfs/api/v0/cat?arg=QmZimsYgrKfqzzQta8jtmu25toF49p2UvRcnKemyqtQo1o',
    deployed: true,
  },
  {
    id: '17',
    name: 'Fear V2',
    image: 'https://picsum.photos/234/234?random=17',
    slug: 'fear-v2vikiival',
    icon: 'https://api.thegraph.com/ipfs/api/v0/cat?arg=QmdSeSQ3APFjLktQY3aNVu3M5QXPfE9ZRK5LqgghRgB7L9',
  },
  {
    id: '18',
    name: 'Eth Collections',
    image: 'https://picsum.photos/234/234?random=18',
    slug: 'filta',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
  },
  {
    id: '19',
    name: 'ETH2',
    image: 'https://picsum.photos/234/234?random=19',
    slug: 'Karura-dex',
    icon: 'https://api.thegraph.com/ipfs/api/v0/cat?arg=QmeNCYCSR2eCB4QEmkncU7jkzUV6tQQmkZDKf8dTsfL6EG',
    deployed: true,
  },
  {
    id: '20',
    name: 'Enzyme Finance',
    image: 'https://picsum.photos/234/234?random=20',
    slug: 'eth2',
    icon: 'https://ipfs.network.thegraph.com/api/v0/cat?arg=QmcooudZRKnaga9KFSAskfH2GejdCuSyU5zBJwcfFbGDmy',
  },
];

const resolvers = {
  Query: {
    projects: (_, filters) => {
      let _projects = cloneDeep(projects);
      if (Object.keys(filters).length > 0) {
        console.log('filters :>> ', filters);

        return _projects.filter((project) => {
          let filterCheck = true;

          for (const key in filters) {
            if (Object.hasOwnProperty.call(filters, key)) {
              const filter = filters[key];

              switch (typeof filter) {
                case 'string':
                  if (filter !== 'all') {
                    filterCheck =
                      (project.hasOwnProperty(key) &&
                        project[key].toString().toLowerCase().includes(filter.toLowerCase())) * filterCheck;
                  }
                  break;

                case 'boolean':
                  filterCheck = (!!project[key] === filter) * filterCheck;

                  break;

                default:
                  filterCheck = (project.hasOwnProperty(key) && project[key] === filter) * filterCheck;
                  break;
              }

              if (filterCheck === false) {
                return filterCheck;
              }
            }
          }

          return filterCheck;
        });
      }

      return _projects;
    },
    project: (_, { id }) => projects.find((project) => project.id === id),
    filterProjectByName: (_, { name }) =>
      projects.filter((project) => project.name && project.name.toLowerCase().includes(`${name}`.toLowerCase())),
  },
  Mutation: {
    createIndexer: (_, project) => {
      const unix = parseInt((new Date().getTime() / 1000).toFixed(0));

      let _project = cloneDeep(project);
      _project.id = `${unix}`;
      _project.deployed = false;
      projects.push(_project);

      return _project;
    },

    deployProject: (_, { id }) => {
      let _project = projects.find((project) => project.id === id);
      if (_project) {
        _project.deployed = true;

        return _project;
      }

      return null;
    },
  },
};

export default resolvers;
