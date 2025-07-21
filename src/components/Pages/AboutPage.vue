<template>
  <div>
    <MediaTextComponent
      :content="offerText"
      :direction="Direction.RIGHT"
      :header="offerTitle"
      :enable-button="true"
      link="/services"
      button-text="Dowiedz się więcej"
    />
    <div class="m-8 flex items-center justify-center">
      <AmountCounter title="Lat doświadczenia" :target="30" :duration="1000" />
      <AmountCounter title="Zrealizowanych zleceń" :target="1000" :duration="1400" />
      <AmountCounter title="Zadowolonych klientów" :target="1000" :duration="1800" />
    </div>
    <MediaTextComponent
      :content="experienceText"
      :direction="Direction.LEFT"
      :header="experienceTitle"
      :enable-button="false"/>
  </div>
</template>

<script setup lang="ts">
import OfferComponent from '@/components/OfferComponent.vue'
import AmountCounter from '@/components/Pages/AmountCounter.vue'
import MediaTextComponent from '@/components/Pages/AboutPage/MediaTextComponent.vue'
import { Direction } from '@/Model/Enums/Direction'

const offerTitle = 'Szeroka oferta'
const offerText =
  'Świadczymy kompleksowe usługi geodezyjne dla klientów indywidualnych, firm oraz instytucji. Oferujemy m.in. pomiary geodezyjne, mapy do celów projektowych, podziały i wznowienia granic, inwentaryzacje powykonawcze oraz obsługę inwestycji budowlanych. Dzięki nowoczesnym technologiom i doświadczeniu naszego zespołu zapewniamy precyzję, terminowość oraz pełne wsparcie na każdym etapie realizacji projektu.'

const experienceTitle = 'Długoletnie doświadczenie'
const experienceText =
  'Od wielu lat świadczymy profesjonalne usługi geodezyjne, łącząc tradycję z nowoczesnymi technologiami. Nasz zespół składa się z doświadczonych geodetów, którzy realizują projekty dla klientów indywidualnych, firm i instytucji. Dzięki bogatemu doświadczeniu, precyzji i rzetelności zapewniamy najwyższą jakość usług, wspierając inwestycje budowlane, infrastrukturalne i planistyczne na każdym etapie realizacji.'


</script>