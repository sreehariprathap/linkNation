import { loadTranslations } from '$lib/translations/index';

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ url }) => {
	const { pathname } = url;
	const initLocale = 'en';
	await loadTranslations(initLocale, pathname);
	return {};
};
