<template>
  <TheSectionContainerWithTitle title="Indexers">
    <div class="rounded-lg overflow-hidden">
      <div class="w-full relative max-h-175 overflow-auto">
        <table class="min-w-full divide-y divide-neutral-lighter/20">
          <thead class="bg-primary">
            <tr>
              <th
                scope="col"
                class="bg-primary sticky top-0 px-6 py-4 text-center text-sm text-white font-normal uppercase"
              >
                ID
              </th>
              <th
                scope="col"
                class="bg-primary sticky top-0 px-6 py-4 text-center text-sm text-white font-normal uppercase"
              >
                Allocated Stake
              </th>
              <th
                scope="col"
                class="bg-primary sticky top-0 px-6 py-4 text-center text-sm text-white font-normal uppercase"
              >
                Query Fees
              </th>
              <th
                scope="col"
                class="bg-primary sticky top-0 px-6 py-4 text-center text-sm text-white font-normal uppercase"
              >
                Indexer Rewards
              </th>
              <th
                scope="col"
                class="bg-primary sticky top-0 px-6 py-4 text-center text-sm text-white font-normal uppercase"
              >
                Fee Cut
              </th>
              <th
                scope="col"
                class="bg-primary sticky top-0 px-6 py-4 text-center text-sm text-white font-normal uppercase"
              >
                Rewards Cut
              </th>
              <th
                scope="col"
                class="bg-primary sticky top-0 px-6 py-4 text-center text-sm text-white font-normal uppercase"
              >
                Member Since
              </th>
            </tr>
          </thead>
          <tbody class="bg-primary-background/50 divide-y divide-neutral-lighter/20">
            <tr v-for="(indexer, index) in indexers" :key="index">
              <td class="px-6 py-5 whitespace-nowrap text-center text-base text-neutral-mid font-medium">
                {{ indexer.id }}
              </td>
              <td class="px-6 py-5 whitespace-nowrap text-center text-base text-neutral-mid font-medium">
                {{ indexer.allocatedStake }}
              </td>
              <td class="px-6 py-5 whitespace-nowrap text-center text-base text-neutral-mid font-medium">
                {{ indexer.queryFees }}
              </td>
              <td class="px-6 py-5 whitespace-nowrap text-center text-base text-neutral-mid font-medium">
                {{ indexer.indexerRewards }}
              </td>
              <td class="px-6 py-5 whitespace-nowrap text-center text-base text-neutral-mid font-medium">
                {{ indexer.feeCut }}
              </td>
              <td class="px-6 py-5 whitespace-nowrap text-center text-base text-neutral-mid font-medium">
                {{ indexer.rewardsCut }}
              </td>
              <td class="px-6 py-5 whitespace-nowrap text-center text-base text-neutral-mid font-medium">
                {{ indexer.memberSince }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </TheSectionContainerWithTitle>
</template>

<script>
export default {
  name: 'ProjectIndexerTable',
  data() {
    return {
      indexers: [
        {
          id: '0x0b75—fd4655',
          allocatedStake: '465.9K',
          queryFees: '2.8K',
          indexerRewards: '334.8K',
          feeCut: '53%',
          rewardsCut: '53%',
          memberSince: '2020-12-22',
        },
        {
          id: '0x0b75—fd4655',
          allocatedStake: '465.9K',
          queryFees: '2.8K',
          indexerRewards: '334.8K',
          feeCut: '53%',
          rewardsCut: '53%',
          memberSince: '2020-12-22',
        },
        {
          id: '0x0b75—fd4655',
          allocatedStake: '465.9K',
          queryFees: '2.8K',
          indexerRewards: '334.8K',
          feeCut: '53%',
          rewardsCut: '53%',
          memberSince: '2020-12-22',
        },
        {
          id: '0x0b75—fd4655',
          allocatedStake: '465.9K',
          queryFees: '2.8K',
          indexerRewards: '334.8K',
          feeCut: '53%',
          rewardsCut: '53%',
          memberSince: '2020-12-22',
        },
        {
          id: '0x0b75—fd4655',
          allocatedStake: '465.9K',
          queryFees: '2.8K',
          indexerRewards: '334.8K',
          feeCut: '53%',
          rewardsCut: '53%',
          memberSince: '2020-12-22',
        },
        {
          id: '0x0b75—fd4655',
          allocatedStake: '465.9K',
          queryFees: '2.8K',
          indexerRewards: '334.8K',
          feeCut: '53%',
          rewardsCut: '53%',
          memberSince: '2020-12-22',
        },
        {
          id: '0x0b75—fd4655',
          allocatedStake: '465.9K',
          queryFees: '2.8K',
          indexerRewards: '334.8K',
          feeCut: '53%',
          rewardsCut: '53%',
          memberSince: '2020-12-22',
        },
        {
          id: '0x0b75—fd4655',
          allocatedStake: '465.9K',
          queryFees: '2.8K',
          indexerRewards: '334.8K',
          feeCut: '53%',
          rewardsCut: '53%',
          memberSince: '2020-12-22',
        },
        {
          id: '0x0b75—fd4655',
          allocatedStake: '465.9K',
          queryFees: '2.8K',
          indexerRewards: '334.8K',
          feeCut: '53%',
          rewardsCut: '53%',
          memberSince: '2020-12-22',
        },
        /* {
          id: '0x0b75—fd4655',
          allocatedStake: '465.9K',
          queryFees: '2.8K',
          indexerRewards: '334.8K',
          feeCut: '53%',
          rewardsCut: '53%',
          memberSince: '2020-12-22',
        },
        {
          id: '0x0b75—fd4655',
          allocatedStake: '465.9K',
          queryFees: '2.8K',
          indexerRewards: '334.8K',
          feeCut: '53%',
          rewardsCut: '53%',
          memberSince: '2020-12-22',
        },
        {
          id: '0x0b75—fd4655',
          allocatedStake: '465.9K',
          queryFees: '2.8K',
          indexerRewards: '334.8K',
          feeCut: '53%',
          rewardsCut: '53%',
          memberSince: '2020-12-22',
        },
        {
          id: '0x0b75—fd4655',
          allocatedStake: '465.9K',
          queryFees: '2.8K',
          indexerRewards: '334.8K',
          feeCut: '53%',
          rewardsCut: '53%',
          memberSince: '2020-12-22',
        },
        {
          id: '0x0b75—fd4655',
          allocatedStake: '465.9K',
          queryFees: '2.8K',
          indexerRewards: '334.8K',
          feeCut: '53%',
          rewardsCut: '53%',
          memberSince: '2020-12-22',
        }, */
      ],
    };
  },
};
</script>
