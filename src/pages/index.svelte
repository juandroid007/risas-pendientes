<script>
  import svitsConfig from '../../svits.config'
  import { metatags } from '@roxi/routify'
  import V from '../components/IntersectingViewport.svelte'

  // import { getCollection } from '../collections'

  metatags.title = svitsConfig.name
</script>

<style>
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
</style>

<div class="w-full text-lg text-white bg-fixed">
  <div class="flex min-h-screen bg-fixed bg pre-slash">
    <div class="flex items-center self-center h-full py-32 content">
      <V class="flex flex-col w-full sm:flex-row animate" style="--animate-x: -3rem; --animate-y: -3rem">
        <img src="/images/isotipo-alt.svg" alt="Risas Pendientes" class="h-32 mb-12 sm:h-auto sm:mb-0 sm:w-3/10 sm:mr-12">
        <div class="sm:self-end">
          <h1 class="mb-4 text-4xl sm:text-5xl text-risas">Risas Pendientes</h1>
          <p class="text-xl sm:text-2xl text-risas">Mejorando vidas y risas a la vez</p>
        </div>
      </V>
    </div>
  </div>
  <div class="slash">
    <div class="overflow-hidden">
      <V class="flex flex-col items-center py-16 content md:flex-row-reverse animate" style="--animate-x: 3rem">
        <div class="w-48 h-48 bg-gray-500 rounded-full">
        </div>
        <div class="w-full md:w-8/10 md:text-right md:pr-12">
          <h2 class="mb-6 text-2xl font-bold">Propuesta de Valor</h2>
          <p>
          Desde Risas Pendientes planteamos alternativas para el tratamiento de las
          lesiones maxilofaciales mediante el uso de la manufactura aditiva como
          principal método para la fabricación de dispositivos médicos para el
          tratamiento de mencionadas entidades.
          </p>
        </div>
      </V>
    </div>
  </div>
  <div class="slash-2">
    <div class="overflow-hidden">
      <V class="flex flex-col items-center py-16 content md:flex-row animate" style="--animate-x: -3rem">
        <div class="w-48 h-48 bg-gray-500 rounded-full">
        </div>
        <div class="w-full md:w-8/10 md:pl-12">
          <h2 class="mb-6 text-2xl font-bold">Dispositivos</h2>
          <p>
          Desde Risas Pendientes planteamos alternativas para el tratamiento de las
          lesiones maxilofaciales mediante el uso de la manufactura aditiva como
          principal método para la fabricación de dispositivos médicos para el
          tratamiento de mencionadas entidades.
          </p>
        </div>
      </V>
    </div>
  </div>
  <div class="slash">
    <div class="overflow-hidden">
      <V class="flex flex-col items-center py-16 content md:flex-row-reverse animate" style="--animate-x: 3rem">
        <div class="w-48 h-48 bg-gray-500 rounded-full">
        </div>
        <div class="w-full md:w-8/10 md:text-right md:pr-12">
          <h2 class="mb-6 text-2xl font-bold">Logros</h2>
          <p>
          Desde Risas Pendientes planteamos alternativas para el tratamiento de las
          lesiones maxilofaciales mediante el uso de la manufactura aditiva como
          principal método para la fabricación de dispositivos médicos para el
          tratamiento de mencionadas entidades.
          </p>
        </div>
      </V>
    </div>
  </div>
  <div class="h-screen bg-fixed bg bg2 post-slash"></div>
</div>
