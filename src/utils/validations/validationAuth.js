import { ref } from "vue";

const validationEmail = {
  required: "this field is required",
  min: "the minimum number of characters must be greater than 6",
  max: "maximum number of characters 50",
  empty: "fields must be filled in",
  ok: "",
};

const validationPassword = {
  required: "this field is required",
  min: "password must contain at least 6 characters",
  max: "maximum number of characters 50",
  empty: "fields must be filled in",
  ok: "",
};

const validationConfirmPassword = {
  required: "this field is required",
  min: "password must contain at least 6 characters",
  max: "maximum number of characters 50",
  empty: "fields must be filled in",
  match: "the password must match",
  ok: "",
};

export const isDirty = ref(false);
export const emailValidation = ref("");
export const passwordValidation = ref("");
export const confirmPasswordValidation = ref("");

export function makeInputDirty(name) {
  if (isDirty) {
    return getMessageValidation("required", name);
  }
}

export function inputCheckField(input, name, password) {
  if (input == "") {
    return getMessageValidation("empty", name);
  }
  if (input.length < 3) {
    return getMessageValidation("min", name);
  }
  if (input.length >= 10) {
    return getMessageValidation("ok", name);
  }
  if (input.length > 6) {
    return getMessageValidation("max", name);
  }
  if (input != password) {
    return getMessageValidation("match", name);
  }
}

export function getMessageValidation(key, name) {
  if (name == "email") {
    emailValidation.value = validationEmail[key];
  }
  if (name == "password") {
    passwordValidation.value = validationPassword[key];
  }
  if (name == "confirm password") {
    confirmPasswordValidation.value = validationConfirmPassword[key];
  }
}
