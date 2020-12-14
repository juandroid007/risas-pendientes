<script>
  import Image from './Image.svelte'

  let _class = ''
  export { _class as class }

  export let src
  export let alt
  export let title
</script>

<div class="w-full my-6 text-center">
  <Image src={src} alt={alt} class="mx-auto md:w-7/10 shadow-lg w-full rounded-xl {_class}"/>
  {#if title}
  <p class="mt-4 text-base md:w-7/10 md:mx-auto">{title}</p>
  {/if}
</div>
