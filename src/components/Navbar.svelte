<script>
	import { t } from '$lib/translations/index';
</script>

<div class="flex py-3 items-center px-5 navbar-floating shadow-main bg-white">
	<div class="navbar-start">
		<img src="/ln-light.png" alt="ln logo" class="w-28" />
	</div>
	<div class="navbar-end gap-5">
		<a href="/market" class="app-link-text app-text">{$t('common.market')}</a>
		<a href="/discover" class="app-link-text app-text">{$t('common.discover')}</a>
	</div>
</div>
