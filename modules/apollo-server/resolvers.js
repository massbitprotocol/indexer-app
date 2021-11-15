import { cloneDeep } from 'lodash';

// Provide resolver functions for your schema fields
let projects = [
  {
    id: '1',
    name: 'Sushi - Mainnet Exchange',
    image: 'https://api.thegraph.com/ipfs/api/v0/cat?arg=QmP4AbpQXQH2gJeEY1KCtjUBnroiEksWBHH9A9zMBgrdZ8',
    slug: '0x4bb4 — 7ca0a0',
    icon: 'https://api.thegraph.com/ipfs/api/v0/cat?arg=QmQ3mTn1cnN8G9asUWiEg24fTZnmFKrw382VJKjZSSTPxq',
    network: 'main',
    deployed: true,
  },
  {
    id: '2',
    name: 'juicebox',
    image: 'https://api.thegraph.com/ipfs/api/v0/cat?arg=QmVJDauaPgh56etnzw89eGFA56wcdBAYixt2wkWfsmCThB',
    slug: '0x63a2 — 3d5834',
    icon: 'https://api.thegraph.com/ipfs/api/v0/cat?arg=Qmd6B7vbsR3BXAXKp2P5o5K3J3vyeCHBfa5oC1DasmZvT3',
    network: 'main',
    deployed: true,
  },
  {
    id: '3',
    name: 'Art Blocks',
    image: 'https://api.thegraph.com/ipfs/api/v0/cat?arg=QmaSdMXUU1PWYNxZGZpUG85ce4taMdfibDQgidTNb2jYuJ',
    slug: '0x3c3c — 15a5b0',
    icon: 'https://api.thegraph.com/ipfs/api/v0/cat?arg=QmaSdMXUU1PWYNxZGZpUG85ce4taMdfibDQgidTNb2jYuJ',
    network: 'main',
    deployed: true,
  },
  {
    id: '4',
    name: 'eip1155',
    image: 'https://api.thegraph.com/ipfs/api/v0/cat?arg=QmdSeSQ3APFjLktQY3aNVu3M5QXPfE9ZRK5LqgghRgB7L9',
    slug: '0x7859 — 0ce525',
    icon: 'https://api.thegraph.com/ipfs/api/v0/cat?arg=QmVmSHXoPUUAEqJxpFwewuvdPEDiUjNLc1Y3oaujEZBAJk',
    network: 'test',
    deployed: true,
  },
  {
    id: '5',
    name: 'Badger DAO',
    image: 'https://api.thegraph.com/ipfs/api/v0/cat?arg=QmSqRALRoe2nkt2dExYs3tGy9eCAk8asjBq3Ai568UtUnA',
    slug: '0x8d26 — 3e2f39',
    icon: 'https://api.thegraph.com/ipfs/api/v0/cat?arg=Qmcc1G7bB5JT8T4rwRjYgGcCbFEhYLZNyhGVc8tz3GEMpr',
    network: 'main',
    deployed: true,
  },
  {
    id: '6',
    name: 'Uniswap V3 Official',
    image: 'https://api.thegraph.com/ipfs/api/v0/cat?arg=QmfCirafQDEAhjAcXzf8SJRRfTWLmcnPnAeUcR3vW34d5x',
    slug: '0x9bde — 35a298',
    icon: 'https://api.thegraph.com/ipfs/api/v0/cat?arg=QmfCirafQDEAhjAcXzf8SJRRfTWLmcnPnAeUcR3vW34d5x',
    network: 'main',
    deployed: true,
  },
  {
    id: '7',
    name: 'DODOEX V2',
    image: 'https://ipfs.network.thegraph.com/api/v0/cat?arg=Qmao586HmvZ3ZctgFpC2421u2ykPzLdAT9Z3ywdGyMCpHH',
    slug: '0xd6ce — fadf5c',
    icon: 'https://ipfs.network.thegraph.com/api/v0/cat?arg=Qmao586HmvZ3ZctgFpC2421u2ykPzLdAT9Z3ywdGyMCpHH',
    network: 'main',
    deployed: true,
  },
  {
    id: '8',
    name: 'Audius Network Mainnet',
    image: 'https://ipfs.network.thegraph.com/api/v0/cat?arg=QmRj2EMJ4MTva6r7vqS8pPRxjG7p2m9jek7RC2ZfKPXLU9',
    slug: '0x819f — 069398',
    icon: 'https://picsum.photos/234/234?random=8',
    network: 'main',
    deployed: true,
  },
  {
    id: '9',
    name: 'RAI Mainnet',
    image: 'https://ipfs.network.thegraph.com/api/v0/cat?arg=QmeWYGEJne3CXRQxb22CbNaJh2Ze64W5NkYRmFoF9inrAX',
    slug: '0x9efb — 0c678c',
    icon: 'https://picsum.photos/234/234?random=9',
    network: 'main',
  },
  {
    id: '10',
    name: 'UMA Mainnet Voting',
    image: 'https://ipfs.network.thegraph.com/api/v0/cat?arg=QmUMFQw24Gz5BKXeGbBboXFqMPNJXvWqUStRxKZNUJ7mNe',
    slug: '0x0a03 — 7747a4',
    icon: 'https://picsum.photos/234/234?random=10',
    network: 'main',
  },
  {
    id: '11',
    name: 'Opyn Gamma Mainnet',
    image: 'https://ipfs.network.thegraph.com/api/v0/cat?arg=QmQB3FSVSiYx9XoUjSeprzi35tYhPvMG6zS4NnFRfLcyM6',
    slug: '0xfc3a — 1a7610',
    icon: 'https://picsum.photos/234/234?random=11',
    network: 'main',
  },
  {
    id: '12',
    name: 'Synthetix',
    image: 'https://api.thegraph.com/ipfs/api/v0/cat?arg=Qmf7KiTr6mu71gcNGqRcsfypmfmbofSX5YhBMN8EC8W4vG',
    slug: '0x369e — 3e4a70',
    icon: 'https://picsum.photos/234/234?random=12',
    network: 'main',
    deployed: true,
  },
  {
    id: '13',
    name: 'DogeCoin',
    image: 'https://api.thegraph.com/ipfs/api/v0/cat?arg=QmVswpZFoQWgPbBXZjMuvPGjqzvTKVnPAZ5h3Hd7QacocE',
    slug: '0x9064 — 2ee315',
    icon: 'https://picsum.photos/234/234?random=13',
    network: 'main',
    deployed: true,
  },
  {
    id: '14',
    name: 'ENS Protocol',
    image: 'https://api.thegraph.com/ipfs/api/v0/cat?arg=Qmeq8UcC92oDd3pvtR9SM6kP5Bk2Ydxufc7XcTcnLfCdQm',
    slug: '0x06b3 — 4eff64',
    icon: 'https://picsum.photos/234/234?random=14',
    network: 'main',
    deployed: true,
  },
  {
    id: '15',
    name: 'Wrapped BTC (WBTC)',
    image: 'https://api.thegraph.com/ipfs/api/v0/cat?arg=Qmaju7SNeb4RVpbWU5Akbuim4R1EVppEnKTu6y6RPwAgsq',
    slug: '0x91b3 — c4dfac',
    icon: 'https://picsum.photos/234/234?random=15',
    network: 'test',
    deployed: true,
  },
  {
    id: '16',
    name: 'vechain',
    image: 'https://api.thegraph.com/ipfs/api/v0/cat?arg=Qmc8te3KTt43Ngrb1kyVWq46oGkbQBpWhqS6AZcqCFd8Kx',
    slug: '0xa64f — a7e20a',
    icon: 'https://picsum.photos/234/234?random=16',
    network: 'test',
    deployed: true,
  },
  {
    id: '17',
    name: 'PancakeSwap',
    image: 'https://api.thegraph.com/ipfs/api/v0/cat?arg=QmZGcCqbZ89iYxqwmc7dm6zj5S526ukPbAKZpzL9c9uUSo',
    slug: '0x9064 — 2ee315',
    icon: 'https://picsum.photos/234/234?random=17',
    network: 'main',
    deployed: true,
  },
  {
    id: '18',
    name: 'Eth Collections',
    image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
    slug: 'filta',
    icon: 'https://picsum.photos/234/234?random=18',
    network: 'test',
    deployed: true,
  },
  {
    id: '19',
    name: 'ETH2',
    image: 'https://api.thegraph.com/ipfs/api/v0/cat?arg=QmeNCYCSR2eCB4QEmkncU7jkzUV6tQQmkZDKf8dTsfL6EG',
    slug: 'Karura-dex',
    icon: 'https://picsum.photos/234/234?random=19',
    network: 'test',
    deployed: true,
  },
  {
    id: '20',
    name: 'Enzyme Finance',
    image: 'https://ipfs.network.thegraph.com/api/v0/cat?arg=QmcooudZRKnaga9KFSAskfH2GejdCuSyU5zBJwcfFbGDmy',
    slug: 'eth2',
    icon: 'https://picsum.photos/234/234?random=20',
    network: 'test',
    deployed: true,
  },
];

const resolvers = {
  Query: {
    projects: (_, filters) => {
      let _projects = cloneDeep(projects);
      if (Object.keys(filters).length > 0) {
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
      _project.network = 'main';

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
