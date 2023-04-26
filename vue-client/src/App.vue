<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";

interface UserInterface {
  email: string;
  password: string;
  phone: string;
  userinfo: string;
}

const user = ref<UserInterface>({
  email: "",
  password: "",
  phone: "",
  userinfo: "",
});

const onChange = (
  type: "email" | "password" | "phone" | "userinfo",
  value: string
) => {
  user.value[type] = value;
};

const fetchUser = async () => {
  const response = await axios.post("http://localhost:8081/api/user/registration", {
    email: user.value.email,
    password: user.value.password,
    phone: user.value.phone,
    userinfo: user.value.userinfo,
  });
  console.log(response)
};
</script>

<template>
  <section>
    <input
      placeholder="Введите почту"
      :value="user.email"
      @input="(e) => onChange('email', e.target.value)"
    />
    <input
      placeholder="Введите пароль"
      type="password"
      :value="user.password"
      @input="(e) => onChange('password', e.target.value)"
    />
    <input
      placeholder="Введите номер телефона"
      :value="user.phone"
      @input="(e) => onChange('phone', e.target.value)"
    />
    <input
      placeholder="Введите информацию о пользователе"
      :value="user.userinfo"
      @input="(e) => onChange('userinfo', e.target.value)"
    />
    <button @click="fetchUser">Регистрация</button>
  </section>
</template>

<style scoped></style>
