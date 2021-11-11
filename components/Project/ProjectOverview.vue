<template>
  <TheSectionContainerWithTitle title="Overview">
    <div
      class="
        flex flex-col
        space-y-3
        bg-primary-background/50
        rounded-lg
        px-7.5
        py-6
        md:flex-row md:space-y-0 md:space-x-7.5
      "
    >
      <div class="w-full md:w-7/12">
        <div class="text-neutral-grey text-sm">Description</div>
        <div class="mt-1 font-medium text-neutral-mid prose prose-sm max-w-full">
          <p>
            Bifrost is a Polkadot DeFi infrustructure that committed to provide staking derivatives with high liquidity
            for different PoS chains. This subquery dynamically tracks all the extrinsic created from Bifrost, and
            contains derived stats for things like following:
          </p>
          <ul>
            <li>Historical data on transfer</li>
            <li>Historical data on mint/redeem</li>
            <li>Historical data on mintPrice/mktPrice by drawing a line chart</li>
            <li>Some values(e.g. apr, revenue) are calculated by something on chain state</li>
          </ul>
        </div>
      </div>
      <div class="w-full md:w-5/12 space-y-5">
        <div>
          <div class="text-neutral-grey text-sm">Network</div>
          <div class="mt-1 font-medium text-neutral-mid text-sm">Bifrost Asgard CC4</div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <div class="text-neutral-grey text-sm">Created</div>
            <div class="mt-1 font-medium text-neutral-mid text-sm">3 months ago</div>
          </div>
          <div>
            <div class="text-neutral-grey text-sm">Last Updated</div>
            <div class="mt-1 font-medium text-neutral-mid text-sm">3 months ago</div>
          </div>
        </div>
        <div class="space-y-3">
          <div class="font-medium text-neutral-mid text-sm flex items-center space-x-1.5">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.347 15.521C13.046 14.361 13.738 12.809 13.936 11H15.91C15.566 13.038 14.197 14.732 12.347 15.521ZM4.09 11H6.065C6.263 12.809 6.954 14.361 7.654 15.521C5.804 14.732 4.435 13.038 4.09 11ZM7.654 4.479C6.954 5.639 6.263 7.191 6.065 9H4.09C4.435 6.962 5.804 5.268 7.654 4.479ZM8.077 9C8.346 7.084 9.316 5.48 10.002 4.557C10.689 5.477 11.657 7.076 11.924 9H8.077ZM9.998 15.443C9.312 14.524 8.344 12.924 8.076 11H11.923C11.654 12.916 10.684 14.521 9.998 15.443ZM15.91 9H13.936C13.738 7.191 13.046 5.639 12.347 4.479C14.197 5.268 15.566 6.962 15.91 9ZM10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18C14.411 18 18 14.411 18 10C18 5.589 14.411 2 10 2Z"
                fill="#213960"
              />
            </svg>
            <a href="#" target="_blank" class="hover:underline">https://bifrost.co/</a>
          </div>
          <div class="font-medium text-neutral-mid text-sm flex items-center space-x-1.5">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 2.00043C7.9007 1.9781 5.87882 2.8291 4.37871 4.3664C2.8786 5.90371 2.02302 8.00152 2 10.1988C2.00809 11.9353 2.54178 13.6244 3.52441 15.0235C4.50704 16.4227 5.88805 17.4599 7.46909 17.9861C7.86909 18.0622 8.01454 17.811 8.01454 17.5903V16.1973C5.78909 16.6921 5.31636 15.1011 5.31636 15.1011C5.16821 14.6016 4.85326 14.1747 4.42909 13.8984C3.70182 13.396 4.48727 13.4036 4.48727 13.4036C4.73866 13.4387 4.97916 13.533 5.19077 13.6794C5.40237 13.8257 5.57957 14.0202 5.70909 14.2485C5.93479 14.6582 6.30512 14.9586 6.74037 15.0854C7.17563 15.2121 7.64101 15.1548 8.03636 14.926C8.07702 14.5091 8.25738 14.1208 8.54546 13.8298C6.77091 13.6243 4.90909 12.924 4.90909 9.78013C4.89322 8.96004 5.18272 8.16566 5.71636 7.56496C5.47333 6.86089 5.50203 6.08539 5.79636 5.4031C5.79636 5.4031 6.47273 5.18233 7.97818 6.24043C9.28865 5.87493 10.6677 5.87493 11.9782 6.24043C13.5054 5.18233 14.16 5.4031 14.16 5.4031C14.4543 6.08539 14.483 6.86089 14.24 7.56496C14.786 8.15465 15.0912 8.94371 15.0909 9.7649C15.0909 12.9163 13.2146 13.609 11.4546 13.8146C11.6473 14.0105 11.7961 14.2486 11.8904 14.5118C11.9847 14.7751 12.0221 15.0569 12 15.3371V17.5827C12 17.8491 12.1454 18.0622 12.5454 17.9785C14.122 17.449 15.4984 16.4116 16.478 15.0144C17.4575 13.6172 17.9902 11.9318 18 10.1988C17.977 8.00152 17.1214 5.90371 15.6212 4.3664C14.1212 2.8291 12.0993 1.9781 10 2.00043Z"
                fill="#213960"
              />
            </svg>
            <a href="#" target="_blank" class="hover:underline">https://github.com/bifrost-finance/bifrost-subql</a>
          </div>
        </div>
      </div>
    </div>
  </TheSectionContainerWithTitle>
</template>

<script>
export default {
  name: 'ProjectOverview',
};
</script>
