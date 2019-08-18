<template>
  <div class="sv-logo">
    <h1 class="title">
      SuperVisi<i class="icofont-eye-open"></i>n
    </h1>
  </div>
</template>

<style>
.sv-logo {
  /* animation-name: scaleandfade;
  animation-iteration-count: infinite;
  animation-duration: 1.5s; */
}

h1.title {
  /* color: #ffcd41; */
  margin-bottom: .3em;
  background: linear-gradient(to bottom right, #ffcd41, #ff4a00);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

@keyframes scaleandfade {
  0% {
    opacity: 1;
    transform: scale(1.1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1);
  }
  75% {
    opacity: 1;
    /* transform: rotateX(0deg); */
    transform: scale(1.1);
  }
  100% {
    /* transform: rotateX(0deg); */
    transform: scale(1.0);
    opacity: 0.8;
  }
}

@keyframes godown {
  100% {
    top: 180px;
  }
}

@keyframes goright {
  100% {
    left: 70px;
  }
}
</style>
