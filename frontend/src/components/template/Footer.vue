<template>
  <footer class="footer">
    <span>
      Copyright
      <strong>Gabriel Novais</strong> © 2020
    </span>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
.footer {
  grid-area: footer;
  background-color: #051937;
  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
}
</style>
