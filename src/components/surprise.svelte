<script>
    import { onMount } from 'svelte';
    let randomLink = '';

    async function fetchRssFeed(url) {
        const response = await fetch(url);
        const text = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, 'application/xml');
        const items = Array.from(xml.querySelectorAll('item'));
        const randomItem = items[Math.floor(Math.random() * items.length)];
        return randomItem.querySelector('link').textContent;
    }

    onMount(async () => {
        const rssUrl = 'https://myjobscotland.gov.uk/api/v1/rss?alias=councils/orkney-islands-council/jobs/rss';
        randomLink = await fetchRssFeed(rssUrl);
    });
</script>

<div class="navbar">
    <button class="group w-fit px-4 pb-1 rounded-full  md:text-xl border-white border-solid border transition-all hover:transition-all hover:shadow-lg"><a class="text-white font-light transition-all group-hover:font-normal group-hover:drop-shadow-lg" href={randomLink} aria-label="Random job on MyJobScotland">surprise me</a></button>
</div>
