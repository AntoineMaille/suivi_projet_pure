<script setup>
import Timeline from "@/components/pages/roadmap/components/timeline/Timeline.vue";
import WaveDivider from "@/components/header/WaveHeader.vue";
</script>

<template>
    <div>
        <WaveDivider title="DÉCOUVREZ LA ROADMAP"/>
        <div style="display: flex" class="align-center justify-center">
            <Timeline/>
        </div>
    </div>
  <div class="footer">
    <p>&copy; 2023 Cast'IN. Tous droits réservés.</p>
  </div>
</template>

<style>
.footer {
  margin-top: 60px;
  text-align: center;
  font-size: 14px;
}
</style>
