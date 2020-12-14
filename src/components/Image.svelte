<script>
  let _class = ''
  export { _class as class }

  export let src
  export let alt = 'Alt'
  let path

  const validateExternalSrc = str =>
    str.indexOf("http://") == 0 || str.indexOf("https://") == 0

  $: isExternal = validateExternalSrc(src)
  $: path = isExternal ? src : '/images/' + src
  $: extension = path.split('.').pop()
  $: pathWithoutExtension = path.substr(0, path.length - extension.length)
</script>

{#if isExternal}
  <img src={path} {alt} class="{_class}">
{:else}
  <picture>
    <source srcset={pathWithoutExtension + 'webp'} type="image/webp">
    <source srcset={path} type={extension === 'png' ? 'image/png' : 'image/jpeg'}>
    <img src={path} {alt} class="{_class}">
  </picture>
{/if}
