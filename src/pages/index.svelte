<script>
  import svitsConfig from '../../svits.config'
  import { metatags } from '@roxi/routify'
  import V from '../components/IntersectingViewport.svelte'

  // import { getCollection } from '../collections'

  metatags.title = svitsConfig.name
</script>

<style>
  .bg {
    --gradient-from: rgba(249, 244, 144, 0.8);
    --gradient-to: rgba(218, 208, 11, 0.8);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: linear-gradient(to bottom right, var(--gradient-from), var(--gradient-to)), url(/images/bg.jpg);
  }

  .slash, .slash-2 {
    position: relative;
    width: 100%;
    margin: 4.75em 0;
  }

  .slash {
    @apply bg-summer-sky-500;
  }

  .slash-2 {
    background-color: #1e94bf;
  }

  .slash:before, .slash:after, .slash-2::before, .slash-2::after {
    background-repeat: no-repeat;
    background-size: 100% 100%;
    content: '';
    display: block;
    height: 4.75em;
    position: absolute;
    width: 100%;
  }

  .slash:before, .slash:after {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' style='fill:%2322ACE2%3B' /%3E%3C/svg%3E");
  }

  .slash-2:before, .slash-2:after {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' style='fill:%231e94bf%3B' /%3E%3C/svg%3E");
  }

  .pre-slash {
    margin-bottom: -4.75em;
  }

  .post-slash {
    margin-top: -4.75em;
  }

  .slash:before, .slash-2::before {
    top: -4.75em;
  }

  .slash:after, .slash-2::after {
    bottom: -4.75em;
  }

  .slash:after {
    transform: scaleY(-1);
  }

  .slash-2:after {
    transform: scale(-1, -1);
  }

  .slash-2:before {
    transform: scaleX(-1);
  }

  .text-risas {
    @apply p-2;
    @apply font-bold;
    @apply leading-none;
    @apply bg-summer-sky;
    @apply max-w-max-content;
    @apply text-paris-daisy;
    @apply rounded-lg;
  }
</style>

<div class="w-full bg-fixed bg">
  <div class="flex items-center py-32 sm:min-h-screen content pre-slash">
    <V class="flex flex-col w-full sm:flex-row animate" style="--animate-x: -3rem; --animate-y: -3rem">
      <img src="/images/isotipo-alt.svg" alt="Risas Pendientes" class="w-48 mb-12 sm:mb-0 sm:w-3/10 sm:mr-12">
      <div class="sm:self-end">
        <h1 class="mb-4 text-4xl sm:text-5xl text-risas">Risas Pendientes</h1>
        <p class="text-xl sm:text-2xl text-risas">Mejorando vidas y risas a la vez</p>
      </div>
    </V>
  </div>
  <div class="h-24 slash">
  </div>
  <div class="h-24 slash-2">
  </div>
  <div class="h-24 slash">
  </div>
  <div class="h-screen"></div>
</div>
