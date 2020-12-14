<script>
  import './sw/sw'
  import { isOffline } from './sw/store'

  import { Router } from '@roxi/routify/runtime'
  import { routes } from '../.routify/routes'

  import OfflineBanner from './components/OfflineBanner.svelte'
  import BannerUpdate from './components/BannerUpdate.svelte'

  import svitsConfig from '../svits.config.json'

  // import { preferences } from './stores/preferences'

  if (svitsConfig.routifyRuntimeConfig?.useHash) {
    ! window.location.hash && window.location.replace(`${window.location.origin}/#${window.location.pathname}`)
  }
  // $: document.documentElement.classList.toggle('dark', $preferences.darkMode)

  function handleNetworkChange() {
    $isOffline = !navigator.onLine
  }

  import { onMount } from 'svelte'

  onMount(() => {
    window.addEventListener('online', handleNetworkChange)
    window.addEventListener('offline', handleNetworkChange)
  })

  $: if ($isOffline != undefined) {
    handleNetworkChange()
  }
</script>

<OfflineBanner/>
<BannerUpdate/>
<Router {routes} config={{ ...svitsConfig?.routifyRuntimeConfig }} />
