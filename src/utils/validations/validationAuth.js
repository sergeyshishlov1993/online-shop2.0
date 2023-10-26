import { reactive } from "vue";

export const errors = reactive({
  email: {
    isDirty: false,
    message: "",
  },

  password: {
    isDirty: false,
    message: "",
  },

  confirmPassword: {
    isDirty: false,
    message: "",
  },
});

const errorsMesage = {
  email: {
    required: "this field is required",
    min: "the minimum number of characters must be greater than 6",
    max: "maximum number of characters 50",
    empty: "fields must be filled in",
    ok: "",
  },

  password: {
    required: "this field is required",
    min: "password must contain at least 6 characters",
    max: "maximum number of characters 50",
    empty: "fields must be filled in",
    ok: "",
  },

  confirmPassword: {
    required: "this field is required",
    min: "password must contain at least 6 characters",
    max: "maximum number of characters 50",
    empty: "fields must be filled in",
    match: "the password must match",
    ok: "",
  },
};

export function inputCheckField(input, name) {
  if (input == "") {
    return getMessageValidation("empty", name);
  }

  if (input.length <= 5) {
    return getMessageValidation("min", name);
  }

  if (input.length >= 50) {
    return getMessageValidation("max", name);
  }

  if (input.length >= 6) {
    return getMessageValidation("ok", name);
  }
}

export function getMessageValidation(key, name) {
  return (errors[name].message = errorsMesage[name][key]);
}
