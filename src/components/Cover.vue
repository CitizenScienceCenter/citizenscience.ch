<template>
  <div>
    <div class="cover">
      <p>THE PEOPLE'S WAY OF RESEARCH</p>
      <div class="cover-overlay">
      </div>
    </div>
    asdfasdf<br>
    asdfasdf<br>
    asdfasdf<br>
    asdfasdf<br>
    asdfasdf<br>
    asdfasdf<br>
    asdfasdf<br>
    asdfasdf<br>
    asdfasdf<br>
    asdfasdf<br>
    asdfasdf<br>
    asdfasdf<br>
  </div>
</template>

<script>
export default {
  name: 'Cover'
}
</script>

<style lang="scss">

@import '@/variables.scss';

.cover {
  height: 640px;
  background-image: url('../assets/sylwia-bartyzel-3149-unsplash.jpg');
  background-size: cover;
  background-position: 50% 50%;
  position: relative;

  p {
    position: relative;
    color: white;
    z-index: 1;
    text-align: center;
    margin: auto;
    padding-top: 200px;
    font-size: 25px;
    line-height: 1;
    font-weight: 700;
  }

  .cover-overlay {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom right, #15496B, #832F45);
    opacity: 0.8;

    @media (color-gamut: srgb) {
      //background-image: linear-gradient(to bottom right, $color-secondary, $color-secondary);
    }
  }
}

</style>
