<script>
  import Footer from '../components/Footer.svelte'
  import { isChangingPage } from '@roxi/routify/runtime'
  import NProgress from 'nprogress'

  NProgress.configure({
    // Pass in your configuration here, below is just how I like it
    // Full list: https://github.com/rstacruz/nprogress#configuration
    minimum: 0.16,
    showSpinner: false,
  })

  $: {
    if ($isChangingPage) {
      NProgress.start()
    }

    if (!$isChangingPage) {
      NProgress.done()
    }
  }
</script>

<div class="flex flex-col w-full min-h-screen font-light">
  <main class="flex justify-center flex-grow w-full h-full overflow-hidden">
    <slot/>
  </main>
  <Footer/>
</div>
