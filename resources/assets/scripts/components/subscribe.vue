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
  display: flex;
  justify-content: space-around;
  position: relative;
  padding: 6rem 0;
  background: rgb(216,165,80);
  overflow: hidden;
  transform-style: preserve-3d;

  &::before {
    content: '';
    transform: skewY(170deg);
    top: 0;
    left: 0;
    width: 100%;
    height: 200px;
    position: absolute;
    background: linear-gradient(-90deg,  rgb(216,165,80),#875400);
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
    font-size: 1.3rem;
    color: #333;
    font-style: italic;
    border-right: none;
  }

  &__submit {
    outline: none;
    border: none;
    padding: 0.6rem 2rem;
    color: #fff;;
    background: rgb(122,87,27);
    font-weight: 800;
    text-transform: uppercase;
    cursor: pointer;
    border: 2px solid rgb(122,87,27);

    &:hover {
      border: 2px solid rgb(122,87,27);
      background: #fff;
      color: rgb(122,87,27);

      @include animate(pulse,200ms);
    }
  }
}
</style>

