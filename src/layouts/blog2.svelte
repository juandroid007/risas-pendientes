<script context="module">
  import img from '../components/ImageCaption.svelte'
  export { img }
</script>

<script>
  import { metatags } from '@roxi/routify'
  import svitsConfig from '../../svits.config.json'

  import Carousel from '../components/carousel/Carousel.svelte'

  const getImg = (src) => {
    const validateExternalSrc = (str) =>
      str.indexOf("http://") == 0 || str.indexOf("https://") == 0
    const isExternal = validateExternalSrc(src)
    const path = isExternal ? src : '/images/' + src
    const extension = path.split('.').pop()
    const pathWithoutExtension = path.substr(0, path.length - extension.length)
    return isExternal ? path : pathWithoutExtension + 'webp'
  }

  export let title
  export let description
  export let thumbnail

  const slides = [
    {
      content: title,
      bg: `url(${getImg(thumbnail)})`,
    },
  ]

  metatags.title = title + ' | ' + svitsConfig.name
  metatags.description = description || svitsConfig.description
</script>

<div class="w-full">
  <Carousel slides={slides} height="80vh" waves fixed={false} title />

  <div class="pb-6 content">
    <a
      title="Go back"
      href="/blog"
      class="flex items-center justify-end w-full py-2 text-xl text-center text-gray-400 sm:text-2xl font-title"
      ><span class="i jam:chevron-left"></span> <span class="hover:underline">Go back</span></a
    >
  </div>

  <div class="pb-6 content layout">
    <slot />
  </div>
</div>

<style>
  :global(.layout h1, .layout h2, .layout h3) {
    @apply mb-4;
    @apply text-gray-800;
    font-weight: 400;
  }

  :global(.dark .layout h1, .dark .layout h2, .dark .layout h3) {
    color: white;
  }

  :global(.layout h1) {
    font-size: 2.5rem;
  }

  :global(.layout h2) {
    font-size: 2rem;
  }

  :global(.layout h3) {
    font-size: 1.5rem;
  }

  :global(.layout a) {
    @apply text-blue-500;
  }

  :global(.layout a:hover) {
    text-decoration: underline;
  }

  :global(.layout ul) {
    @apply list-disc;
    @apply pl-4;
  }

  :global(.layout li) {
    @apply list-disc;
    @apply my-2;
  }

  :global(.layout pre) {
    @apply rounded-xl;
  }
</style>
