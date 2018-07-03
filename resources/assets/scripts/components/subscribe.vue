<template>
  <div class="subscribe">
    <form action="">
        <input type="email" placeholder="example@mail.com" class="subscribe__input">
        <input type="submit" value="subscribe" class="subscribe__submit">
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return {

    };
  }
};
</script>

<style lang="scss" scoped>
@import '~@/_settings.scss';
@import '~@/_mixins.scss';

.subscribe {
  position: relative;
  display: none;
  justify-content: space-around;
  padding: 6rem 0;
  transform-style: preserve-3d;
  background: rgb(216, 165, 80);
  overflow: hidden;

  @media #{$medium} {
    display: flex;
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200px;
    transform: skewY(170deg);
    background: linear-gradient(-90deg, rgb(216, 165, 80), #875400);
    content: '';
  }

  form {
    z-index: 100;
    display: flex;
    border: 5px solid white;
  }

  &__input {
    width: 340px;
    padding: 0.6rem;
    outline: none;
    border: none;
    border-right: none;
    font-size: 1.3rem;
    font-style: italic;
    color: #333333;
  }

  &__submit {
    padding: 0.6rem 2rem;
    outline: none;
    border: 2px solid rgb(122, 87, 27);
    background: rgb(122, 87, 27);
    font-weight: 800;
    color: #ffffff;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
      border: 2px solid rgb(122, 87, 27);
      background: #ffffff;
      color: rgb(122, 87, 27);

      @include animate(pulse,200ms);
    }
  }
}
</style>

