<template>
  <article
    class="relative flex flex-col justify-center items-center text-center text-md min-h-screen"
  >
    <section>
      <h2 data-aos="zoom-in-up" class="text-4xl font-bold my-8">About Me</h2>
      <p data-aos="fade-left">
        I am a <strong>Computer Science strong.Sc. student</strong> at The Open University of
        Israel, slated to complete my degree in the summer of 2024. Currently employed as an
        <strong>R&D Software Developer</strong>
        at Intel since 2022, I possess a strong foundation in software development and coding. In my
        free time, I am an avid coder, with a particular focus on video game development.
      </p>
      <p data-aos="fade-right">
        Beyond the realm of technology, I am a <strong>seasoned musician</strong>, having played the
        trombone since the age of 10 and participating in various orchestras and bands. My
        enthusiasm for music extends to a diverse range of instruments and genres, with a particular
        fondness for the bass and funk music.
      </p>
      <p data-aos="fade-left">
        I am passionate about <strong>music theory</strong>, viewing it as a human interpretation of
        mathematics, and I actively engage in music composition. Looking forward, one life goal of
        mine is to <strong>revolutionize the landscape of music composition</strong>, leveraging
        modern technology to create innovative and unprecedented musical experiences.
      </p>
      <p data-aos="fade-right">
        Please enjoy this showcase of my key skills, competencies, and experience in music, computer
        science and academic research 😊
      </p>
    </section>
    <ScrollDown :text="'see my works!'" :selector="'main'" />
  </article>
</template>

<script setup lang="ts">
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 1000
})
</script>

<style scoped>
p {
  @apply text-xl max-w-5xl pb-8 m-auto text-justify;
}
</style>