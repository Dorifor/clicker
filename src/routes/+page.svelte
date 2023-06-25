<script>
	import { player } from '../stores/player.store';
	import { shop } from '../stores/shop.store';
	import { sumBy } from '../utils';

	const factor = 1.09;

	function getClickValueFromShopStore() {
		const clickValuePerks = $shop.filter((perk) => perk.type == 'click-value');
		const clickValue = sumBy(clickValuePerks, (perk) => perk.value * perk.amountSold);
		return clickValue + 1; // adding default 1 value
	}

	function mainClickHandler() {
		const money = $player.money + getClickValueFromShopStore();
		player.set({ ...player, money });
	}

	function buyShopPerk(perk) {
        const price = getPerkPrice(perk);
        if (price > $player.money) return;
		perk.amountSold++;
		$player.money -= price;
        $shop = [...$shop];
	}

	function getPerkPrice(perk) {
		return Math.ceil(perk.basePrice * Math.pow(factor, perk.amountSold));
	}
</script>

<p>money: {$player.money}</p>
<button on:click={mainClickHandler}>CLICK CLICK</button>

<hr />

{#each $shop as perk}
	<button on:click={buyShopPerk(perk)}>
		{perk.title} ({getPerkPrice(perk)})
	</button>
{/each}
