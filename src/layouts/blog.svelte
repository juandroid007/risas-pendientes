<script context="module">
  import img from '../components/ImageCaption.svelte'
  export { img }
</script>

<script>
  import { metatags } from '@roxi/routify'
  import svitsConfig from '../../svits.config.json'
  import { fly } from 'svelte/transition'
  import PC from '../components/motion/ParallaxContainer.svelte'
  import P from '../components/motion/ParallaxObject.svelte'
  import V from '../components/IntersectingViewport.svelte'
  import Title from '../components/Title.svelte'
  import { preferences } from '../stores/preferences'
  import { calendar } from '../lib/dayjs'

  $: dark = $preferences.darkMode

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
  export let date

  metatags.title = title + ' | ' + svitsConfig.name
  metatags.description = description || svitsConfig.description
</script>

<div class="w-full">
  <div in:fly={{y: -10, duration: 500, delay: 100}}>
    <div class="pb-12 content">
      <a
        title="Go back"
        href="/blog"
        class="flex items-center justify-end w-full py-2 text-xl text-center text-gray-400 sm:text-2xl font-title"
        ><span class="i jam:chevron-left"></span> <span class="hover:underline">Back to blog</span></a
      >
      <Title first="Our blog" second={title}/>
    </div>
    <PC let:offset class="relative w-full overflow-hidden">
      <P
        offset={offset}
        class="absolute flex w-full -z-10"
        style="height: 150%;"
        motion={false}
        scaleFactor={6}
      >
        <div
          class="w-full h-full bg-center bg-cover"
          style="background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url({getImg(thumbnail)}), linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))"
          ></div
        >
      </P>
      <div class="w-full">
        <div class="py-24 content lg:w-6/10">
          <p
            class="text-xl text-center text-white sm:text-3xl font-title"
            >{description}</p
          >
          <p
              class="mt-12 text-xl text-center text-white sm:text-3xl font-title"
              >- Share -</p>
          <V class="flex items-center justify-center text-4xl text-white" once>
            <div class="mx-2 animate" style="--animate-y: -1rem; transition-delay: 500ms">
              <a
                href="/blog"
                class="transform hover:scale-90 hover:text-gray-200 duration-200"
                rel="noopener"
                target="_blank"
                title="Share on Facebook"
                ><span class="i jam:facebook"></span></a
              >
            </div>
            <div class="mx-2 animate" style="--animate-y: -1rem; transition-delay: 600ms">
              <a
                href="{null}"
                class="transform hover:scale-90 hover:text-gray-200 duration-200"
                rel="noopener"
                target="_blank"
                title="Share on Twitter"
                ><span class="i jam:facebook"></span></a
              >
            </div>
            <div class="mx-2 animate" style="--animate-y: -1rem; transition-delay: 700ms">
              <a
                href="{null}"
                class="transform hover:scale-90 hover:text-gray-200 duration-200"
                rel="noopener"
                target="_blank"
                title="Share on WhatsApp"
                ><span class="i jam:facebook"></span></a
              >
            </div>
          </V>
          <div
            class="pointer-events-none"
            style="
                   position: absolute;
                   bottom: 0;
                   left: 0;
                   width: 100%;
                   overflow: hidden;
                   line-height: 0;
                   "
          >
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              class="wave"
            >
              <path class="{dark ? 'dark-path' : 'white-path'}" d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"></path>
            </svg>
          </div>
        </div>
      </div>
    </PC>
    <div class="px-6 py-12 text-gray-600 dark:text-gray-100">
      <div class="w-full pb-12 mx-auto layout lg:px-0 lg:w-5/10">
        <div class="w-full text-base">
          {calendar(date)}
        </div>
      </div>
      <div class="w-full mx-auto layout lg:px-0 lg:w-5/10">
        <slot/>
      </div>
    </div>
  </div>
</div>

<style>
  @screen sm {
    :global(.layout) {
      @apply text-xl;
    }
  }

  :global(.layout p) {
    @apply mb-6;
  }

  :global(.layout h1, .layout h2, .layout h3) {
    @apply font-title;
    @apply mb-6;
    @apply leading-none;
    @apply text-gray-800;
    font-weight: 400;
  }

  :global(.dark .layout h1, .dark .layout h2, .dark .layout h3) {
    color: white;
  }

  :global(.layout blockquote) {
    border-left: 2px solid #0E9F6E;
    @apply pl-6;
  }

  :global(.layout h1) {
    @apply text-5xl;
  }

  :global(.layout h2) {
    @apply text-4xl;
  }

  :global(.layout h3) {
    @apply text-3xl;
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
    @apply mb-6;
  }

  .wave {
    display: block;
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 94px;
  }

  @screen sm {
    .wave {
      height: 128px;
    }
  }

  .wave path {
    transition: fill .2s ease;
  }

  .white-path {
    fill: #fff;
  }

  .dark-path {
    fill: #222;
  }
</style>
